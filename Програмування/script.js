let array = [5,6,7,3,2,9,0,1,4,8];
let armax = array[0];
let armin = array[0];
let plus = armax+armin;

for (let i = 0; i < array.length; i++){
	if(armax <= array[i]){
		armax = array[i];
	}
}

for (let i = 0; i< array.length; i++){
	if(armin>array[i]){
		armin=array[i];
	}
}
for (let i = 0; i< array.length; i++){
	array[i] +=plus;
}
console.log(array);