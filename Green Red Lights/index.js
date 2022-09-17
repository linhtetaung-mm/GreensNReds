const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.style.backgroundColor = 'black';
const box = [];
var currentIndex;
var matrix = [[1, 1 ,1], [1, 1 ,1], [1, 1 ,1]];

display();
function display (){
	let x = 10, y = 10;
	ctx.fillStyle = 'green';
	for(let i=0; i<9; i++){
		box[i] = new Path2D();
		box[i].rect(x, y, 150, 150);
		ctx.fill(box[i]);
		if(i%3 == 2){
			y += 160;
			x = 10;
		}
		else{
			x += 160;
		}
	}

	for(let i=0; i<20; i++){
		let random = Math.floor(Math.random()*9);
		clickSquare(random);
	}
}

function boxIndexFinder(x, y){
	for(let i=0; i<9; i++)
		if (ctx.isPointInPath(box[i], x, y)) {
	    	return i;
		}
	return 199;
}

function clickSquare(pos){
	var r = Math.floor(pos/3);
	var c = pos%3;
	matrix[r][c] = change(matrix[r][c]);
	changeColor(pos, matrix[r][c]);
	if(r<2){
		matrix[r+1][c] = change(matrix[r+1][c]);
		changeColor(pos+3, matrix[r+1][c]);
	}
	if(r>0){
		matrix[r-1][c] = change(matrix[r-1][c]);
		changeColor(pos-3, matrix[r-1][c]);
	}
	if(c<2){
		matrix[r][c+1] = change(matrix[r][c+1]);
		changeColor(pos+1, matrix[r][c+1]);
	}
	if(c>0){
		matrix[r][c-1] = change(matrix[r][c-1]);
		changeColor(pos-1, matrix[r][c-1]);
	}
	console.log(matrix[0]+"\n"+matrix[1]+"\n"+matrix[2]);
}

function change(value){
	return value ? 0:1;
}

function changeColor(index, value){
	ctx.fillStyle = value ? 'green' : 'red';
	ctx.fill(box[index]);
}

canvas.addEventListener('click', function(event) {
	const x = event.offsetX;
	const y = event.offsetY;
	currentIndex = parseInt(boxIndexFinder(x,y));
	if(currentIndex != 199)
		clickSquare(currentIndex);
});