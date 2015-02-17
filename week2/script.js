
question = "AAAA BBBBB ABABABAB BABABA AAABBB";
function consecutiveChars(words){
	words = words.split(' ');
	var newWord = "";
	var result = "";
	for ( var i = 0; i<words.length; i++){
		newWord = " ";
		count = 0;
		for(var j = 0; j<words[i].length; j++) {
			if(words[i][j+1] !== words[i][j]){
				newWord += words[i][j];
			} else {
				count++;
			}
		}
		result += newWord + "\t = " + count + " deletions\n"
	}
	return result;
}
console.log(consecutiveChars(question));