/*
	game : red light, green light;
	pattern: 'plus' sign opposite color changing; 9x9 grid
*/


var matrix = [[1, 1 ,1], [1, 1 ,1], [1, 1 ,1]];
var n = 15;
for(let i=0; i<n; i++){
	let random = Math.floor(Math.random()*9)+1;
	console.log(random);
	clickSquare(random-1);
}

function clickSquare(pos){
	var r = Math.floor(pos/3);
	var c = pos%3;
	matrix[r][c] = change(matrix[r][c]);
	if(r<2)
		matrix[r+1][c] = change(matrix[r+1][c]);
	if(r>0)
		matrix[r-1][c] = change(matrix[r-1][c]);
	if(c<2)
		matrix[r][c+1] = change(matrix[r][c+1]);
	if(c>0)
		matrix[r][c-1] = change(matrix[r][c-1]);
	console.log(matrix[0]+"\n"+matrix[1]+"\n"+matrix[2]);
}

function change(value){
	return value ? 0:1;
}