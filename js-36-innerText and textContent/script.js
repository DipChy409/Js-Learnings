// let x=document.getElementById("example")
// console.log(x.innerText);

const paragraph = document.querySelector("h1")

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = "<h4>HI</h4>"

let x = document.querySelector("ul")



//difference between innerText and textContent is....
// innerText=> Only visible text will be selected
// textContent=> Text and Preserve space will be selected also


//In Nodelist we can perform forEach method like an array but it cannot be done on the HtmlCollection



//Next class......//getAttribute and setAttribute> class: 57

//getAttribute and setAttribute............
// document.querySelector("h1").attributes.webdev.value //alternative is using getAttribute


//getAttribute is used to get the value of an attribute of an element. It takes the name of the attribute as a parameter and returns its value. If the attribute does not exist, it returns null.
// document.querySelector("h1").getAttribute("")
// //setAttribute is used to set the value of an attribute of an element. It takes the name of the attribute and the new value as parameters and sets the attribute to the new value. If the attribute does not exist, it creates a new attribute with the specified name and value.
// document.querySelector("h1").setAttribute("class", "new-class")






//next class.......//style using js>class: 58

// document.querySelector("h1").style.backgroundColor= "black //change color and add style as attribute and background color as selector and black as value
// document.querySelector("h1").style.color= "pink" //change color and add style as attribute and color as selector and pink as value


// document.querySelectorAll("a").forEach((a)=>a.style.color= "teal")   //change color at a time

const allLinks = document.querySelectorAll("a")

for(const link of allLinks){
    // link.style.color = "red";
    // link.style.textDecorationLine = "none"
    // link.style.fontWeight = 900
    // link.style.fontFamily = "cursive"
    // link.style.fontSize = "rem"

//    link.style.cssText =`
//    font-size: 30px;
//    font-family: italic;
//    font-weight: 900;
//    text-decoration: none`

// link.className = "green-link"
// link.className = " green-link wavy-link"

// link.setAttribute("class","green-link")

// link.classList.add("wavy-link")
// link.classList.remove("wavy-link")
// link.classList.toggle("green-link")
}

//Classlist properties provide DOMTokenList which is a collection of the class names present in the element. It has many methods to manipulate the class names of an

// some others classlist methods are
// link.classList.contains("green-link") //checks if class name value is present and returns true or false
// link.classList.replace("green-link","wavy-link") //replace class with another class if class name is present return true else return false
//link.classlist.forEach((a)=>console.log(a))) //prints all the class names present in the element
//link.classlist.item(0) //returns the class name present at index 0
//link.classlist.length //returns the number of class names present in the element
//link.classlist.value //returns the class names present in the element as a string



//my practice/exercise.....
// for(let i =0;i<=3;i++){
//     if(i<2) allLinks[i].classList.value = "green-link wavy-link"
//         else if(i==2){
//         allLinks[i].classList.value = "wavy-link"
//     } else if(i==3){
//         allLinks[i].classList.value= "my-link"
//     }
// }