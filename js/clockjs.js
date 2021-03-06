/**
 * clockjs.js - The script core of sample.
 */

function clock() {
    var now = new Date();
    var ctx = document.getElementById('clock-viewport').getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 300, 300);
    ctx.translate(150, 75);
    ctx.scale(0.45, -0.45);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.lineWidth = 8;
    ctx.lineCAp = 'round';

    // Hour marks
    ctx.save();

    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }

    ctx.restore();

    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;

    for (i = 0; i < 60; i++) {
        if (i % 5 != 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }

        ctx.rotate(Math.PI / 30);
    }

    ctx.restore();

    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    ctx.fillStyle = 'black';

    // Write Hours
    ctx.save();
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // Write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();

    // Write Seconds
    ctx.save();
    ctx.rotate(sec * -Math.PI / 30);
    ctx.strokeStyle = '#D40000';
    ctx.fillStyle = '#D40000';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(95, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 12, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, false);
    ctx.stroke();

    ctx.restore();

    window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);