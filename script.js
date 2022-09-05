function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// const h1 = document.createElement("H1");
// const textNode = document.createTextNode("Hello james World");
// h1.appendChild(textNode);
// document.body.appendChild(h1);

// Create element:
const para = document.createElement("p");
para.innerHTML = "This is a paragraph james.";

// Append to another element:
document.getElementById("myDIV").appendChild(para);