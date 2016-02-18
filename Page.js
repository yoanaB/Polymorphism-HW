function Page(title, text, number){

    var _title = title;

    var _text = text;

    var _number = number;

    this.getTitle = function(){
        return _title;
    }

    this.setTitle = function(title){
        _title = title;
    }

    this.getText = function(){
        return _text;
    }

    this.setText = function(text){
        _text = text;
    }

    this.getNumber = function(){
        return _number;
    }

    this.setNumber = function(number){
        _number = number;
    }
}

Page.prototype.addText = function(text){
    var currentText = this.getText();
    this.setText(currentText + text);
}

Page.prototype.deleteText = function(){
    this.setText('');
}

Page.prototype.viewText = function(){
    return this.getTitle() + ': ' + this.getText();
}

Page.prototype.searchWord = function(word){
    var n = this.getText().search(word);
    return n > -1;
}

Page.prototype.containsDigits = function(){
    var matches = this.getText().search(/\d+/g);
    if (matches != -1) {
        return true;
    }
    return false;
}

Page.prototype.update = function(number){
    if(this.getNumber() > number){
        var currentNumber = this.getNumber();
        this.setNumber(--currentNumber);
    }
}