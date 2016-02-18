function AbstractNotepad(){
    if (this.constructor === AbstractNotepad) {
        throw new Error('You can not create instance of AbstractNotepad!');
    }

    this._pages = [];

    /*this.getPages = function(){
        return _pages;
    }*/

   /* this.setPages = function(pages){
        this._pages = pages;
    }*/
}
AbstractNotepad.prototype.add = function (obj) {
    this._pages.push(obj);
    //this.setPages(updatedPages);
}
AbstractNotepad.prototype.remove = function (obj) {
    this.notify(obj.getNumber());
    var index = this._pages.indexOf(obj);
    if (index > -1) {
        this._pages.splice(index, 1);
    }
}
AbstractNotepad.prototype.notify = function(number) {
    for (var i = number; i < this._pages.length; i++) {
        this._pages[i].update(number);
    }
}

AbstractNotepad.prototype.addTextInPage = function(number, text){
    var pages = this._pages;
    for(var i in pages){
        if(pages[i].getNumber() == number){
            pages[i].addText(text);
        }
    }
}

AbstractNotepad.prototype.updateText = function(number, text){
    var pages = this._pages;
    for(var i = 0; i < pages.length; i++){
        if(pages[i].getNumber() == number){
            pages[i].deleteText();
            pages[i].addText(text);
        }
    }
}

AbstractNotepad.prototype.print = function (){
    var pages = this._pages;
    for(var i = 0; i < pages.length; i++){
        console.log(pages[i].viewText());
    }
}

AbstractNotepad.prototype.searchWord = function(word){
    var pages = this._pages;
    var found = false;
    for(var i = 0; i < pages.length; i++){
        found = pages[i].searchWord(word);
        if(found == true){
            break;
        }
    }
    return found;
}

AbstractNotepad.prototype.printAllPagesWithDigits = function(){
    var pages = this._pages;
    for(var i = 0; i < pages.length; i++){
        if(pages[i].containsDigits()){
            console.log(pages[i].viewText());
        }
    }
}