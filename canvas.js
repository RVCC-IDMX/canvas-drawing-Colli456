/**
 * @type HTMLCanvasElement
 */

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

//Resizing

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // ctx.strokeStyle = "red";
    // ctx.lineWidth = 5;
    // ctx.strokeRect(100, 100, 200, 500);
    // ctx.strokeStyle = "blue";
    // ctx.lineWidth = 2;
    // ctx.strokeRect(200, 200, 200, 500);

//Lines

    // ctx.beginPath();
    // ctx.moveTo(500, 400);
    // ctx.lineTo(550, 400);
    // ctx.lineTo(500, 450);
    // ctx.closePath();
    // ctx.stroke();

    let painting = false;

    function startPosition(){
        painting = true;
        draw(e);
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = "blue"

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

//EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);    
});

