// lev 2_3

function changeColors() {
    let navLinks = document.getElementsByTagName("a");
    let navWrap = document.getElementsByTagName("ul");
        
    navWrap[0].style.background = "#396362"
     //change nav bcg 
    
    navLinks[0].style.background = "#f6c89f"
    navLinks[0].style.background = "#f6c89f"
    navLinks[1].style.background = "#ffe7d1"
    navLinks[2].style.background = "#4b8e8d"
    navLinks[3].style.background = "#666"

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = "#333"
    } //change text color of all links
}