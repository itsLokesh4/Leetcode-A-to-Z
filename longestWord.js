// Program to find longest word in a given sentence ?



function longestWord(sentence) {
    var words = sentence.split(" ");
    var longest = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

var sentence = "This is a sample sentence";
console.log(longestWord(sentence));
