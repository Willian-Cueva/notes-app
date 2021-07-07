const notesCtrl = {};
const Note = require('../models/Note');

notesCtrl.renderNotesForm = (req, res) => {
  res.render('notes/new-note');
};

notesCtrl.createNewNote = async (req, res) => {
  const {title,description} =req.body;
  const newNote = new Note({title,description});
  await newNote.save();
  req.flash('success_msg','Nota Añadida Satisfactoriamente');
  res.redirect('/notes');
};

notesCtrl.renderNotes = async (req, res) => {
  // res.send('Renderizar Notas');
  const notes = await Note.find().lean();
  res.render('notes/all-notes',{notes});
};

notesCtrl.renderEditForm = async (req, res)=> {
    const note = await Note.findById(req.params.id).lean();
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
