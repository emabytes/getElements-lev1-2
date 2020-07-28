// lev 2_4

function pickColor() {
    event.preventDefault()
    let colorList = document.getElementById("farbeAuswahlen");
    let color = colorList.options[colorList.selectedIndex].value;
    let pickedColor = color
        .replace(/\s+/g, '')//removes whitespace from string, or use split and join
        .toLowerCase();

    document.getElementById("test").style.backgroundColor = pickedColor;
}