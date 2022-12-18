const calc__buttons = document.querySelector('.calc__buttons')
const result = document.querySelector('.result')
let value = '0';
let zeroCounter = 0;

calc__buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('calc__button')){
        let btn_value = e.target.innerText;

        if (!e.target.classList.contains('btn-special-operator')) {
            if (zeroCounter === 0) {
                zeroCounter = 1;
                result.innerText = '';
            }

            result.innerText += btn_value;
            value += btn_value;
        }
        else {
            switch (btn_value){
                case('='):
                    value = eval(value);
                    result.innerText = value;
                    break;
                case('AC'):
                    console.log(btn_value)
                    result.innerText = '0';
                    value = '0';
                    zeroCounter = 0;
            }
        }
        // console.log(value);
    }
    else return;
});
