const backToTopDOM = document.querySelector('.back-to-top');
const headerDOM = document.querySelector('header');
let wasStickyAtLeastOne = false;
let notStickyTimer = null;
let lastScrollYPosition = window.scrollY;
let currentScrollYPosition = 0;

function contentScroll() {
    currentScrollYPosition = window.scrollY;
    console.log(currentScrollYPosition);

    // back to top
    if (currentScrollYPosition > 500) {
        backToTopDOM.classList.remove('hide');
    } else {
        backToTopDOM.classList.add('hide');
    }

    // kai leidziame i apacia
    if (currentScrollYPosition > 150 && currentScrollYPosition >= lastScrollYPosition) {
        wasStickyAtLeastOne = true;
        headerDOM.classList.add('sticky');
        headerDOM.classList.remove('not-sticky');
    }

    // kai kylame i virsiu
    if (currentScrollYPosition < 250 && currentScrollYPosition < lastScrollYPosition) {
        headerDOM.classList.remove('sticky');
        if (wasStickyAtLeastOne) {
            headerDOM.classList.add('not-sticky');

            notStickyTimer = setTimeout(() => {
                headerDOM.classList.remove('not-sticky');
                wasStickyAtLeastOne = false;
            }, 400)
        }
    }

    lastScrollYPosition = currentScrollYPosition;
}

window.addEventListener('scroll', () => {
    contentScroll();
})

contentScroll();