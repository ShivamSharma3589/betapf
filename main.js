const toggleNavbar = document.querySelector("#toggle-navbar");
const navList = document.querySelector("#nav-items-container");
const main = document.querySelector('#main')
const mainSection = document.querySelectorAll('.main-section')

// main.style.top = document.getElementById("navbar-example2").clientHeight + 'px';

for (let i = 0; i < mainSection.length; i++) {
    mainSection[i].style.paddingTop =
      document.getElementById("navbar-example2").clientHeight + "px";
}

toggleNavbar.addEventListener('click', () => {
    // alert('click')
    if (navList.style.height == '0px') {
      navList.style.height = "100vh";
    } else {
      navList.style.height = "0px";
    }
})
