/* Component 1 - Personalized Navbar */

// const linkName = document.querySelector(".link-name");
// const nameInput = document.querySelector(".name-input");

// function setName(name) {
//     linkName.innerText = "Welcome, ";
//     let nameInner = document.createElement("span");
//     nameInner.innerText = name;
//     nameInner.setAttribute("class", "name");
//     linkName.appendChild(nameInner);
//     return nameInner;
// }

// nameInput.addEventListener("change", () => {
//     setName(nameInput.value);
// })



/* Component 2 - Text Revealing Button */

// const btn = document.querySelector(".btn");
// const text = document.querySelector(".text");
// let shown = true;

// function toggleText() {
//     if(shown) {
//         btn.innerText = "Show Text 👀";
//         text.style.opacity = 0;

//     }

//     else {
//         btn.innerText = "Hide Text 🙈";
//         text.style.opacity = 1;

//     }

//     shown = !shown
// }

// btn.addEventListener("click", () => {
//     toggleText();
// })


// Component 3 - Framed Image Loader

// const urlInput = document.querySelector("input[name='url']");
// const widthInput = document.querySelector("input[name='width']");
// const colorInput = document.querySelector("input[name='color']");
// const image = document.querySelector(".image");

// let url = '';
// let width = 10;
// let color = "#000";


// function hideImageOnLoad() {
//     image.style.display = "none";
// }

// function setImage(url, width, color) {
//     image.style.display = "block";
//     image.style.borderStyle = "solid";
//     image.style.backgroundImage = "url(" + url + ")";
//     image.style.width = width + 'px';
//     image.style.borderColor = color;

// }


// urlInput.addEventListener("change", () => {
//     url = urlInput.value;
//     setImage(url, width, color);

// })

// widthInput.addEventListener("change", () => {
//     width = widthInput.value;
//     setImage(url, width, color);
    
// })

// colorInput.addEventListener("change", () => {
//     color = colorInput.value;
//     setImage(url, width, color);
    
// })

// hideImageOnLoad();


// Component 4 - Page Theme Selector

// const themeSelector = document.querySelector("#themes");
// const themeLink = document.querySelector(".theme");


// function setTheme() {
//     let theme = themeSelector.value;
//     themeLink.setAttribute("href", "theme-"+theme+".css");

// }

// themeSelector.addEventListener("change", () => {
//     setTheme();
// })

// setTheme();


// Component 5 - Gallery With Key Click

const img = document.querySelector(".img-main");

let images = [
    {"src": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400", "alt": "Forest"},
    {"src": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", "alt": "Foggy mountains"},
    {"src": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400", "alt": "Bridge in forest"},
    {"src": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", "alt": "Flower field"},
    {"src": "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400", "alt": "Green trees"}
];

function loadImage() {
    let src = img.getAttribute("src")
    let imageInfo = images[Math.floor(Math.random() * images.length)];

    while (src === imageInfo.src) {
        imageInfo = images[Math.floor(Math.random() * images.length)]
    }

    img.setAttribute("src", imageInfo.src)
    img.setAttribute("alt", imageInfo.alt)
}

img.addEventListener("click", () => {
    loadImage()
})

img.addEventListener("keydown", e => {
    if(e.key === " "){
        loadImage()
    }
})

loadImage()


