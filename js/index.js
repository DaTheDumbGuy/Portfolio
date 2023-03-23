// Get all navbar links
const navbarLinks = document.querySelectorAll('.navbar-nav a');


window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("mainPage").style.display = "block";
        document.getElementById("loading").style.display = "none";
    }, 4000); // Change 2000 to the number of milliseconds you want to delay
});
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
    threshold: getThreshold()
})

function getThreshold() {
    const viewportWidth = window.innerWidth;
    // adjust the threshold based on the viewport width
    if (viewportWidth < 768) {
        return 0.1;
    } else if (viewportWidth < 1100) {
        return 0.2;
    } else {
        return 0.4;
    }
}
cards.forEach(card => {
    observer.observe(card);
})
// update the threshold whenever the window is resized
window.addEventListener('resize', () => {
    observer.thresholds = [getThreshold()];
});

// Typewriting
let typed = new Typed("#nameTyped", {
    strings: [
        "What's next?",
        "Hire me!"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});
let typed2 = new Typed("#loadingType", {
    strings: [
        "Loading Test"
    ],
    typeSpeed: 88,
    backSpeed: 100,
    loop: true,
});
