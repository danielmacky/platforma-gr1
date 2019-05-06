import React, {useState, useEffect} from 'react';
import {getCTX, drawAxes} from '../../modules/axes';

// let scaled = false;

function TEST(params) {

    let w = 500;
    let h = 500;
    let [xcn, setX] = useState(75);
    let [ycn, setY] = useState(75);
    let [rn, setR] = useState(50);

    useEffect(() => {
        
        let ctx = getCTX('test');
        drawAxes(ctx, w, h);
        // if (!scaled) {
        //     ctx.scale(5, 1);
        //     scaled = true;
        // }

        let x = Number(xcn);
        let y = Number(ycn);
        let r = Number(rn);

        ctx.beginPath();
        ctx.arc(x , y , r , 0 , Math.PI * 2, true);
        ctx.moveTo(x+35 , y);
        ctx.arc(x , y , r-15 , 0 , Math.PI , true);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x-10 , y+10);
        ctx.arc(x-15 , y+10 , r-45 , 0 , Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x+25 , x+10);
        ctx.arc(x+20 , x+10 , r-45 , 0 , Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x , y+10);
        ctx.lineTo(x , y-10);
        ctx.arc(x , y-5 , r-45 , 0 , Math.PI , true);
        ctx.stroke();
    
    });

    return (
        <div>
            <input type="number" value={xcn} onChange={e => setX(e.target.value)} />
            <input type="number" value={ycn} onChange={e => setY(e.target.value)} />
            <input type="number" value={rn} onChange={e => setR(e.target.value)} />
            <canvas id="test" width={w} height={h}></canvas>
        </div>
    
    );
}

export default TEST;