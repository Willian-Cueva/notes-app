const notesCtrl = {};
const Note = require('../models/Note');

notesCtrl.renderNotesForm = (req, res) => {
  res.render("notes/new-note");
};

notesCtrl.createNewNote = async (req, res) => {
  const {title,description} =req.body;
  const newNote = new Note({title,description});
  await newNote.save();
  res.redirect('/notes');
};

notesCtrl.renderNotes = async (req, res) => {
  // res.send("Renderizar Notas");
  const notes = await Note.find().lean();
  res.render("notes/all-notes",{notes});
};

notesCtrl.renderEditForm = async (req, res)=> {
    const note = await Note.findById(req.params.id).lean();
    const id = req.params.id;
    res.render("notes/edit-note",{note,id});
};

notesCtrl.updateForm = (req,res)=>{
    const {id,title,description}= req.body;
    console.log(req.body);
    console.log(id);
    res.send("Se actualizaron los datos");
}

notesCtrl.deleteNote = async (req,res)=> {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect("/notes");
}

module.exports = notesCtrl;
