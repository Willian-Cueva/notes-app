const mongoose = require('mongoose');

const NOTES_APP_MONGODB_HOST = "localhost";
const NOTES_APP_MONGODB_DATABASE = "notes-app";

const MONGODB_URI=`mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}) .then(db => console.log("La base de datos está conectada"))
    .catch(db => console.log(err))