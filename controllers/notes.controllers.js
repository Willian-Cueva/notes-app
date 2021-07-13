const notesCtrl = {};
const Note = require('../models/Note');

notesCtrl.renderNotesForm = (req, res) => {
  console.log(req.user);
  res.render('notes/new-note');
};

notesCtrl.createNewNote = async (req, res) => {
  const {title,description} =req.body;
  const newNote = new Note({title,description});
  newNote.user= req.user.email;
  await newNote.save();
  req.flash('success_msg','Nota Añadida Satisfactoriamente');
  res.redirect('/notes');
};

notesCtrl.renderNotes = async (req, res) => {
  // // res.send('Renderizar Notas');
  // console.log("======================= render ==================",req.user.email);
  const notes = await Note.find({user: req.user.email}).lean();
  res.render('notes/all-notes',{notes});
};

notesCtrl.renderEditForm = async (req, res)=> {
    const note = await Note.findById(req.params.id).lean();
    if(note.user != req.user.email){
      req.flash('error_msg','No autorizado');
      return res.redirect('/notes');
    }
    const id = req.params.id;
    res.render('notes/edit-note',{note,id});
};

notesCtrl.updateForm = async (req,res)=>{
    const {id,title,description}= req.body;
    await Note.findByIdAndUpdate(id,{title,description});
    req.flash('success_msg','Nota Actualizada Satisfactoriamente');
    res.redirect('/notes');
}

notesCtrl.deleteNote = async (req,res)=> {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Nota Eliminada Satisfactoriamente');
    res.redirect('/notes');
}

module.exports = notesCtrl;
