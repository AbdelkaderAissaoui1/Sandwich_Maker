let sandwich = [];

function draw() {
    const canvas = document.getElementById("central-container");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.fillStyle = "#964B00";
        ctx.moveTo(canvas.width*.25, canvas.height*.66);
        ctx.lineTo(canvas.width*.75, canvas.height*.66);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.ellipse(canvas.width*.5, canvas.height*.8, canvas.width*0.25, canvas.height*0.12, 0, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#E0E0E0";
        ctx.ellipse(canvas.width*.5, canvas.height*.8, canvas.width*0.15, canvas.height*0.06, 0, 0, 2 * Math.PI);
        ctx.fill();

        let delta = canvas.height*.03;
        for (let i = 0; i < sandwich.length; i++) {
            switch (sandwich[i]) {
                case 1:           
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
                break;
                case 2:
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
                break;
                case 3:
                    for (let c = 0; c < 50; c++) {
                        ctx.beginPath();
                        let x = canvas.width*.5+40-80*Math.random();
                        let y = canvas.height*.78-delta*i+15*Math.random();
                        ctx.beginPath();
                        ctx.fillStyle = "#b21807";
                        ctx.ellipse(x, y-1, canvas.width*0.05, canvas.height*0.01, 0, 0, 2 * Math.PI);
                        ctx.fill();       
                    }
                break;
                case 4:
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
                break;
                case 5:                
                    ctx.beginPath();
                    ctx.fillStyle = "#013220";
                    ctx.fillRect(canvas.width*.3, canvas.height*.76-delta*i+2, canvas.width*0.4, canvas.height*0.1);     
                    ctx.beginPath();
                    ctx.fillStyle = "#93c560";
                    ctx.fillRect(canvas.width*.3, canvas.height*.76-delta*i, canvas.width*0.4, canvas.height*0.1);
                break;
                case 6:                          
                    ctx.beginPath();
                    ctx.fillStyle = "#8B8000";
                    ctx.fillRect(canvas.width*.3, canvas.height*.76-delta*i+2, canvas.width*0.4, canvas.height*0.1);     
                    ctx.beginPath();
                    ctx.fillStyle = "#FFDB58";
                    ctx.fillRect(canvas.width*.3, canvas.height*.76-delta*i, canvas.width*0.4, canvas.height*0.1);
                break;
                case 7:           
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
                break;
                case 8:       
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
                break;
            }
        }
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
        sandwich.push(i+1);
        draw();
    };
}

bnew.onclick = function() {
    sandwich = [];
    draw();
};
undo.onclick = function() {
    sandwich.pop();
    draw();
};