window.onload = ()=>{
    const menuContainer = document.querySelector("#nav-container");
    const btnToggleMenu = document.querySelector("#btn-toggle-menu");
    const btnCloseMenu = document.querySelector("#btn-close-menu");

    btnToggleMenu.onclick = ()=>{
        menuContainer.classList.remove("invisible");
    }
    btnCloseMenu.onclick = ()=>{
        menuContainer.classList.add("invisible");
    }
}