const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        //Lazy Loading
        if (entry.isIntersecting) observer.unobserve(entry.target);
    })
}, {
    threshold: 1,

})

cards.forEach(card => {
    observer.observe(card);
})
var test = document.querySelector('.test');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        test.classList.add('scrolled');
    } else {
        test.classList.remove('scrolled');
    }


});