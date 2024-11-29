// Assignment Decode 
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


const reverse = (alpha)=>{
    rIndex = 25 - alphabet.indexOf(alpha)
    return alphabet[rIndex]
}
function reverseWord(word){
    wordOutput=""
    for (const element of word) {
       if(alphabet.includes(element)){
         wordOutput+=reverse(element)
       } 
       else wordOutput += element
        
    }
    return wordOutput;
}

console.log(reverseWord("how are you"))

//  Solution  : what i did was simply remove the reverse function call and append the original letter to the output string

const decode = (alpha)=>{
    rIndex = 25 - alphabet.indexOf(alpha)
    return alphabet[rIndex]
}
function decodeWord(word) {
    wordOutput = "";
    for (const element of word) {
      wordOutput += element;
    }
    return wordOutput;
  }


console.log(decodeWord("how are you"))







  