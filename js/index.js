// Get all navbar links
const navbarLinks = document.querySelectorAll('.navbar-nav a');

const activeAbout = document.querySelector('#activeAbout');
const activeProjects = document.querySelector('#activeProjects');
const activeProjects2 = document.querySelector('#activeProjects2');
const activeContact = document.querySelector('#contactMeContainer');
const test1 = document.querySelector('#test1');
const test2 = document.querySelector('#test2');
const test3 = document.querySelector('#test3');
//Test Active Status
// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <=
//         (window.innerWidth || document.documentElement.clientWidth)
//     );
// }
// function onScroll() {
//     if (isElementInViewport(activeAbout)) {
//         test1.classList.add("text-info");
//     } else {
//         if (test1.classList.contains("text-info")) {
//             test1.classList.remove("text-info");
//         }
//     }
//     if (isElementInViewport(activeProjects)) {
//         test2.classList.add("text-info");
//     } else {
//         if (test2.classList.contains("text-info")) {
//             test2.classList.remove("text-info");
//         }
//     }
//     if (isElementInViewport(activeContact)) {
//         test3.classList.add("text-info");
//     } else {
//         if (test3.classList.contains("text-info")) {
//             test3.classList.remove("text-info");
//         }
//     }
// }
// window.addEventListener("scroll", onScroll);
function isElementNearViewport(el, threshold) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight - threshold &&
        rect.bottom > threshold
    );
}

function onScroll() {
    if (isElementNearViewport(activeAbout, 100)) {
        test1.classList.add("active");
    } else {
        if (test1.classList.contains("active")) {
            test1.classList.remove("active");
        }
    }
    if (isElementNearViewport(activeProjects, 450)) {
        test2.classList.add("active");
    } else {
        if (test2.classList.contains("active")) {
            test2.classList.remove("active");
        }
    }
    // if (isElementNearViewport(activeProjects2, 100)) {
    //     test2.classList.add("text-info");
    // } else {
    //     if (test2.classList.contains("text-info")) {
    //         test2.classList.remove("text-info");
    //     }
    // }
    if (isElementNearViewport(activeContact, 100)) {
        test3.classList.add("active");
    } else {
        if (test3.classList.contains("active")) {
            test3.classList.remove("active");
        }
    }

}

window.addEventListener("scroll", onScroll);
//Loading Screen
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
