const { Router } = require('express');
const router = Router();

const {renderSignUpForm, renderSignInForm, signIn,signUp,logout}= require('../controllers/users.controllers');

router.get('/singup',renderSignUpForm);
router.post('/singup',signUp);

router.get('/signin',renderSignInForm);
router.post('/singin',signIn);

router.get('/logout',logout);


module.exports = router;