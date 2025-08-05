const mainContainer = document.querySelector("#main-container");

function appendDivsTo(container){
for (let i = 1; i <= 16; i++){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "main-child");
    container.appendChild(newDiv);
}
}
appendDivsTo(mainContainer);
