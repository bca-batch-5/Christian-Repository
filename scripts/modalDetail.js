const closeButtonEdit = document.getElementById("buttonCloseEdit");
const closeButtonDelete = document.getElementById("buttonCloseDelete");
const bookDelete = document.getElementById("delete");
const modalPage = document.getElementById("modal");
const modalDelete = document.getElementById("modalDelete");
const bookEdit = document.getElementById("edit");
console.log(modalDelete);

bookEdit.addEventListener("click", () =>{
    modalPage.style.display="block";
})

bookDelete.addEventListener("click", () =>{
    modalDelete.style.display="block";
})

closeButtonDelete.addEventListener("click", () => {
    modalDelete.style.display="none";
})

closeButtonEdit.addEventListener("click", () => {
    modalPage.style.display="none";
})