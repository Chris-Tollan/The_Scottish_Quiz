// get modal element
var modal = document.getElementById('instructions_modal');
//get open modal button
var modalButton = document.getElementById('modal_button');
//get close button
var closeButton = document.getElementsByClassName('close_button')[0];

// Event listeners
modalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// function to open modal
function openModal() {
    modal.style.display = 'block';
}
// function to close modal including with outside click
function closeModal() {
    modal.style.display = 'none';
}
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

