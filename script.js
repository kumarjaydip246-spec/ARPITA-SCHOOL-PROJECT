
// SIX BACKGROUND IMAGES

const schoolImages = [
    "./images%20(1).jpg",
    "./auditorium.jpg",
    "./hero-smartboard.webp",
    "./8e69a4018959c82a0f5d66f928a053c4b7d2c448-4096x3072.jpg",
    "./images%20(2).jpg",
    "./images%20(3).jpg",
    "./images%20(4).jpg",
    "./images%20(5).jpg",
    "./images%20(6).jpg",
    "./images.jpg"
];

let currentImage = 0;

const layer1 = document.createElement("div");
const layer2 = document.createElement("div");

layer1.className = "background active";
layer2.className = "background";

document.body.prepend(layer1, layer2);

// PRELOAD IMAGES AND CHECK ERRORS

schoolImages.forEach((src) => {
    const img = new Image();

    img.onload = () => console.log("LOADED:", src);
    img.onerror = () => console.error("IMAGE NOT FOUND:", src);

    img.src = src;
});

// FIRST IMAGE
layer1.style.backgroundImage =
    `url("${schoolImages[0]}")`;

let firstActive = true;

// CHANGE EVERY 2 SECONDS

function changeSchoolImage() {

    currentImage =
        (currentImage + 1) % schoolImages.length;

    const next = firstActive ? layer2 : layer1;
    const previous = firstActive ? layer1 : layer2;

    const img = new Image();

    img.onload = () => {
        next.style.backgroundImage =
            `url("${schoolImages[currentImage]}")`;

        next.classList.add("active");
        previous.classList.remove("active");

        firstActive = !firstActive;
    };

    img.onerror = () => {
        console.error("Could not load:", schoolImages[currentImage]);
        changeSchoolImage();
    };

    img.src = schoolImages[currentImage];
}

setInterval(changeSchoolImage, 2000);

function openSchoolApp(number) {

    const appLinks = {
        1: "https://dhsbgp.com/apps",
        2: "https://dhsbgp.com/apps"
    };

    const appUrl = appLinks[number];

    if (appUrl) {
        window.open(appUrl, "_blank");
    } else {
        alert("School App link is not available.");
    }
}
