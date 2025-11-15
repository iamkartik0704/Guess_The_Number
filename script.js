// lets generate a random number
let rand_num = Math.floor(Math.random()*100 + 1)
console.log(Math.floor(Math.random()*100 + 1))

console.log("Random number is:", rand_num);
console.log("following are the inputs");


// selecting the form
const form = document.querySelector('#myForm')
const inputs = document.querySelector('#inputs')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const num_input = parseInt(form.elements['number'].value)
    console.log(num_input);
    

    if(num_input <=0 || num_input >100 || isNaN(num_input)     )
    {
        alert('invalid entry')
    }
    if(num_input===rand_num){
        form.innerHTML ="<h2>guessed the number</h2>"
    }
    else if(num_input>=rand_num){
        alert("try lower number please")
    }
    else{
        alert("try higher number please")
    }

})
