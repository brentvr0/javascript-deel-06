const setup = () => {

    let tag = document.createElement("p");
    let text = document.createTextNode("dit is een nieuwe tekst");
    tag.appendChild(text);
    let element = document.getElementById("myDIV");
    element.appendChild(tag);
}
window.addEventListener("load", setup);