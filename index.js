function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');
    const num = Number(value);
    if (value.trim() === '' || isNaN(num)) {
        result.innerHTML = 'Invalid, please enter a number';
        return;
    }

    result.innerHTML = String(num * num);
}

document.getElementById('calculate').addEventListener('click', calculateSquare);
}
