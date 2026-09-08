function firstWord(str) {
    let i = 0;

    // Skip starting spaces
    while (i < str.length && str[i] === " ") {
        i++;
    }

    let start = i;

    // Find the first space after the word
    while (i < str.length && str[i] !== " ") {
        i++;
    }

    return str.substring(start, i);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s))


				
