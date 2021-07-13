const {Router} = require('express');
const router = Router();

const {isAuthenticated}= require('../helpers/auth');

const { renderNotesForm,createNewNote,renderNotes,renderEditForm,updateForm,deleteNote } = require('../controllers/notes.controllers');
//new notes
router.get('/notes/add',isAuthenticated,renderNotesForm);
router.post('/notes/new-note',isAuthenticated,createNewNote);
//get all notes
router.get('/notes',isAuthenticated,renderNotes);
//edit notes
router.get('/notes/edit/:id',isAuthenticated,renderEditForm);
router.put('/notes/edit/:id',isAuthenticated,updateForm);
//delete notes
router.delete('/notes/delete/:id',isAuthenticated,deleteNote);


module.exports = router;