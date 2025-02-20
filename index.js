var pass1 = "Hello1234";
var pass2 = "Hello1234";

var numbers = "0123456789";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function validatePassword(pass1, pass2){
    let hasNum = false;
    let hasLower = false;
    let hasUpper = false;
    if(pass1 === pass2 && pass1.length >= 8 && pass2.length >= 8){
        for(let i=0; i<pass1.length; i++){
            if(numbers.includes(pass1[i])){
                hasNum = true;
            }
            else if(lowerChar.includes(pass1[i])){
                hasLower = true;
            }
            else if(upperChar.includes(pass1[i])){
                hasUpper= true;
            }
        }
        if(hasNum == true && hasLower == true && hasUpper == true){
            return true;
        }
        else{
            return false
        }
    }
    else{
        return false;
    }

}

console.log(validatePassword("helloworld", "hello"));
console.log(validatePassword("hello", "hello"));// returns false
console.log(validatePassword("hello1234", "hello1234")); // returns false
console.log(validatePassword("Hello1234", "Hello1234")); // returns true
console.log(validatePassword("HELLO1234", "HELLO1234"));
