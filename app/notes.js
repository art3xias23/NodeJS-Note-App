console.log('Starting notes.js');

const fs = require('fs');
const app = require('./app.js');
var eol = require('os').EOL;


var addNote = (title, body) => {

 var notes = fetchNotes();
var note = {
  title,
  body,
  eol
};

var duplicateNotes = notes.filter((note) => note.title ===title);
if (duplicateNotes==0){
notes.push(note);
saveNotes(notes);
return note;
}

};

var getAll = () => {

  console.log('Getting all');
}


var readNote =(title) =>
{
  console.log('ReadingNote', app.title);
}

var removeNote = (title) =>
{
var notesJson = fetchNotes();
var filteredNotes = notesJson.filter(function(x){return x.title!=title});
saveNotes(filteredNotes);

return notesJson.length==filteredNotes.length;
}

//common functions
var fetchNotes = () =>
{
  try {

  var noteString = fs.readFileSync('notes-data.json');
 return JSON.parse(noteString);
  }
  catch (e){
    return [];
  }
}

var saveNotes = (notes) =>
{
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

//export the functions to require
module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
