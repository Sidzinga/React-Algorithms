import React from "react";
import { useState } from "react";
import { palindrome, rearrangePalindrome } from "./functions";

function Palindrome(){

const [input, setInput] = useState('');
const [input2,setInput2] = useState("");
const [answer, setAnswer] = useState("");
const[answer1,setAnswer1] = useState('')




const handleChange = (e) => {
e.preventDefault()
setInput(e.target.value)
setInput2(e.target.value)
console.log(input2 + " in2")
console.log(input + " in1")
}

let isPalindrome = input + " is a " + "palindrome";
let notPalindrome = input + " is not a " + "palindrome"; 
let can = input2 + " can be rearranged into a palindrome"
let cannot = input2 + " cannot be rearranged into a palindrome"



const handleSubmit = (e) =>{
    e.preventDefault()
    let scrambledWord = rearrangePalindrome(input2)
  let word = palindrome(input);
if (word === true){

setAnswer(isPalindrome)
}
else{
    setAnswer(notPalindrome)
}
if(scrambledWord === true){

  
}
  console.log(answer + answer1)
}


//

return(<><div><form onSubmit={handleSubmit} >
    <input className="input" value={input} onChange={handleChange} name="Palindrome" />
    <input className="input" value={input2} onChange={handleChange} name ="canArrange"/>
<button type="submit" onClick={handleSubmit}>Submit</button>

    </form> <div className="display"><h1>{answer}</h1><br/></div></div></>
    )
}
export default Palindrome