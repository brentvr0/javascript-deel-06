const setup = () => {

    let img = new Image();
    img.src = 'images/me.png';
    var holder = document.getElementById('foto');
    holder.appendChild(img);

}
window.addEventListener("load", setup);