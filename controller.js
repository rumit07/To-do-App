
// Mongoose Model
var Model = require('./model');
var mongoose=require('mongoose');

module.exports = {
 
      list :function(req,res)
      {

            Model.Notes.find(function(err,notes){

             if(err)
             {
                 res.send(err);
             }
             res.json({succees:"true",note:notes});

         });
      },

      destroy:function(req,res)
      {
            var note_id=req.params.note_id
             var id = ''+req.params.note_id;
                  

            note_id= mongoose.Types.ObjectId(id)

        console.log(note_id);

        Model.Notes.remove({"_id":note_id},function(err,done){
            if(err)
            {
              res.send(err);
            }
             res.json({succees:"true"});

        });
      },

      newNote:function(req,res)
      {
          var notes1=new Model.Notes({
              title:req.body.title,
              todos:req.body.todos,
          });

          notes1.save(function(err,notes1){
              if(err)
              {
                  res.send(err);
              }

              res.json({
                  success:true
              })
          });

      },

      noteUpdate:function(req,res){

            var note_id=req.params.note_id
            var id = ''+req.params.note_id;    
            note_id= mongoose.Types.ObjectId(id)

          Model.Notes.findById(mongoose.Types.ObjectId(note_id),function(err,note){

              if(err)
              {
                  res.send(err);
              }

              note.todos=req.body.todos;
              note.title=req.body.todos;

              note.save(function(err,notes){
                  if(err)
                  {
                      res.send(err);

                  }

                  res.json({success:true,notes:notes});

              })
              
          });
      }
  }
