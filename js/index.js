// Get all navbar links
const navbarLinks = document.querySelectorAll('.navbar-nav a');

// Add click event listener to each navbar link
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Collapse the navbar
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarLinks = document.querySelector('.navbar-collapse');
        navbarToggler.classList.add('collapsed');
        navbarLinks.classList.remove('show');

    });
});

//Lazy Loading
const cards = document.querySelectorAll(".mainSection");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        // if (entry.isIntersecting) observer.unobserve(entry.target);
    })
}, {
    threshold: 0.1,
})

cards.forEach(card => {
    observer.observe(card);
})
//Typewriting
// var typed = new Typed("#nameTyped", {
//     strings: [
//         "I build things for the web",
//         "and am an aspiring software developer"
//     ],
//     typeSpeed: 50,
//     backSpeed: 50,
//     loop: true,
// });