const animal = "gorila"
const teste = animal.split("").reverse().join("");
console.log(teste);

if(teste === "gorila"){
    console.log("passed")
}else{
    console.log("falied")
}

const palidrome = str=> {
const rever = str.split("").reverse().join("")
return str === rever
}
console.log(palidrome("ana"))

if(palidrome === "ana"){
    console.log("passed")
}else{
    console.log("failed")
}




console.log("//////////////////////////////////")
console.log("//////////////////////////////////")
console.log("//////////////////////////////////")

const exampleString = 'Gorila';

function reverseString(string) {
	console.log(string.split("").reverse().join(""));
}

reverseString(exampleString);

const examplePalindrome = "reviver";

function palindrome(string) {
    const reversedString = reverseString(examplePalindrome);
    console.log(string.split("").reverse().join(""));
}

console.log("//////////////////////////////////")
console.log("//////////////////////////////////")
// ________________________ TEST ________________________
console.log('TEST:')
if (reverseString(exampleString) == 'aliroG') {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}

console.log('TEST, is it palindrome?');
if (palindrome(examplePalindrome)) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________