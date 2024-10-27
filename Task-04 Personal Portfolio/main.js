document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        const value = bar.getAttribute("data-value");
        const fill = document.createElement("div");
        fill.classList.add("fill");
        fill.style.width = value;
        bar.appendChild(fill);
    });
});

function opensite() {
    window.location.href = "https://mummaschoice.netlify.app/";
}

function openp1() {
    window.location.href = "https://www.google.com";
}

function openp2() {
    window.location.href = "https://www.google.com";
}

function openp3() {
    window.location.href = "https://www.google.com";
}