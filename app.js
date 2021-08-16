var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var output = document.querySelector("#output-box");
var btn = document.querySelector("#submit-btn");


btn.addEventListener("click", submitHandler);

function submitHandler(){
    var ip = initialPrice.value;
    var qt = stockQuantity.value;
    var cpp = currentPrice.value;
    profitAndLoss(ip, qt, cpp);

}


function profitAndLoss (initial, quantity, current){

    if(initial === "" || quantity === "" || current === "") {
        message("please enter all the fields😏");

        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";



    } else
  
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercent = Number.parseFloat((loss / initial) * 100).toFixed(2);
       
        message(`Hey you have made ${loss} loss and your loss percentage is ${lossPercent}% 😕`);
        
        document.querySelector("body").style.backgroundColor = "red";
        // document.body.style.backgroundImage = "url('https://img.etimg.com/thumb/msid-70329657,width-210,imgsize-70291,,resizemode-4,quality-100/fall-decline-5-ts.jpg') no-repeat bottom center" ;
    }
    else if(initial < current){
        var profit = (current - initial) * quantity;
        var profitPercent = Number.parseFloat((profit / initial) * 100).toFixed(2);
        message(`Hey you have made ${profit} profit and your profit percentage is ${profitPercent}% 🤩`);

        document.querySelector("body").style.backgroundColor = "rgb(3, 129, 3)";

    }else{
        message("No gain no pain, No pain no gain😎");
        document.querySelector("body").style.backgroundColor = "blue";



    }
}

function message(msg){
    output.innerText = msg;
}
