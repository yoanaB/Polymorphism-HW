function ElectronicSecuredNotepad( password, isStarted){
    AbstractElectronicDevice.call(this, isStarted);
    SecuredNotepad.call(this, password);
}

extend(ElectronicSecuredNotepad.prototype, AbstractElectronicDevice.prototype);
extend(ElectronicSecuredNotepad.prototype, SecuredNotepad.prototype);
extend(ElectronicSecuredNotepad.prototype, AbstractNotepad.prototype);
