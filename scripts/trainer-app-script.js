class Note {
    constructor(noteName, noteAccidental, noteOctave) {
        this.noteName = noteName;
        this.noteResponse = noteName
        this.noteAccidental = noteAccidental;
        this.noteOctave = noteOctave;

        if (this.noteAccidental == "Flat") {
            this.noteResponse += "b";
        }
        else if (this.noteAccidental == "Sharp") {
            this.noteResponse += "#";
        }
    }
}

var currentNote;

window.onload = function () {
    var responseBtns = document.getElementsByClassName("response-btn");
    currentNote = createRandomNote();

    for (let i = 0; i < responseBtns.length; i++) {
        responseBtns[i].addEventListener("click", getResponseFromBtn);
    }

    console.log(currentNote);
}

function getResponseFromBtn(e) {
    var userResponse = e.srcElement.value;
    console.log(userResponse);

    if (userResponse == currentNote.noteResponse) {
        currentNote = createRandomNote();
        console.log(currentNote);
    }
    else {
        console.log(false);
    }
}

function createRandomNote() {
    var allNoteNames = ["A", "B", "C", "D", "E", "F", "G"];
    var allNoteAccidentals = ["Natural", "Sharp", "Flat"];
    var allNoteOctaves = [0, 1, 2, 3, 4, 5];

    var nameID = Math.floor(Math.random() * Math.floor(allNoteNames.length));
    var accidentalID = Math.floor(Math.random() * Math.floor(allNoteAccidentals.length));
    var octaveID = Math.floor(Math.random() * Math.floor(allNoteOctaves.length));

    return new Note(allNoteNames[nameID], allNoteAccidentals[accidentalID], allNoteOctaves[octaveID]);
}
