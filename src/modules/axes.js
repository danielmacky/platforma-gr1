export function drawAxes(ctx, w, h) {
    ctx.clearRect(-w / 2, -h / 2, w, h);
    ctx.beginPath();
    ctx.moveTo(-w/2, 0);
    ctx.lineTo(w/2, 0);
    ctx.lineTo(w/2-10, -10);
    ctx.moveTo(w/2, 0);
    ctx.lineTo(w/2-10, 10);

    ctx.moveTo(0, -h/2);
    ctx.lineTo(0, h/2);
    ctx.lineTo(-10, h/2-10);
    ctx.moveTo(0, h/2);
    ctx.lineTo(10, h/2-10);
    ctx.stroke();
}

export function getGR1(a, b, w, h) {
    let x1 = -w/2;
    let x2 = w/2;
    let y1 = a * x1 + b;
    let y2 = a * x2 + b;

    return {x1, y1, x2, y2};
}

let translated = {};

export function getCTX(id) {
    let canvas = document.getElementById(id);
    let ctx = canvas.getContext('2d');
    if (!translated[id]) {
        ctx.transform(1, 0, 0, -1, 0, canvas.height);
        ctx.translate(canvas.width / 2, canvas.height / 2);
        translated[id] = true;
    }

    return ctx;
}

export function clearTranslated() {
    translated = {};
}
