
// var btn_modal = document.querySelector("btn_open_modal");
var btn_modal = document.getElementById('btn_open_modal')

btn_modal.addEventListener('click', () => {
    dialog.showModal();
})


cancel.addEventListener('click', () => {
    dialog.close();
})
