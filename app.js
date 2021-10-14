var anumb = document.querySelector("#anum");     //to link buttons and import values from html
var bnum = document.querySelector("#bnum");
var addn = document.querySelector("#addn");
var subn = document.querySelector("#subn");
var mult = document.querySelector("#mult");
var divi = document.querySelector("#divi");
var res = document.querySelector("#res");

//funtions to perform required arithmetic

function addition()
{
   
    var ress = parseInt(anum.value) + parseInt(bnum.value);   //here we used value since user is giving the input. we cant use innerText/HTML 
    document.getElementById("res").value = ress;               //since we have not given the numbers previously in the HTML file.
}

function subtraction()
{
   
    var ress = parseInt(anum.value) - parseInt(bnum.value);
    document.getElementById("res").value = ress;
}

function multiply()
{
   
    var ress = parseInt(anum.value) * parseInt(bnum.value);
    document.getElementById("res").value = ress;
}

function division()
{
   
    var ress = parseInt(anum.value) / parseInt(bnum.value);
    document.getElementById("res").value = ress;
}

addn.addEventListener('click', addition);                   //event listeners to know which button is clicked. Every event listener has 
subn.addEventListener('click', subtraction);                // a respective funtion to call to perform the required arithmetic 
mult.addEventListener('click', multiply);
divi.addEventListener('click', division); 