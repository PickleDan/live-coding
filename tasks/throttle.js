const btnElementThrot = document.querySelector('.btn_throt');
const divThrot = document.querySelector('.clicked_amount_throt');
let counterThrot = 0;

btnElementThrot.addEventListener('click', (e) => {
    counterThrot++
    throttleFunc()
})

const throttleFunc = throttle(() => {
    divThrot.innerText = counterThrot;
}, 3000)

function throttle(cb, delay) {
    let isThrottled = false;

    function wrapper() {

        if (isThrottled) {
            return;
        }

        cb.apply(this, arguments);
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;

            cb.apply(this, arguments);
        }, delay);
    }

    return wrapper
}