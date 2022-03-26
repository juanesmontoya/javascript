const suma = () => {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let result = document.getElementById('result');
    result.value = a + b;
}

const resta = () => {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let result = document.getElementById('result');
    result.value = a - b;
}

const multiplication = () => {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let result = document.getElementById('result');
    result.value = a * b;
}

const division = () => {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let result = document.getElementById('result');
    result.value = a / b;
}

const potencia = () => {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let result = document.getElementById('result');
    result.value = a ** b;
}