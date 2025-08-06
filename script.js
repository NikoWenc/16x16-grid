const mainContainer = document.querySelector("#main-container");
const button = document.querySelector("#box-count");
let boxCount;

let isMouseDown = false;

document.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);

button.addEventListener("click", (event) => {
    event.target.blur();
    boxCount = prompt("Enter Box Count: ");
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
    newDiv.setAttribute("style", `border: 1px solid black; 
                                    height: 50px; 
                                    flex-basis: calc(100% / ${boxCount});`);
    newDiv.setAttribute("class", "custom-child")
    newDiv.addEventListener("mouseenter", () => {if (isMouseDown) newDiv.style.backgroundColor = "cyan"})
    mainContainer.appendChild(newDiv);
    // newDiv.setAttribute("class", "main-child:hover");
    }
});

function appendDivsTo(container){
    for (let i = 1; i <= 256; i++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "main-child");
        newDiv.addEventListener("mouseenter", () => {if (isMouseDown) newDiv.style.backgroundColor = "cyan"});
        container.appendChild(newDiv);
        // newDiv.setAttribute("class", "main-child:hover");
    }
};
appendDivsTo(mainContainer);

