const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const borderUtama = document.getElementById("borderUtama");
const modal = document.getElementById("modalDialog");

hamburger.addEventListener("click", ()=>{
    modal.style.marginLeft="32%";
    hamburger.style.display="none";
    sidebar.style.left="0px"
    borderUtama.style.marginLeft="350px";
    borderUtama.style.width="77%";
})

const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", () =>{
    modal.style.marginLeft="auto";
    sidebar.style.left="-400px";
    hamburger.style.display="flex"
    borderUtama.style.marginLeft="0px";
    borderUtama.style.width="100%";
})
