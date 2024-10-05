const createButton = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelector(".input-box");

createButton.addEventListener("click", () => {
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true");
    img.src = "assest/images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStogare();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStogare();
            }
        });
    }
});

function updateStogare() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();



