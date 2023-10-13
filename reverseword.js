function reverseWords(sentence) {
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        let reversedWord = '';
        
        for (let j = words[i].length - 1; j >= 0; j--) {
            reversedWord += words[i][j];
        }

        words[i] = reversedWord;
    }

    return words.join(' ');
}

const inputSentence = 'This is a sunny day';
const reversedSentence = reverseWords(inputSentence);

console.log(reversedSentence);