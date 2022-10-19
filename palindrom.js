let str = "naman";

let new_str = ""

for(let i=str.length; i>0; i--){
    new_str = new_str + str[i];

}if(new_str==str){
    console.log("it is palindrome")
}else{
    console.log("it is not palindrome")
}
