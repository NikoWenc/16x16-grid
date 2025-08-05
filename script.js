const mainContainer = document.querySelector("#main-container");

function appendDivsTo(container){
    for (let i = 1; i <= 256; i++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "main-child");
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseenter", () => newDiv.style.backgroundColor = "cyan");
    }
}
appendDivsTo(mainContainer);
