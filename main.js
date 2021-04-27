//read input from command line argument
input=[]
process.argv.forEach(function (val, index, array) {
  input.push(val)
});

//remove the first args, that is "node" and "main.js"
input.splice(0,2) 

//converte each element into string representation
output_list=[]
input.forEach(function(s){
	var res=""
	for (var i=0; i<s.length; i++){
		if (s.charAt(i)==="0")
			res=res.concat("Zero")
		else if (s.charAt(i)==="1")
			res=res.concat("One")
		else if (s.charAt(i)==="2")
			res=res.concat("Two")
		else if (s.charAt(i)==="3")
			res=res.concat("Three")
		else if (s.charAt(i)==="4")
			res=res.concat("Four")
		else if (s.charAt(i)==="5")
			res=res.concat("Five")
		else if (s.charAt(i)==="6")
			res=res.concat("Six")
		else if (s.charAt(i)==="7")
			res=res.concat("Seven")
		else if (s.charAt(i)==="8")
			res=res.concat("Eight")
		else if (s.charAt(i)==="9")
			res=res.concat("Nine")
	}
	output_list.push(res)
})

//Finally, concatenate all the strings and print it.
console.log(output_list.join())