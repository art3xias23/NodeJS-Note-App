console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const titleOptions = {
    describe: 'The title of the note',
    demand: true,
    alias: 'b'
};
const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};


const notes = require('./notes.js');

const argv = require('yargs')
.command('add', 'Adding a note',{
  title:titleOptions,
  body:bodyOptions})
.command('list', 'List all notes')
.command('read', 'Read an individual note', {
  title: titleOptions})
.command('remove', 'Removing a note',
{
  title:titleOptions})
.help()
.argv;

var command = argv._[0];

console.log('Command: ', command);
// console.log('Process: ', process.argv);
// console.log('Yargs: ', argv);

console.log(process.argv);

if (command == 'add')
{
  var note = notes.addNote(argv.title, argv.body);
  if (note == undefined)
  console.log('Note already exists');
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
  notes.getNote(argv.title);

}
else if (command == 'remove') {
var  noteRemoved = notes.removeNote(argv.title);
noteRemoved ? console.log('No note was removed') : console.log('Note successfully removed');



  }
