const buttonClose = document.getElementById("buttonClose");
const modalPage = document.getElementById("modal");
const addBooks = document.getElementById("addBook");
const editBook = document.getElementById("edit");

editBook.addEventListener("click", () =>{
    modalPage.style.display="block";
})

buttonClose.addEventListener("click", () => {
    modalPage.style.display="none";
})

addBooks.addEventListener("click", () => {
    modalPage.style.display="block";
})