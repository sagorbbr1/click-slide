const panels = document.querySelectorAll('.panel');


panels.forEach(function (panel) {
    panel.addEventListener('click', function () {
        removeClass();
        panel.classList.add('active')
    })
})


function removeClass () {
    panels.forEach(function (panel) {
        panel.classList.remove('active');
    })
}