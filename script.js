let btnArrowTop = document.getElementById("arrowTop");

function showArrowTop() {
    let h = document.documentElement.clientHeight;
    let hTop = document.documentElement.scrollTop;

    if (hTop >= h) {
        btnArrowTop.style.display = "block";
    } else {
        btnArrowTop.style.display = "none";
    }
}

function clickArrowTop() {
    document.documentElement.scrollTo(0, 0);
}

addEventListener('scroll', showArrowTop);
btnArrowTop.addEventListener('click', clickArrowTop);



