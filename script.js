// ===========================
// Aaditya Top Up Centre
// Premium Script v1.0
// ===========================

// Back To Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// FAQ Accordion
document.querySelectorAll(".faq-item h3").forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});

// Fade In Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden-section");

    observer.observe(section);

});

// Dark Mode
const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });

}

// Loading Screen
window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}
// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================
// Search Games
// ===========================

const searchInput = document.getElementById("gameSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        document.querySelectorAll(".game-card").forEach(card => {

            let game = card.querySelector("h3").textContent.toLowerCase();

            card.style.display = game.includes(value) ? "block" : "none";

        });

    });

}

// ===========================
// Card Hover Animation
// ===========================

document.querySelectorAll(".game-card,.feature-card,.offer-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===========================
// Counter Animation
// ===========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ===========================
// Notification
// ===========================

function showNotification(message){

    const notify = document.createElement("div");

    notify.className = "notification";

    notify.innerText = message;

    document.body.appendChild(notify);

    setTimeout(()=>{

        notify.classList.add("show");

    },100);

    setTimeout(()=>{

        notify.remove();

    },4000);

}

showNotification("🎮 Welcome to Aaditya Top Up Centre!");
// =====================================
// Premium Loader
// =====================================

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    setTimeout(() => {

        loader.remove();

    }, 600);

});

// =====================================
// Sticky Header Shadow
// =====================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// =====================================
// Scroll Reveal Animation
// =====================================

const revealElements = document.querySelectorAll(

".feature-card,.game-card,.offer-card,.review-card,.stat-card"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

}

);

revealElements.forEach(el=>{

el.classList.add("hidden-card");

revealObserver.observe(el);

});

// =====================================
// WhatsApp Button Animation
// =====================================

const whatsapp = document.querySelector(".whatsapp-btn");

if(whatsapp){

setInterval(()=>{

whatsapp.classList.add("pulse");

setTimeout(()=>{

whatsapp.classList.remove("pulse");

},1000);

},4000);

}

// =====================================
// Theme Preference
// =====================================

if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark");

}

const themeButton=document.querySelector(".theme-btn");

if(themeButton){

themeButton.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

}

}

// =====================================
// Mobile Bottom Navigation
// =====================================

const bottomLinks=document.querySelectorAll(".bottom-nav a");

bottomLinks.forEach(link=>{

link.addEventListener("click",()=>{

bottomLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});

// =====================================
// Welcome Message
// =====================================

setTimeout(()=>{

showNotification("🔥 Enjoy Instant Top-Up at Aaditya Top Up Centre");

},3000);
// ======================================
// Live Clock
// ======================================

function updateClock() {

    const clock = document.getElementById("liveClock");

    if (!clock) return;

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();


// ======================================
// Skeleton Loading
// ======================================

window.addEventListener("load", () => {

    document.querySelectorAll(".skeleton").forEach(item => {

        item.classList.remove("skeleton");

    });

});


// ======================================
// Favorite Button
// ======================================

document.querySelectorAll(".favorite-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("active");

        btn.innerHTML = btn.classList.contains("active")
            ? "❤️"
            : "🤍";

    });

});


// ======================================
// Copy eSewa ID
// ======================================

const copyBtn = document.getElementById("copyEsewa");

if (copyBtn) {

    copyBtn.addEventListener("click", () => {

        const id = document.getElementById("esewaId").innerText;

        navigator.clipboard.writeText(id);

        showNotification("✅ eSewa ID Copied");

    });

}


// ======================================
// Page Loader Progress
// ======================================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width =
        (scroll / height) * 100 + "%";

});


// ======================================
// Auto Close Mobile Menu
// ======================================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        const nav = document.querySelector("nav");

        if (nav) {

            nav.classList.remove("active");

        }

    });

});


// ======================================
// Online Status
// ======================================

window.addEventListener("online", () => {

    showNotification("🟢 Internet Connected");

});

window.addEventListener("offline", () => {

    showNotification("🔴 No Internet Connection");

});


// ======================================
// Console Message
// ======================================

console.log("🚀 Aaditya Top Up Centre Loaded Successfully");
