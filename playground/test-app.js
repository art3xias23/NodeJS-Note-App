const fs = require('fs');
const yargs = require('yargs').argv;
var addNote = function(title, body)
{
var notes = [];
var note = {
  title,
  body
};
try{

var noteString = fs.readFileSync('koce-test.json');
notes = JSON.parse(noteString);
}
catch (e)
{

}

var duplicateValue = notes.filter((note) => note.title===title);
if (duplicateValue==0){
notes.push(note);
fs.writeFileSync('koce-test.json', JSON.stringify(notes));
}
else{
  var note2 = 'The If was not passed';
  notes.push(note2);
fs.writeFileSync('koce-test.json', JSON.stringify(notes));
}



}

addNote(yargs.title, yargs.body);

module.exports =
{
  addNote
};
