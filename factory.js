function makeNotepad(){
    var notepad;
    if(arguments.length == 1){
        notepad = new Module.SimpleNotepad();
    }
    else if(arguments.length == 2){
        notepad = Object.create(SecuredNotepad.prototype);
    }
    else if(arguments.length == 3){
        notepad = Object.create(ElectronicSecuredNotepad.constructor);
    }

    else{
        throw new Error('You must enter 1, 2 or 3 arguments!');
    }

    return notepad;
}