const setup = () => {
    let uls=document.getElementsByTagName("ul");
    uls[0].addEventListener("click", klik, false);

    let lis=document.getElementsByTagName("li");
    for (let i=0;i<lis.length;i++) {
        lis[i].addEventListener("click", klik, false);
    }

    let as=document.getElementsByTagName("a");
    for (let i=0;i<as.length;i++) {
        as[i].addEventListener("click", klik, false);
    }

};


const klik = (event) => {
    console.log("target is "+event.target.nodeName+", currentTarget is "+event.currentTarget.nodeName);
};

window.addEventListener("load", setup);