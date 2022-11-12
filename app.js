let h1Tag = document.querySelector(`h1`);
h1Tag.innerHTML += " INTERESTING FACTS!";

let body = document.body;
body.style.backgroundColor = `lightblue`;

let header = document.getElementById(`header`);
header.style.color = `orange`;
header.style.border = `2px solid white`;


let img = document.getElementById(`img`);
img.outerHTML = `<p>Click the link above to learn more!!</p>`

let imgTag = document.getElementById(`link`);
imgTag.insertAdjacentHTML(`beforebegin`, `<img src="https://www.simplyrecipes.com/thmb/Vw6TDXD2gW87OU1PNWPfNsKaD84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Veggie-Tacos-LEAD-2-2fa9781c94da4b9797af48af47313854.jpg" height= "200px"alt="tacos">`);


let alllistTags = document.querySelectorAll(`li`);
for(let i=0; i<alllistTags.length; i++){
    alllistTags[i].style.border = `white dotted 1px`;
}

let foodpara = document.getElementsByClassName(`foodpara`);
for(let i=0; i<foodpara.length; i++){
    foodpara[i].innerHTML += ` Ideal for the ones who love spicy food.`;
    foodpara[i].style.color = `orange`;
}

let divbox = document.getElementById(`box`);
divbox.style.border = `white dashed 2px`;