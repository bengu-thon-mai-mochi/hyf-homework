let notes = [];

function addNote (content, id) { 
    return notes = [...notes, {"content": content, "id": id}];
};

addNote('my note', 1);
//console.log(notes);

function getNoteFromId (id) {
    if (isNaN(id)) {
        return "this is not even a number, please enter a number";
    } else if (id = " ") {
        return "but this is not even a value, please enter a number";
    }
    for (let i=0; i<notes.length; i++) {
        if (id === notes[i].id) {
          return notes[i];
    }
}
}

//console.log(getNoteFromId('%'));

function getAllNotes() {
    for (let i = 0; i <= notes.length; i++) {
        return notes[i];
      }
}
//console.log(getAllNotes());

function logOutNotesFormatted () {
    let allNoteItems = getAllNotes();
    let idPlaceholder = allNoteItems.id;
    let contentPlaceholder = allNoteItems.content;
    console.log(` The note with id ${idPlaceholder} has the following note: ${contentPlaceholder}`);
}

logOutNotesFormatted();

//unique feature : adding some to favorites and calling them by their status 

//Create starred in object
function addNoteToYourFavorites () {
    for (let i=0; i<notes.length; i++) {
        notes = ...notes,notes[i].starred = value;
    }
    return starred;
}
console.log(addNoteToYourFavorites());

/*
work in progress : unique feature 
*/