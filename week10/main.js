// global variables
let selection = 0

function update() {
	// local variables
	let options = document.querySelectorAll('.option')
	console.log(options)
	options.forEach(item => item.onclick=function() {
		selection = item.id
		console.log(selection)
	})
}

update();