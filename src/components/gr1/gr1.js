import React, {useEffect} from 'react';
import './gr1.css';

function GR1(params) {

    useEffect(() => {
        let canvas = document.getElementById('gr1');
        let ctx = canvas.getContext('2d');

        // ctx.fillRect(params.x, params.y, 150, 150);
        ctx.beginPath();
        ctx.moveTo(0, 150);
        ctx.lineTo(300, 150);
        ctx.lineTo(290, 140);
        ctx.moveTo(300, 150);
        ctx.lineTo(290, 160);
        ctx.moveTo(0, 3);
        ctx.lineTo(300, 603);

        ctx.moveTo(20, 0);
        ctx.quadraticCurveTo(130, 180, 280, 0);

        ctx.stroke();
    });

    return (
        <canvas id="gr1" width="300" height="300"></canvas>
    );
}

export default GR1;