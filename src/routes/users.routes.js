const { Router } = require('express');
const router = Router();

const {renderSignUpForm, renderSignInForm, signIn,signup,logout}= require('../controllers/users.controllers');

router.get('/signup',renderSignUpForm);
router.post('/signup',signup);

router.get('/signin',renderSignInForm);
router.post('/signin',signIn);

router.get('/logout',logout);


module.exports = router;