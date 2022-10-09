function showText (elem) {
    if ( elem.previousElementSibling.clientHeight === 76) {
        elem.previousElementSibling.style.height = "100%";
        elem.innerHTML = "SHOW LESS"
    } else {
        elem.previousElementSibling.style.height = "76px";
        elem.innerHTML = "SEE MORE"
    };
}