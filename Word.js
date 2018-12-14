var Letter = require("./Letter.js");

var Word = function(input){
    this.answer = input;
    this.blanks = function (word){
        this.array = [];
        word.split();
        for (let i = 0; i<word.length; i ++){
            var letter = new Letter(word[i])
            this.array.push(letter);
        }
        return this.array
    };
    this.blanks(this.answer);
    this.show = function(){
        this.disp = [];
        this.array.forEach(letter => {
            this.disp.push(letter.display)
        });
        return this.disp.join(" ");       
    }
    this.check = function(userGuess){
        this.array.forEach(letter=>{
            letter.check(userGuess);
        })
    }
};

module.exports = Word;