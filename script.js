const canvas = document.getElementById("central-container");
const ctx = canvas.getContext("2d");
const coeff = 1 / canvas.height;
let cumulativeHeight = 0;

function drawBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = "#964B00";
    ctx.moveTo(canvas.width * .25, canvas.height * .66);
    ctx.lineTo(canvas.width * .75, canvas.height * .66);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.ellipse(canvas.width * .497, canvas.height * .8, canvas.width * 0.25, canvas.height * 0.12, 0, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#E0E0E0";
    ctx.ellipse(canvas.width * .497, canvas.height * .8, canvas.width * 0.15, canvas.height * 0.06, 0, 0, 2 * Math.PI);
    ctx.fill();
}

function drawBottomBun(thickness) {
    const margin = 2 * Math.log(thickness);

    for (let c = 0; c < thickness; c++) {
        ctx.beginPath();
        ctx.fillStyle = "#eec07b";
        ctx.ellipse(canvas.width * .497, canvas.height * (.78 - thickness * coeff) - cumulativeHeight - c + thickness, canvas.width * 0.2, canvas.height * 0.08, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    ctx.beginPath();
    ctx.fillStyle = "#f0d1a0";
    ctx.ellipse(canvas.width * .497, canvas.height * (.78 - thickness * coeff) - cumulativeHeight, canvas.width * 0.2, canvas.height * 0.08, 0, 0, 2 * Math.PI);
    ctx.fill();

    cumulativeHeight += thickness + margin;
}

function drawTopBun(thickness) {
    const margin = 2 * Math.log(thickness);

    for (let c = 0; c < thickness; c++) {
        ctx.beginPath();
        ctx.fillStyle = "#eec07b";
        ctx.ellipse(canvas.width * .497, canvas.height * (.78 - thickness * coeff) - cumulativeHeight + thickness - c, canvas.width * 0.2, canvas.height * 0.08, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    for (let c = 0; c < 2 * thickness; c++) {
        ctx.beginPath();
        ctx.fillStyle = "#f0d1a0";
        ctx.ellipse(canvas.width * .497, canvas.height * (.78 - thickness * coeff) - cumulativeHeight - c, canvas.width * (0.2 - coeff * c), canvas.height * 0.08, 0, 0, 2 * Math.PI);
        ctx.fill();
    }

    cumulativeHeight += 3 * thickness + margin;
}

function drawKetchup() {
    for (let c = 0; c < 10; c++) {
        ctx.beginPath();
        let x = canvas.width * .497 + 200 - 400 * Math.random();
        let y = canvas.height * .78 - cumulativeHeight + 30 * Math.random();
        ctx.beginPath();
        ctx.fillStyle = "#b21807";
        ctx.ellipse(x, y, canvas.width * 0.05, canvas.height * 0.05, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    cumulativeHeight += 5;
}

function drawMustard() {
    for (let c = 0; c < 10; c++) {
        ctx.beginPath();
        let x = canvas.width * .497 + 200 - 400 * Math.random();
        let y = canvas.height * .78 - cumulativeHeight + 30 * Math.random();
        ctx.beginPath();
        ctx.fillStyle = "#E1AD01";
        ctx.ellipse(x, y, canvas.width * 0.05, canvas.height * 0.05, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    cumulativeHeight += 5;
}

function drawLettuce() {
    ctx.beginPath();
    ctx.fillStyle = "#013220";
    ctx.moveTo(canvas.width * .35, canvas.height * .78 - cumulativeHeight - canvas.height * 0.08);
    ctx.lineTo(canvas.width * .64, canvas.height * .78 - cumulativeHeight - canvas.height * 0.08);
    ctx.lineTo(canvas.width * .71, canvas.height * .78 - cumulativeHeight + canvas.height * 0.08);
    ctx.lineTo(canvas.width * .29, canvas.height * .78 - cumulativeHeight + canvas.height * 0.08);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#93c560";
    ctx.moveTo(canvas.width * .35, canvas.height * .78 - cumulativeHeight - canvas.height * 0.08 - 2);
    ctx.lineTo(canvas.width * .64, canvas.height * .78 - cumulativeHeight - canvas.height * 0.08 - 2);
    ctx.lineTo(canvas.width * .71, canvas.height * .78 - cumulativeHeight + canvas.height * 0.08 - 2);
    ctx.lineTo(canvas.width * .29, canvas.height * .78 - cumulativeHeight + canvas.height * 0.08 - 2);
    ctx.fill();

    cumulativeHeight += 5;
}

function drawCheese() {
    ctx.beginPath();
    ctx.fillStyle = "#8B8000";
    ctx.moveTo(canvas.width * .35, canvas.height * .78 - cumulativeHeight - canvas.height * 0.08);
    ctx.lineTo(canvas.width * .64, canvas.height * .78 - cumulativeHeight - canvas.height * 0.08);
    ctx.lineTo(canvas.width * .71, canvas.height * .78 - cumulativeHeight + canvas.height * 0.08);
    ctx.lineTo(canvas.width * .29, canvas.height * .78 - cumulativeHeight + canvas.height * 0.08);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#FFDB58";
    ctx.moveTo(canvas.width * .35, canvas.height * .78 - cumulativeHeight - canvas.height * 0.08 - 2);
    ctx.lineTo(canvas.width * .64, canvas.height * .78 - cumulativeHeight - canvas.height * 0.08 - 2);
    ctx.lineTo(canvas.width * .71, canvas.height * .78 - cumulativeHeight + canvas.height * 0.08 - 2);
    ctx.lineTo(canvas.width * .29, canvas.height * .78 - cumulativeHeight + canvas.height * 0.08 - 2);
    ctx.fill();

    cumulativeHeight += 5;
}

function drawPatty(thickness) {
    const margin = 2 * Math.log(thickness);

    for (let c = 0; c < thickness; c++) {
        ctx.beginPath();
        ctx.fillStyle = "#450101";
        ctx.ellipse(canvas.width * .497, canvas.height * (.78 - thickness * coeff) - cumulativeHeight - c + thickness, canvas.width * 0.2, canvas.height * 0.08, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    ctx.beginPath();
    ctx.fillStyle = "#bb5533";
    ctx.ellipse(canvas.width * .497, canvas.height * (.78 - thickness * coeff) - cumulativeHeight, canvas.width * 0.2, canvas.height * 0.08, 0, 0, 2 * Math.PI);
    ctx.fill();

    cumulativeHeight += thickness + margin;
}

function drawOnions() {
    for (let c = 0; c < 10; c++) {
        let x = canvas.width * .497 + 200 - 400 * Math.random();
        let y = canvas.height * .78 - cumulativeHeight + 30 * Math.random();
        ctx.beginPath();
        ctx.strokeStyle = "#101010";
        ctx.ellipse(x, y, canvas.width * 0.03, canvas.height * 0.01, 0, 0, 2 * Math.PI);
        ctx.stroke();
        for (let c = 1; c <= 10; c++) {
            ctx.beginPath();
            ctx.strokeStyle = "#FFFFFF";
            ctx.ellipse(x, y - c, canvas.width * 0.03, canvas.height * 0.01, 0, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }

    cumulativeHeight += 10;
}

const thickness = 18;
let sandwich = [];
function draw() {
    cumulativeHeight = 0;
    if (canvas.getContext) {
        drawBackground();
        for (let i = 0; i < sandwich.length; i++) {
            switch (sandwich[i]) {
                case 1: drawBottomBun(thickness); break;
                case 2: drawTopBun(thickness); break;
                case 3: drawKetchup(); break;
                case 4: drawMustard(); break;
                case 5: drawLettuce(); break;
                case 6: drawCheese(); break;
                case 7: drawPatty(thickness); break;
                case 8: drawOnions(); break;
            }
        }
    }
}
draw();

let ingredients = document.querySelectorAll(".item");
for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].parentElement.parentElement.querySelector(".substract").addEventListener("click", function () {
        const index = sandwich.lastIndexOf(i + 1);
        if (index > -1) {
            sandwich.splice(index, 1);
        }
        draw();
    });
    ingredients[i].parentElement.parentElement.querySelector(".add").addEventListener("click", function () {
        sandwich.push(i + 1);
        draw();
    });
}

let left = document.querySelector("#left-sidemenu");
let right = document.querySelector("#right-sidemenu");
let view = document.querySelector(".view");
let footer = document.querySelector("footer");

view.classList.add("disappear");

canvas.onclick = function () {
    footer.classList.toggle("show");
    if (left.classList.contains("disappear")) {
        left.classList.add("appear");
        right.classList.add("appear");
        view.classList.add("disappear");
        left.classList.remove("disappear");
        right.classList.remove("disappear");
        view.classList.remove("appear");
    } else {
        left.classList.add("disappear");
        right.classList.add("disappear");
        view.classList.add("appear");
        left.classList.remove("appear");
        right.classList.remove("appear");
        view.classList.remove("disappear");
    }
}



function doesntMatch(part, ele) {
    let text1 = part.toLowerCase().trim();
    let text2 = ele.textContent.toLowerCase().trim();
    for (let i = 0; i < Math.min(text1.length, text2.length); i++) {
        if (text1[i] !== text2[i])
            return true;
    }
    return text1.length > text2.length;
}














let search = document.querySelector(".search");
let acc = document.querySelector(".accept");
let rej = document.querySelector(".reject");
let rev = document.querySelector(".revert");
let reset = document.querySelector("footer button");
let elements = null; // document.querySelectorAll(".content table tr");
let father = null;
let selected = null;
let bod = null;
let bin = [];

function updateSelection(ele) {
    ele.onclick = function () {
        if (selected == null) {
            selected = this;
            this.classList.add("selected");
        } else {
            if (selected == this) {
                selected = null;
                this.classList.remove("selected");
            } else {
                selected.classList.remove("selected");
                selected = this;
                this.classList.add("selected");
            }
        }
    };
}

fetch("http://localhost:3000/data", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000/data',
        'Access-Control-Allow-Credentials': 'true'
    }
}).then(response => {
    return response.text();
}).then(result => {
    bod = JSON.parse(result);
    father = document.querySelector(".content table");

    while (father.firstChild) {
        father.removeChild(father.firstChild);
    }
    for (let i = 0; i < bod.length; i++) {
        let ele = bod[i];
        let newRow = document.createElement("tr");
        let newColumn = document.createElement("td");
        newColumn.appendChild(document.createTextNode(ele.name));
        newRow.appendChild(newColumn);
        updateSelection(newRow);
        father.appendChild(newRow);
    }
    elements = document.querySelectorAll(".content table tr");
}).catch(err => {
    console.log(err);
});

/*
search.onfocus = function() {
    if (selected != null)
        selected.classList.remove("selected");
    selected = null;
};
*/

search.oninput = function () {
    for (let i = 0; i < elements.length; i++) {
        let ele = elements[i];
        if (!bin.includes(ele))
            ele.style.display = "table-row";
        if (doesntMatch(search.value, ele.querySelector("td")))
            ele.style.display = "none";
    }
}

rej.onclick = function () {
    if (selected !== null) {
        selected.style.display = "none";
        selected.classList.remove("selected");
        bin.push(selected);
        selected = null;
    }
};
rev.onclick = function () {
    if (bin.length > 0)
        bin.pop().style.display = "table-row";
};
reset.addEventListener("click", function () {
    sandwich = [];
    draw();
});


acc.onclick = function () {
    if (selected) {
        if (search.value === "") {
            // show sandwich from saved
            for (let i = 0; i < bod.length; i++) {
                let ele = bod[i];
                if (ele.name === selected.textContent) {
                    sandwich = ele.composition;
                    draw();
                }
            }
        } else {
            // create new entry

            let newRow = document.createElement("tr");
            let newColumn = document.createElement("td");
            newColumn.appendChild(document.createTextNode(search.value));
            newRow.appendChild(newColumn);
            updateSelection(newRow);
            father.appendChild(newRow);
            // elements = document.querySelectorAll(".content table tr");

            const sandwichData = {
                id: bod.length + 1,
                name: search.value,
                composition: sandwich
            };

            fetch("http://localhost:3000/data", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000/data',
                    'Access-Control-Allow-Credentials': 'true'
                },
                body: JSON.stringify(sandwichData)
            }).then(response => {
                return response.text();
            }).then(result => {
                console.log(result);
            }).catch(err => {
                console.log(err);
            });

            alert("New input added successfully.");
        }
    } else {
        if (search.value === "") {
            // save preferences

            let newData = [];
            for (let i = 0; i < elements.length; i++) {
                let ele = elements[i];
                if (ele.style.display !== "none") {
                    for (let j = 0; j < bod.length; j++) {
                        if (bod[j].name === ele.textContent) {
                            newData.push(bod[j]);
                            break;
                        }
                    }
                }
            }
            fetch("http://localhost:3000/data", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000/data',
                    'Access-Control-Allow-Credentials': 'true'
                },
                body: JSON.stringify(newData)
            }).then(response => {
                return response.text();
            }).then(result => {
                console.log(result);
            }).catch(err => {
                console.log(err);
            });
            alert("Preferences saved successfully");
        } else {
            // create new entry
            
            let newRow = document.createElement("tr");
            let newColumn = document.createElement("td");
            newColumn.appendChild(document.createTextNode(search.value));
            newRow.appendChild(newColumn);
            updateSelection(newRow);
            father.appendChild(newRow);
            // elements = document.querySelectorAll(".content table tr");

            const sandwichData = {
                id: bod.length+1,
                name: search.value,
                composition: sandwich
            };

            fetch("http://localhost:3000/data", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000/data',
                    'Access-Control-Allow-Credentials': 'true'
                },
                body: JSON.stringify(sandwichData)
            }).then(response => {
                return response.text();
            }).then(result => {
                console.log(result);
            }).catch(err => {
                console.log(err);
            });

            alert("New input added successfully.");
        }
    }
    if (selected)
    selected.classList.remove("selected");
    selected = null;
}