const search = document.querySelector(".searchBox");
const convert = document.querySelector(".convert");
const fromCurrecy = document.querySelector(".from");
const toCurrecy = document.querySelector(".to");
const input_amount = document.querySelector('#amount');
const finalValue = document.querySelector('.finalValue');
const finalAmount = document.querySelector('#finalAmount');
const getcurrencyconvert = () => {
    const apikey = 'cur_live_iYD7RCXPQppgj67P3gWuZHmaHP0OPYlRwCDJ5Qzn';
    const apiURL = `https://api.currencyapi.com/v3/latest?apikey=${apikey}&base_currency=${fromCurrecy.value}`;
    async function currencyconvertorJson() {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);

        for(let key of Object.keys(data["data"])){
            if(key === toCurrecy.value){
                finalAmount.style.display = 'block';
                finalValue.innerHTML= input_amount.value * data["data"][key]["value"];
            }
        }
    }
    currencyconvertorJson();
}

function resetData(){
    input_amount.value = null;
    fromCurrecy.value= null;
    toCurrecy.value=null;
    finalAmount.style.display = 'none';
}