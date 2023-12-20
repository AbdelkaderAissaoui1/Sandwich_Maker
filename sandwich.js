let sandwich=[];
let totalPrice = 0;

function draw() {
    const canvas = document.getElementById("central-container");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawBread(ctx, canvas);

        drawIngredients(ctx, canvas);

        displayPrice();

    }
}

function drawBread(ctx, canvas) {
    ctx.beginPath();
    ctx.fillStyle = "#964B00";
    ctx.moveTo(canvas.width * 0.25, canvas.height * 0.66);
    ctx.lineTo(canvas.width * 0.75, canvas.height * 0.66);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.ellipse(canvas.width * 0.5, canvas.height * 0.8, canvas.width * 0.25, canvas.height * 0.12, 0, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#E0E0E0";
    ctx.ellipse(canvas.width * 0.5, canvas.height * 0.8, canvas.width * 0.15, canvas.height * 0.06, 0, 0, 2 * Math.PI);
    ctx.fill();
    

}


function drawIngredients(ctx, canvas) {
    let delta = canvas.height * 0.03;
    drawbread1(ctx, canvas, 0, delta);


    for (let i = 0; i < sandwich.length; i++) {
        switch (sandwich[i]) {
            case 1:
                drawIngredient1(ctx, canvas, i+1, delta);
                
                break;
            case 2:
                drawIngredient2(ctx, canvas, i+1, delta);
                
                break;
            case 3:
                drawIngredient3(ctx, canvas, i+1, delta);
                break;
            case 4:
                drawIngredient4(ctx, canvas, i+1, delta);
                break;
            case 5:
                drawIngredient5(ctx, canvas, i+1, delta);
                break;
            case 6:
                drawIngredient6(ctx, canvas, i+1, delta);
                break;
            case 7:
                drawIngredient7(ctx, canvas, i+1, delta);
                break;
            case 8:
                drawIngredient8(ctx, canvas, i+1, delta);
                break;
        }
    }
    drawbread2(ctx, canvas, sandwich.length-1, delta);
    

}
const ingredientPrices = {
    1: 1.5,
    2: 1.5,
    3: 1.5,
    4: 1.5,
    5: 1.5,
    6: 1.5,
    7: 1.5,
    8: 1.5,
};

function updatePrice(ingredient) {
    
    totalPrice += ingredientPrices[ingredient] || 0;
}

function subtractPrice(ingredient) {
    totalPrice -= ingredientPrices[ingredient] || 0;
}
function displayPrice() {
    const priceElement = document.getElementById("price");
    priceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
}
function drawbread1(ctx, canvas, i, delta) {
    for (let c = 1; c < 4; c++) {
        ctx.beginPath();
        ctx.fillStyle = "#eec07b";
        ctx.ellipse(canvas.width*.5, canvas.height*.78-delta*i-c+4, canvas.width*0.2, canvas.height*0.08, 0, 0, 2 * Math.PI);
        ctx.fill(); 
    }     
    ctx.beginPath();
    ctx.fillStyle = "#f0d1a0";
    ctx.ellipse(canvas.width*.5, canvas.height*.78-delta*i, canvas.width*0.2, canvas.height*0.08, 0, 0, 2 * Math.PI);
    ctx.fill(); 
}
function drawbread2(ctx, canvas, i, delta) {
    ctx.beginPath();
    ctx.fillStyle = "#eec07b";
    ctx.ellipse(canvas.width*.5, canvas.height*.78-delta*i+2, canvas.width*0.2, canvas.height*0.08, 0, 0, 2 * Math.PI);
    ctx.fill();      
    for (let c = 0; c < 3; c++) {
        ctx.beginPath();
        ctx.fillStyle = "#f0d1a0";
        ctx.ellipse(canvas.width*.5, canvas.height*.78-delta*i-2*c, canvas.width*(0.2-.02*c), canvas.height*0.08, 0, 0, 2 * Math.PI);
        ctx.fill(); 
    }
}

function drawIngredient1(ctx, canvas, i, delta) {
    ctx.beginPath();
    ctx.fillStyle = "#F4E1C5";
    ctx.ellipse(canvas.width * 0.5, canvas.height * 0.78 - delta * i, canvas.width * 0.2, canvas.height * 0.15, 0, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 2;
    ctx.ellipse(canvas.width * 0.5, canvas.height * 0.78 - delta * i, canvas.width * 0.2, canvas.height * 0.15, 0, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawIngredient2(ctx, canvas, i, delta) {
    for (let c = 0; c < 40; c++) { 
        ctx.beginPath();
        ctx.strokeStyle = "#00FF00"; 
        let x = canvas.width * 0.5 + 40 - 80 * Math.random();
        let y = canvas.height * 0.78 - delta * i + 15 * Math.random();
        ctx.ellipse(x, y, canvas.width * 0.01, canvas.height * 0.005, 0, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function drawIngredient3(ctx, canvas, i, delta) {
    for (let c = 0; c < 50; c++) {
        ctx.beginPath();
        let x = canvas.width*.5+40-80*Math.random();
        let y = canvas.height*.78-delta*i+15*Math.random();
        ctx.beginPath();
        ctx.fillStyle = "#b21807";
        ctx.ellipse(x, y-1, canvas.width*0.05, canvas.height*0.01, 0, 0, 2 * Math.PI);
        ctx.fill();       
    }
}
function drawIngredient4(ctx, canvas, i, delta) {
    for (let c = 0; c < 50; c++) {
        ctx.beginPath();
        ctx.fillStyle = "#8B8000";
        let x = canvas.width*.5+40-80*Math.random();
        let y = canvas.height*.78-delta*i+15*Math.random();
        ctx.ellipse(x, y, canvas.width*0.03, canvas.height*0.01, 0, 0, 2 * Math.PI);
        ctx.fill(); 
        ctx.beginPath();
        ctx.fillStyle = "#FFDB58";
        ctx.ellipse(x, y-1, canvas.width*0.03, canvas.height*0.01, 0, 0, 2 * Math.PI);
        ctx.fill();      
    }
}
function drawIngredient5(ctx, canvas, i, delta) {
    ctx.beginPath();
    ctx.fillStyle = "#013220";
    ctx.fillRect(canvas.width*.3, canvas.height*.76-delta*i+2, canvas.width*0.4, canvas.height*0.1);     
    ctx.beginPath();
    ctx.fillStyle = "#93c560";
    ctx.fillRect(canvas.width*.3, canvas.height*.76-delta*i, canvas.width*0.4, canvas.height*0.1);
}
function drawIngredient6(ctx, canvas, i, delta) {
    ctx.beginPath();
    ctx.fillStyle = "#8B8000";
    ctx.fillRect(canvas.width*.3, canvas.height*.76-delta*i+2, canvas.width*0.4, canvas.height*0.1);     
    ctx.beginPath();
    ctx.fillStyle = "#FFDB58";
    ctx.fillRect(canvas.width*.3, canvas.height*.76-delta*i, canvas.width*0.4, canvas.height*0.1);
}
function drawIngredient7(ctx, canvas, i, delta) {
    for (let c = 1; c < 5; c++) {
        ctx.beginPath();
        ctx.fillStyle = "#450101";
        ctx.ellipse(canvas.width*.5, canvas.height*.78-delta*i-c+5, canvas.width*0.2, canvas.height*0.08, 0, 0, 2 * Math.PI);
        ctx.fill(); 
    }     
    ctx.beginPath();
    ctx.fillStyle = "#bb5533";
    ctx.ellipse(canvas.width*.5, canvas.height*.78-delta*i, canvas.width*0.2, canvas.height*0.08, 0, 0, 2 * Math.PI);
    ctx.fill(); 
}
function drawIngredient8(ctx, canvas, i, delta) {
    for (let c = 0; c < 20; c++) {
        ctx.beginPath();
        ctx.strokeStyle = "#000000";
        let x = canvas.width*.5+40-80*Math.random();
        let y = canvas.height*.78-delta*i+15*Math.random();
        ctx.ellipse(x, y, canvas.width*0.03, canvas.height*0.01, 0, 0, 2 * Math.PI);
        ctx.stroke(); 
        ctx.beginPath();
        ctx.strokeStyle = "#FFFFFF";
        ctx.ellipse(x, y-1, canvas.width*0.03, canvas.height*0.01, 0, 0, 2 * Math.PI);
        ctx.stroke();      
    }    
}

draw();
let bnew = document.getElementById("new");
let undo = document.getElementById("undo");
let proceed = document.getElementById("proceed");

let ingredients = [];
for (let i = 0; i < 8; i++) {
    ingredients.push(document.getElementById("b"+(i+1)));
    ingredients[i].onclick = function() {
        updatePrice(i+1)
        sandwich.push(i+1);
        draw();
    };
}

bnew.onclick = function() {
    sandwich = [];
    totalPrice = 0;
    draw();
};
undo.onclick = function () {
    if (sandwich.length > 0) {
        const removedIngredient = sandwich.pop();
        subtractPrice(removedIngredient);
        draw();
    }
}
order.onclick = function () {
    window.location.href = "order.html";}
    
;
