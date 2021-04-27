input=[]

//read input from command line argument
process.argv.forEach(function (val, index, array) {
  input.push(val)
});
input.splice(0,2)

//parse them into integers
nums=[]
input.forEach(function(val){
	nums.push(parseInt(val, 10))
})



console.log(nums)