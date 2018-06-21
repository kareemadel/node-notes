const yargs = require('yargs');

const notes = require('./notes.js');

// yargs command options objects
const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't',
};

const bodyOptions = {
    describe: 'Body of the note',
    default: '',
    alias: 'b',
};

const argv = yargs
    .command('add', 'Adds a new note', {
        title: titleOptions,
        body: bodyOptions,
    })
    .command('list', 'List all Notes.')
    .command('read', 'Read a note', {
        title: titleOptions,
    })
    .command('remove', 'remove a note', {
        title: titleOptions,
    })
    .help()
    .argv;
const command = argv._[0];

switch (command) {
case 'add': {
    let title = argv.title;
    let body = argv.body;
    console.log('Adding new note...');
    notes.addNote(title, body);
    break;
}
case 'list': {
    console.log('Listing all the notes...');
    let notesArray = notes.getAll();
    if (notesArray.length === 0) {
        console.log('You don\'t have notes');
    } else {
        notesArray.forEach((note) => {
            notes.logNote(note);
        });
    }
    break;
}
case 'read': {
    let title = argv.title;
    console.log('Reading a note...');
    let note = notes.getNote(title);
    if (note) {
        notes.logNote(note);
    } else {
        console.log(`There is no note with the title ${title}`);
    }
    break;
}
case 'remove': {
    let title = argv.title;
    console.log('Remove a note...');
    let removedNote = notes.removeNote(title);
    if (removedNote) {
        console.log(`Removed ${removedNote.title} successfully.`);
    } else {
        console.log(`There is no note with the title ${title}`);
    }
    break;
}
default:
    console.log('Invalid Command');
    break;
}
