// lev 1_2

const elements = document.getElementsByClassName("example"); //get elements with class example
const changeColor = (event) => {

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.background="pink"; //loop through each element and make it pink
    }
}
document.addEventListener('click', (event) => changeColor(event)) //change color on click

