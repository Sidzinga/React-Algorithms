import React from "react"

export function palindrome(str){
 
    let shrt = str.toLowerCase().replaceAll(/\W|_/g,'')
 let rvrs = shrt.split('').reverse().join('')

return rvrs === shrt
}

export function rearrangePalindrome(str){



// let capCheck = [] 
let short = str.toLowerCase().replaceAll(/\W|_/g,'') 
let split = short.split('') 

let rearrange = split.sort() 
let index = []  
let count = []  

let i 
let confirmation =[] 
// let splitStr = str.split('') 
let last 





for( i =0;i<rearrange.length;i++){

if(rearrange[i]!== rearrange[i-1]){
    last = (rearrange.lastIndexOf(rearrange[i])).valueOf() + 1
  
index.push(last)

} 
 
} 
count.push(index[0])
for(i = index.length - 1;i > 0; i--){
let x = (index[i] - index[i-1]).valueOf()
count.push(x);


 }




 for(i = 0;i<count.length;i++ ){
   if(count[i] % 2 !== 0){
confirmation.push(count[i])
   } 
 }
 
 








let result
if (confirmation.length === 1 || confirmation.length === 0){
  
   result = confirmation.length === 1 || confirmation.length === 0
}
else if (confirmation.length > 1 && confirmation.length !== 0){
  
   result = (confirmation.length === 1 || confirmation.length === 0)
}

if(index[0] % 2 !== 0 && index){}

 return result

}


