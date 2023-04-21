let keys = document.querySelectorAll('.key')
let inp = document.querySelector('.calc__display')
let res = document.querySelector('#result')
let reset = document.querySelector('#reset')
let exp = ""

for (let key of keys) {
    key.addEventListener('click', function () {
        exp = exp + key.textContent;
        inp.value = exp;
    })
}

res.addEventListener('click', function () {
    let ev = eval(inp.value);
    inp.value = ev;
})

reset.addEventListener('click', function () {
    inp.value = " ";
    exp = " "
})
