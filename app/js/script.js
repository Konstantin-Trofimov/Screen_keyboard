const keys = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Enter', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#39;', '&#92;', 'Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Control', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

function drowKbord(keys) {
    for (let i = 0; i < keys.length; i++) {
        let key = document.createElement('div');
        key.classList.add('key');
        key.setAttribute('data', keys[i]);
        key.innerHTML = keys[i];
        if (i < 14) {
            document.querySelector('.nums').appendChild(key);
        }
        else if (i < 28) {
            document.querySelector('.letters-1').appendChild(key);
        }
        else if (i < 41) {
            document.querySelector('.letters-2').appendChild(key);
        }
        else if (i < 53) {
            document.querySelector('.letters-3').appendChild(key);
        }
        else if (i >= 53) {
            document.querySelector('.btm').appendChild(key);
        }
    }
}

function drowSpKeys() {
    let data;
    for (let k of kBoard) {
        data = k.getAttribute('data');
        if (data == ' ') {
            k.classList.add('spase');
        }
        else if (data == 'ArrowLeft') {
            k.innerHTML = '&#5130;'
        }
        else if (data == 'ArrowUp') {
            k.innerHTML = '&#5121'
        }
        else if (data == 'ArrowDown') {
            k.innerHTML = '&#5123;'
        }
        else if (data == 'ArrowRight') {
            k.innerHTML = '&#5125;'
        }
    }
}

function displayInp(e) {
    let data;
    for (let k of kBoard) {
        data = k.getAttribute('data');
        if (e.key == data) {
            k.classList.toggle('key-active');
        }
    }
}

function remClassAct() {
    kBoard.forEach(i => i.classList.remove('key-active'));
}

drowKbord(keys);

const kBoard = document.querySelectorAll('.key');

drowSpKeys();

document.querySelector('.inp').addEventListener('keydown', (e) => {
    remClassAct();
    displayInp(e);
})

document.querySelector('.inp').addEventListener('keyup', (e) => {
    displayInp(e);
})