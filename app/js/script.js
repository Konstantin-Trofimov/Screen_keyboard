const keys = document.querySelectorAll('.key');

function t11(event) {
    event = event || window.event;
    let data;
    for (let item of keys) {
        data = item.getAttribute('data-key');
        if (event.keyCode == data) {
            item.classList.toggle('key-active');
        }
    }
}

document.querySelector('.inp').onkeydown = () => {
    t11(event);
}

document.querySelector('.inp').onkeyup = () => {
    t11(event);
}