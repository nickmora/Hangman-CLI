

var Letter = function(index)  {
    this.guessed = false;
    if(index!==" "){
        this.display = "_";
    }
    else{
        this.display = " ";
    }
    this.char = index;
    this.change = function(){
        if(this.guessed){
            this.display=this.char;
        }
    };
    this.check = function(obj){
        if(obj === this.char){
            this.guessed = true;
        }
        this.change();
    }
}

module.exports = Letter