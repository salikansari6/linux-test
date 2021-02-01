var btn5 = document.getElementById("btn5")

var buttons = document.getElementsByTagName("button")

btn5.addEventListener('click',(e) =>{

Array.from(buttons).forEach((button,index) =>{

  button[index].innerHTML = e.target.previousElementSibling.innerHTML

})

})