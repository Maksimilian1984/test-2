const toggle = document.querySelector(`.toggle`);
const menu = document.querySelector(`.menu`);

const toggleElement1 = document.querySelector(`.toggle_element-1`);
const toggleElement2 = document.querySelector(`.toggle_element-2`);
const toggleElement3 = document.querySelector(`.toggle_element-3`);



toggle.addEventListener('click', ()=>{
    menu.classList.toggle(`menu_visible`);
    toggleElement1.classList.toggle(`toggle_element_move-1`);
    toggleElement2.classList.toggle(`toggle_element_move-2`);
    toggleElement3.classList.toggle(`toggle_element_move-3`);

});



