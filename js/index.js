// Get all navbar links
const navbarLinks = document.querySelectorAll('.navbar-nav a');

const activeAbout = document.querySelector('#activeAbout');
const activeProjects = document.querySelector('#activeProjects');
const activeProjects2 = document.querySelector('#activeProjects2');
const activeContact = document.querySelector('#contactMeContainer');
const aboutMeLink = document.querySelector('#aboutMeLink');
const projectsLink = document.querySelector('#projectsLink');
const contactLink = document.querySelector('#contactLink');

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    const cardTitle = card.querySelector(".card-title");

    card.addEventListener("mouseover", function () {
        cardTitle.style.color = "cyan";
    });

    card.addEventListener("mouseout", function () {
        cardTitle.style.color = ""; // Reverts the color to the default
    });
});

//Intersection Observer API technique
// const navLinks = document.querySelector('#navLinks');
// function isElementNearViewport(el, threshold) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top < window.innerHeight - threshold &&
//         rect.bottom > threshold
//     );
// }

// function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             timeout = null;
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// function onScroll() {
//     if (isElementNearViewport(activeAbout, 250)) {
//         aboutMeLink.classList.add('active');
//     } else if (aboutMeLink.classList.contains('active')) {
//         aboutMeLink.classList.remove('active');
//     }

//     if (isElementNearViewport(activeProjects, 400) || isElementNearViewport(activeProjects2, 180)) {
//         projectsLink.classList.add('active');
//     } else if (projectsLink.classList.contains('active')) {
//         projectsLink.classList.remove('active');
//     }

//     if (isElementNearViewport(activeContact, 100)) {
//         contactLink.classList.add('active');
//     } else if (contactLink.classList.contains('active')) {
//         contactLink.classList.remove('active');
//     }
// }

// const debouncedOnScroll = debounce(onScroll, 100);

// navLinks.addEventListener('click', function (event) {
//     const target = event.target;
//     if (target.matches('.nav-link')) {
//         event.preventDefault();
//         target.classList.add('active');
//         navLinks.querySelectorAll('.nav-link').forEach(function (link) {
//             if (link !== target && link.classList.contains('active')) {
//                 link.classList.remove('active');
//             }
//         });
//     }
// });

// window.addEventListener('scroll', debouncedOnScroll);

function redirectResume() {
    window.location.href = 'https://drive.google.com/file/d/1Ey8umvKehgfRKSv6X3X8C5GF4i1iqDIb/view?usp=sharing';
}

function isElementNearViewport(el, threshold) {// "scrollspy" technique.
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight - threshold &&
        rect.bottom > threshold
    );
}

function onScroll() {
    if (isElementNearViewport(activeAbout, 250)) {
        aboutMeLink.classList.add("active");
    } else {
        if (aboutMeLink.classList.contains("active")) {
            aboutMeLink.classList.remove("active");
        }
    }
    if (isElementNearViewport(activeProjects, 400) || isElementNearViewport(activeProjects2, 180)) {
        projectsLink.classList.add("active");
    } else {
        if (projectsLink.classList.contains("active")) {
            projectsLink.classList.remove("active");
        }
    }

    if (isElementNearViewport(activeContact, 100)) {
        contactLink.classList.add("active");
    } else {
        if (contactLink.classList.contains("active")) {
            contactLink.classList.remove("active");
        }
    }

}

window.addEventListener("scroll", onScroll);

//Loading Screen
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("mainPage").style.display = "block";
        document.getElementById("loading").style.display = "none";

    }, 1000);
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
const sections = document.querySelectorAll(".mainSection");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
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


sections.forEach(section => {
    observer.observe(section);
})
// update the threshold whenever the window is resized
window.addEventListener('resize', () => {
    observer.thresholds = [getThreshold()];
});

//LazyloadingV.2 Test
// const sections = document.querySelectorAll(".mainSection");
// let observer;

// function createObserver() {
//     observer = new IntersectionObserver(
//         entries => {
//             entries.forEach(entry => {
//                 entry.target.classList.toggle("show", entry.isIntersecting);
//                 if (entry.isIntersecting) {
//                     observer.unobserve(entry.target);
//                 }
//             });
//         },
//         {
//             threshold: getThreshold(),
//         }
//     );

//     sections.forEach(section => {
//         observer.observe(section);
//     });
// }

// function getThreshold() {
//     const viewportWidth = window.innerWidth;
//     if (viewportWidth < 768) {
//         return 0.1;
//     } else if (viewportWidth < 1100) {
//         return 0.2;
//     } else {
//         return 0.4;
//     }
// }

// createObserver();

// window.addEventListener("resize", () => {
//     observer.disconnect();
//     observer.thresholds = [getThreshold()];
//     sections.forEach(section => {
//         observer.observe(section);
//     });
// });


//https://github.com/mattboldt/typed.js
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

// Contace Me
const sayHelloButton = document.getElementById("sayHelloButton");

sayHelloButton.addEventListener("click", () => {
    const subject = "Greetings!";
    const body = "Hi there, Thank you for reaching out!";
    window.location.href = `mailto:darylbacurin14@gmail.com?subject=${subject}&body=${body}`;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add click event listener to each anchor link
    anchor.addEventListener('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Get target element from anchor's href attribute
        const target = document.querySelector(this.getAttribute('href'));

        // Calculate distance from top of window to target element
        const offsetTop = target.offsetTop;

        // Animate smooth scroll to target element
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});
