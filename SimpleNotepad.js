/*function SimpleNotepad(pages) {
    AbstractNotepad.call(this, pages);
}

SimpleNotepad.prototype = Object.create(AbstractNotepad.prototype);
SimpleNotepad.prototype.constructor = SimpleNotepad;*/

var Module = (function (){
    function SimpleNotepad(pages){
        AbstractNotepad.call(this, pages);
    }

    SimpleNotepad.prototype = Object.create(AbstractNotepad.prototype);
    SimpleNotepad.prototype.constructor = SimpleNotepad;

    return {
        SimpleNotepad: SimpleNotepad
    };

} ())