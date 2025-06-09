function drawLine() {
    const pointA = document.getElementById("A");
    const pointB = document.getElementById("B");
    const pointC = document.getElementById("C");
    const line = document.getElementById("line");
    const svg = document.getElementById("vert-line");

    const rectA = pointA.getBoundingClientRect();
    const rectB = pointB.getBoundingClientRect();
    const rectC = pointC.getBoundingClientRect();

    const y1 = rectA.top + window.scrollY - 32;
    const y2 = rectC.bottom + window.scrollY + 32;
    const x = rectB.right + window.scrollX;

    line.setAttribute("x1", x);
    line.setAttribute("x2", x);
    line.setAttribute("y1", y1);
    line.setAttribute("y2", y2);

    svg.setAttribute("width", document.body.scrollWidth);
    svg.setAttribute("height", document.body.scrollHeight);
}

window.addEventListener("load", drawLine);
window.addEventListener("resize", drawLine);
// window.addEventListener("scroll", drawLine);