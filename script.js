const mainContainer = document.querySelector("#main-container");
const button = document.querySelector("#box-count");
let boxCount;

function appendDivsTo(container, counter = 256){
    console.log(counter);
    for (let i = 1; i <= counter; i++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "main-child");
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseenter", () => newDiv.style.backgroundColor = "cyan");
        // newDiv.setAttribute("id", "main-child:hover");
    }
}
appendDivsTo(mainContainer);

button.addEventListener("click", (event) => {
    event.target.blur();
    boxCount = prompt("Enter Box Count: ");
    boxCount *= boxCount;
    delete(appendDivsTo(mainContainer));
    return appendDivsTo(mainContainer, boxCount);
})