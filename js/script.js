const contagem = document.getElementById('contagem');
const menos = document.getElementById('menos');
const mais = document.getElementById('mais');
const reset = document.getElementById('reset');

const updateContagem = () => {
    contagem.innerHTML = contador
}

let contador = 0;
let intervalId = 0;
let timeoutId = 0;

mais.addEventListener('mousedown', () => {
    contador++;
    updateContagem();

    timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
            contador++;
            updateContagem();
        }, 100);
    }, 300);
});

menos.addEventListener('mousedown', () => {
    contador--;
    updateContagem();

    timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
            contador--;
            updateContagem();
        }, 100);
    }, 300);
});


document.addEventListener('mouseup', () => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
});


reset.addEventListener('click', () => {
    contador = 0;
    updateContagem();
});

