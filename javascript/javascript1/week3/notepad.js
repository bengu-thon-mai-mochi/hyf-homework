const notes = [];

function addNote(content, id) {
  notes.push({ content: content, id: id });
}

addNote("my note", 1);

function getNoteFromId(id) {
  if (isNaN(id) || id === "") {
    return "Please enter a number";
  } else {
    searchedNote = notes.filter(entry => entry.id === id);
    return searchedNote;
  }
}

//console.log(getNoteFromId('%'));
console.log(getNoteFromId(2));
console.log(getNoteFromId(1));

function getAllNotes() {
  const allNotes = notes.map(entry => entry.content);
  return allNotes;
}

console.log(getAllNotes());

function logOutNotesFormatted() {
  const noteContent = getAllNotes();
  const noteId = notes.map(entry => entry.id);
  return `The note with id ${noteId} has the following note: ${noteContent}`;
}

console.log(logOutNotesFormatted());
