var controller=require('./controller');
module.exports = function(app) {

 app.get('/',controller.list);
 app.delete('/delete/:note_id',controller.destroy);
 app.post('/newNote',controller.newNote);
 app.put('/newList/:note_id',controller.noteUpdate);


}