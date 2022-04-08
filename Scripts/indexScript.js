var open = false;
const sideBarTombol = document.getElementById("sidebar-tombol");
const sideBar = document.getElementById("sideBar");
const borderMain = document.getElementById("borderMain");
const textPrivate = document.getElementById("textPrivate");
const email = document.getElementById("email");
const footer = document.getElementById("borderFoot");

if(screen.width <= 992) {
  sideBarTombol.addEventListener("click", () => {
    sideBar.style.left = "0px";
    borderMain.style.marginLeft = "80px";
    textPrivate.style.paddingLeft = "20px";
    email.style.width = "164px";
    email.style.paddingLeft = "20px";
    footer.style.marginLeft = "80px";
    footer.style.width = "280px";
    open = true;
  });

  const Logo = document.getElementById("logo");

  Logo.addEventListener("click", () => {
    sideBar.style.left = "-100px";
    borderMain.style.marginLeft = "0px";
    footer.style.marginLeft = "0px";
    textPrivate.style.paddingLeft = "45px";
    email.style.width = "219px";
    email.style.paddingLeft = "45px";
    footer.style.width = "360px";
    open = false;
  });
}
