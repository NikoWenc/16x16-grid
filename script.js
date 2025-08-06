// do you guys really read these codes?

const mainContainer = document.querySelector("#main-container");
const button = document.querySelector("#box-count");
let boxCount = -1;

let isMouseDown = false;
document.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);

button.addEventListener("click", (event) => {
    event.target.blur();
    boxCount = prompt("Enter Box Count 1-100 only: ");

    // limit the input box counter
    while(boxCount > 100 || boxCount < 0) {
        boxCount = prompt("Enter Box Count 1-100 only: ");
    }

    let containerCount = boxCount * boxCount;
    mainContainer.classList.remove("main-container-style");
    mainContainer.replaceChildren();

    mainContainer.setAttribute("style", `width: ${boxCount * 50}px; 
                                        height: ${boxCount * 50}px; 
                                        display: flex; 
                                        flex-flow: row wrap; 
                                        align-item: center;
                                        justify-content: center; 
                                        overflow: auto;`);

    for (let i = 1; i <= containerCount; i++){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("style", `border: 1px solid white; 
                                    height: 50px; 
                                    flex-basis: calc(100% / ${boxCount});`);
    newDiv.setAttribute("class", "custom-child")

    // randomized the color of boxes when selected
    newDiv.addEventListener("mouseenter", () => {
        if (isMouseDown) newDiv.style.backgroundColor = 
        `rgb(${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random() * 255 + 1})`});

    newDiv.addEventListener("click", () => newDiv.style.backgroundColor = "");
    mainContainer.appendChild(newDiv);
    }
});

function appendDivsTo(container){
    for (let i = 1; i <= 256; i++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "main-child");

        // randomized the color of boxes when selected
        newDiv.addEventListener("mouseenter", () => {
            if (isMouseDown) newDiv.style.backgroundColor = 
            `rgb(${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random() * 255 + 1})`});

        newDiv.addEventListener("click", () => newDiv.style.backgroundColor = "");
        container.appendChild(newDiv);
    }
};
appendDivsTo(mainContainer);

