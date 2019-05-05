import React, {useEffect, useState} from 'react';
import './gr1.css';
import {drawAxes, getGR1, getCTX} from '../../modules/axes';

function GR1(params) {

    let w = 500;
    let h = 500;
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);

    useEffect(() => {
        
        let ctx = getCTX('gr1');
        drawAxes(ctx, w, h);

        let {x1, y1, x2, y2} = getGR1(Number(a), Number(b), w, h);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    });

    return (
        <div>
            <input type="number" value={a} onChange={e => setA(e.target.value)} />
            <input type="number" value={b} onChange={e => setB(e.target.value)} />
            <canvas id="gr1" width={w} height={h}></canvas>
        </div>
    );
}

export default GR1;