function AbstractElectronicDevice (isStarted){
    if(this.constructor === AbstractElectronicDevice){
        throw new Error('You cannot create instance from Abstract≈lectronicDevice!');
    }

    var _isStarted = isStarted;

    this.start = function(){
        _isStarted = true;
    }

    this.stop = function(){
        _isStarted = false;
    }

    this.isStarted = function () {
      return _isStarted
    };

    this.work = function(method){
        if(this.isStarted()){
            method;
        }
    }
}