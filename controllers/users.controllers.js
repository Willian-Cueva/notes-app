const usersCtrl = {};
const User = require('../models/User');
const passport = require('passport');


usersCtrl.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

usersCtrl.signup = async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  const errors = [];
  console.log(req.body);
  if (password != confirm_password) {
    errors.push({ text: "Las contraseñas no coinciden" });
  }
  if (password.length < 4) {
    errors.push({ text: "La contraseña debe ser mayor a 4 caracteres" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      email,
      name
    });
  } else {
    const emailUser = await User.findOne({email: email});
    if(emailUser){
        req.flash('error_msg','El correo yá existe');
        res.redirect('/signup');
    }else{
        const newUser = new User({name,email,password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg','User Added Succesfuly');
        res.redirect('/signin');
    }
  }
};

usersCtrl.renderSignInForm = (req, res) => {
  res.render("users/signin");
};

usersCtrl.signIn = passport.authenticate('local',{
  failureRedirect: '/signin',
  successRedirect: '/notes',
  failureFlash: true
})

usersCtrl.logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out now.");
  res.redirect("/signin");
};

module.exports = usersCtrl;
