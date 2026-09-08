function firstWord(s) {
    let str = s.trimStart();
    let index = str.indexOf(" ");

    if (index === -1) {
        return str;
    }

    return str.substring(0, index);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));


				
