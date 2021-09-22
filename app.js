var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var output = document.querySelector("#output-box");
var btn = document.querySelector("#submit-btn");


btn.addEventListener("click", submitHandler);

function submitHandler() {

    var ip = initialPrice.value;
    var qt = stockQuantity.value;
    var cpp = currentPrice.value;
    profitAndLoss(ip, qt, cpp);

    initialPrice.value = ' ';
    stockQuantity.value = ' ';
    currentPrice.value = ' ';

}


function profitAndLoss(initial, quantity, current) {

    if (initial < 0 || quantity < 0 || current < 0) {
        message("Please enter valid values😏");
    } else

    if (initial === "" || quantity === "" || current === "") {
        message("Please enter all the fields😏");

        document.querySelector("body").style.backgroundColor = "#08ffd6";
        document.querySelector("body").style.color = "white";



    } else

    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercent = Number.parseFloat((loss / initial) * 100).toFixed(2);

        message(`Hey you have made ${loss} loss and your loss percentage is ${lossPercent}% 😕`);

        document.querySelector("#output-box").style.backgroundColor = "red";
        document.querySelector("body").style.backgroundColor = "#ba5f5f";

    }
     else if (initial < current) {
        var profit = (current - initial) * quantity;
        var profitPercent = Number.parseFloat((profit / initial) * 100).toFixed(2);
        message(`Hey you have made ${profit} profit and your profit percentage is ${profitPercent}% 🤩`);

        document.querySelector("#output-box").style.backgroundColor = "rgb(3, 129, 3)";
        document.querySelector("body").style.backgroundColor = "#8dd693";

    } else {
        message("No gain no pain, No pain no gain😎");
        document.querySelector("#output-box").style.backgroundColor = "#2186eb";
        document.querySelector("body").style.backgroundColor = "#6da5de";



    }
}

function message(msg) {
    output.innerText = msg;
    output.style.border = "3px solid white";
    // output.style.backgroundColor = "rgba(0, 0, 0, 0.699)";



}