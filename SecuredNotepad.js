function SecuredNotepad(password) {

    AbstractNotepad.call(this);

    var _password;

    this.getPassword = function () {
        return _password;
    }

    this.checkPassword = function (password){
        var errors = [];

        if (password.length < 5) {
            errors.push("Your password must be at least 8 characters");
        }
        if (password.search(/[a-z]/) < 0) {
            errors.push("Your password must contain at least one lowercase letter.");
        }
        if (password.search(/[0-9]/) < 0) {
            errors.push("Your password must contain at least one digit.");
        }
        if(password.search(/[A-Z]/) < 0){
            errors.push("Your password must contain at least one capital letter.")
        }
        if (errors.length > 0) {
            throw new Error(errors.join("\n"));
        }
       return true;
    }

    this.setPassword = function(password){
        if(this.checkPassword(password)){
            _password = password;
        }
    }

    this.setPassword(password);

}

SecuredNotepad.prototype = Object.create(AbstractNotepad.prototype);
SecuredNotepad.prototype.constructor = SecuredNotepad;

SecuredNotepad.prototype.addTextInPage = function(number, text, password){
    if(this.getPassword() == password) {
        AbstractNotepad.prototype.addTextInPage.call(this, number, text);
    }
    else alert(this.getPassword() + ' Wrong password! Try again!');
}

SecuredNotepad.prototype.updateText = function(number, text, password){
    if(this.getPassword().localeCompare(password) == 0){
        AbstractNotepad.prototype.updateText.call(this, number, text);
    }

    else alert(this.getPassword() + 'entered pw:' + password + 'Wrong password! Try again!');

}

SecuredNotepad.prototype.print = function (password){
    if(this.getPassword().localeCompare(password) == 0) {
        AbstractNotepad.prototype.print.call(this);
    }

    else alert('Wrong password! Try again!');
}

SecuredNotepad.prototype.searchWord = function(word, password){
    if(this.getPassword().localeCompare(password) == 0) {
        AbstractNotepad.prototype.searchWord.call(this, word);
    }

    else alert('Wrong password! Try again!');
}

SecuredNotepad.prototype.printAllPagesWithDigits = function(password){
    if(this.getPassword().localeCompare(password) == 0) {
        AbstractNotepad.prototype.printAllPagesWithDigits.call(this);
    }

    else alert('Wrong password! Try again!');
}