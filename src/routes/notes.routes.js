const {Router} = require('express');
const router = Router();

const { renderNotesForm,createNewNote,renderNotes,renderEditForm,updateForm,deleteNote } = require('../controllers/notes.controllers');
//new notes
router.get('/notes/add',renderNotesForm);
router.post('/notes/new-note',createNewNote);
//get all notes
router.get('/notes',renderNotes);
//edit notes
router.get('/notes/edit/:id',renderEditForm);
router.put('/notes/edit/:id',updateForm);
//delete notes
router.delete('/notes/delete/:id',deleteNote);


module.exports = router;