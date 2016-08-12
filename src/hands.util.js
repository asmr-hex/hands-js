
/* convert base 10 integer to base 26 alphabet 
*/
export function alphabetize(n){
	let A = "A".charCodeAt(0);
	let Z = "Z".charCodeAt(0);
	let alphaBase = Z-A+1;
	let result = "";
	while (n > 0){
		result = String.fromCharCode(A + (--n % alphaBase)) + result;
		n = Math.floor(n/alphaBase);
	}
	return result;
}
