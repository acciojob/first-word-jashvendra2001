function firstWord(s) {
  // your code here

	let str=s.trimStart()
	let index =str.indexOf(" ")
	if(index===-1)
	{
		retunr str
	}

	return str.substring(0,index)
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s)


				
