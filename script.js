const nav = document.getElementById('nav-section')
const navbar = document.querySelector('.navbar')
const bar = document.getElementById('bar')
const tabs = document.querySelectorAll('.tab')
const closeBtn = document.getElementById('close')

// Scroll 
function scroll() {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
}

// Tabs
tabs.forEach(tab => {
    tab.onclick = function() {
        const tabActive = document.querySelector('.tab.active')

        tabActive.classList.remove('active')
        tab.classList.add('active')
    }
})

// Show Navbar
bar.onclick = function() {
    navbar.classList.add('show')
}

// Close Navbar
closeBtn.onclick = function() {
    navbar.classList.remove('show')
}




// Fix bugs
const domNode = document.querySelector('.map')

domNode.addEventListener('mouseover', (evt => {
    // handle mouseover
   }));
   