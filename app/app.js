console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];

console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

console.log(process.argv);

if (command == 'add')
{
  var note = notes.addNote(argv.title, argv.body);
  if (note == undefined)
  console.log('No note was returned');
  else{
  console.log('The note was succesfully written');
  console.log('--');
  console.log(`Title: ${argv.title}, Body: ${argv.body}`);}
} else if (command=='list')
{
  console.log('Listing All Notes');
  notes.getAll();
}
else if (command == 'read')
{
  notes.readNote(argv.title);
}
else if (command == 'remove') {
notes.removeNote(argv.title);
  }
