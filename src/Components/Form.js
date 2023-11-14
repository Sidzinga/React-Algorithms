import React from "react";
import { useState } from "react";
import { palindrome, rearrangePalindrome } from "./functions";

function Palindrome(){

const [input, setInput] = useState({ check:""
, rearange:""});

const [answer, setAnswer] = useState("");
const[answer1,setAnswer1] = useState('')




const handleChange = (e) => {
e.preventDefault()

const value = e.target.value
const name = e.target.name
setInput(values => ({...values, [name]:value}))


}


let isPalindrome = input.Palindrome + " is a " + "palindrome";
let notPalindrome = input.Palindrome + " is not a " + "palindrome"; 
let can = input.canArrange + " can be rearranged into a palindrome"
let cannot = input.canArrange + " cannot be rearranged into a palindrome"



const handleSubmit = (e) =>{
    e.preventDefault()
   ;

    let scrambledWord = rearrangePalindrome(input.canArrange)
  let word = palindrome(input.Palindrome);


if (word === true){

setAnswer(isPalindrome)
}
else{
    setAnswer(notPalindrome)
}
if(scrambledWord === true){
setAnswer1(can)
  
}
else{
  setAnswer1(cannot)
}
  console.log(answer + answer1)

}




return(<><div><form onSubmit={handleSubmit} >
    <input className="input" value={input.Palindrome} onChange={handleChange} name="Palindrome" />
    <input className="input" value={input.canArrange} onChange={handleChange} name ="canArrange"/>
<button type="submit" onClick={handleSubmit}>Submit</button>

    </form> <div className="display"><h1>{answer}</h1><br/><h1>{answer1}</h1></div></div></>
    )
}
export default Palindrome