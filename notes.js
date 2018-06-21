const fs = require('fs');
const _ = require('lodash');

// load the notes from the file.
let loadNotes = () => {
    try {
        let noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

// write an array to the file.
let writeNotes = (notesArray) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notesArray));
};

// add a new note
let addNote = (title, body) => {
    let notesArray = loadNotes();
    notesArray = _.unionWith([{
        title,
        body,
    }], notesArray, (oldNote, newNote) => oldNote.title === newNote.title);
    writeNotes(notesArray);
};

// returns all the notes
let getAll = () => {
    return loadNotes();
};

// get a specific note
let getNote = (title) => {
    let note = loadNotes().find((note) => note.title === title);
    return note;
};

// remove a note from the file.
let removeNote = (title) => {
    let notesArray = loadNotes();
    let removedNotes = _.remove(notesArray, (note) => note.title === title);
    writeNotes(notesArray);
    return removedNotes[0];
};

// print a note to the cli
let logNote = (note) => {
    console.log('-----------------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log('-----------------------');
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
};
