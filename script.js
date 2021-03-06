function decrypt(msg = '', times = 1) {
    for (let i = 0; i < times; i++)  
        msg = atob(msg);
    document
        .querySelector('.search-bar')
        .value = msg;
}

function encrypt(msg = '', times = 1) {
    for (let i = 0; i < times; i++) 
        msg = btoa(msg);
    copyStringToClipboard(btoa(msg + '*' + times));
    document
        .querySelector('.search-bar')
        .focus();
}

// Botão "Pesquisa Google"
function encryptService() {
    let msg = document
        .querySelector('.search-bar')
        .value
        .split("*");
    
    encrypt(msg[0], msg[1] || 1);
        document
            .querySelector('.search-bar')
            .value = "";
}

// Botão "Estou com sorte"
function desencryptService() {
    let msg = atob(document.querySelector('.search-bar').value).split("*");
    decrypt(msg[0], msg[1] || 1);
}

// Copia para a área de transferência (ctrl + v)
function copyStringToClipboard(str) {
    let el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {
        position: 'absolute',
        left: '-9999px'
    };
    document
        .body
        .appendChild(el);
    el.select();
    document.execCommand('copy');
    document
        .body
        .removeChild(el);
}
