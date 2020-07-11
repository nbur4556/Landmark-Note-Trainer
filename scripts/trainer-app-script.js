class Note {
    constructor(noteName, noteAccidental, noteOctave) {
        this.noteName = noteName;
        this.noteAccidental = noteAccidental;
        this.noteOctave = noteOctave;
    }
}

window.onload = function () {
    var responseBtns = document.getElementsByClassName("response-btn");

    for (let i = 0; i < responseBtns.length; i++) {
        responseBtns[i].addEventListener("click", respond);
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

function respond(e) {
    var userResponse = e.srcElement.value;

    console.log(userResponse);

    var randomNote = createRandomNote();
    console.log(randomNote);
}
