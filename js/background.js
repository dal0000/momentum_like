const images=[
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
];

const background = images[Math.floor(Math.random()*images.length)];
document.body.style.backgroundImage = `url("img/${background}")`;
// const bgImg = document.createElement("img");
// bgImg.src = `img/${background}`;
// bgImg.id = "image";
// document.body.appendChild(bgImg);