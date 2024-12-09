const btnElement = document.querySelector('.btn_deb');
const div = document.querySelector('.clicked_amount_deb');
let counter = 0;

btnElement.addEventListener('click', () => {
    debounced()
    counter++;
})

const debounced = debounce(() => {
    div.innerText = counter;
}, 1000)

function debounce(callback, timeout) {
    let id;

    return (...args) => {
        clearTimeout(id)
        id = setTimeout(() => {
            callback(args)
        }, timeout)
    }
}