export function trackElapsedTime() {
    const start = new Date();
    const mainDoc = document.getElementById("main") || document.body;
    const labelDoc = document.createElement("label");

    function pad(num) {
        return ("0" + parseInt(num)).slice(-2);
    }

    function tick() {
        const now = new Date();
        if (now < start) {
            start.setDate(start.getDate() - 1);
        }
        let remain = (now - start) / 1000;
        let hh = pad((remain / 60 / 60) % 60);
        let mm = pad((remain / 60) % 60);
        let ss = pad(remain % 60);
        let diff = hh + ":" + mm + ":" + ss;

        labelDoc.innerHTML = diff;
        mainDoc.appendChild(labelDoc);
        setTimeout(tick, 1000);
    }

    tick();
}
