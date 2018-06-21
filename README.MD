
Introduction
------------

This is a simple app written in NodeJS to create and manage text notes.

Installation
------------

Before installing this app, installing node is required.
```bash
$ git clone https://github.com/kareemadel/node-notes.git
$ cd node-notes
$ npm install
```
Usage
------
You must be in the app's path.
* Adding a note.
```bash
$ node app.js add -t 'note_title' -b 'note_body'
```
* Removing a note.
```bash
$ node app.js remove -t 'note_title'
```
* Getting a note.
```bash
$ node app.js read -t 'note_title'
```
* Listing all notes.
```bash
$ node app.js list
```
