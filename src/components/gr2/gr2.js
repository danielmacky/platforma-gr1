import React, {useState, useEffect} from 'react';
import {getCTX, drawAxes} from '../../modules/axes';

// let scaled = false;

function GR2(params) {

    let w = 500;
    let h = 500;
    let [an, setA] = useState(1);
    let [bn, setB] = useState(-5);
    let [cn, setC] = useState(6);

    useEffect(() => {
        
        let ctx = getCTX('gr2');
        drawAxes(ctx, w, h);
        // if (!scaled) {
        //     ctx.scale(5, 1);
        //     scaled = true;
        // }

        let a = Number(an);
        let b = Number(bn);
        let c = Number(cn);

        let delta, x1, y1, x2, y2, delta1, vx, vy, cpx, cpy
        
        if (a > 0) {
            delta = 4 * b * b - 16 * a * c + 8 * a * h;
            x1 = (-2 * b + Math.sqrt(delta)) / (4 * a);
            x2 = (-2 * b - Math.sqrt(delta)) / (4 * a);
            y1 = h/2;
            y2 = h/2;
            delta1 = b * b - 4 * a * c;
            vx = -b / (2 * a);
            vy = -delta1 / (4 * a);
            cpx = vx * 2 - (x1+x2)/2;
            cpy = vy * 2 - (y1+y2)/2;
        } else {
            delta = 4 * b * b - 16 * a * c - 8 * a * h;
            x1 = (-2 * b + Math.sqrt(delta)) / (4 * a);
            x2 = (-2 * b - Math.sqrt(delta)) / (4 * a);
            y1 = -h/2;
            y2 = -h/2;
            delta1 = b * b - 4 * a * c;
            vx = -b / (2 * a);
            vy = -delta1 / (4 * a);
            cpx = vx * 2 - (x1+x2)/2;
            cpy = vy * 2 - (y1+y2)/2;
        }
        console.log({a, b, c, delta, delta1, x1, y1, x2, y2});
        console.log({cpx, cpy}, {vx, vy});

        ctx.beginPath();
        ctx.moveTo(x1 * 5, y1);
        ctx.quadraticCurveTo(cpx, cpy, x2 * 5, y2);
        ctx.stroke();
    });

    return (
        <div>
            <input type="number" value={an} onChange={e => setA(e.target.value)} />
            <input type="number" value={bn} onChange={e => setB(e.target.value)} />
            <input type="number" value={cn} onChange={e => setC(e.target.value)} />
            <canvas id="gr2" width={w} height={h}></canvas>
        </div>
    
    );
}

export default GR2;