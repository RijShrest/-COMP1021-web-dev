// Check if the browser supports local storage
if (typeof (Storage) !== "undefined") {
    sessionStorage.setItem("currentPage", "home");
} else {
    alert("No local storage...")
}

// Action during initial load
$(document).ready(function () {
    loadPageLinks();
    homeClick();
});

// Nav bar button actions
function homeClick() {
    clearActive();
    loadHomeContent();
    $("#home-btn").addClass("active");

    sessionStorage.setItem("currentPage", "home");
}

function myLifeClick() {
    clearActive();
    loadMyLifeContent();
    $("#myLife-btn").addClass("active");

    sessionStorage.setItem("currentPage", "myLife");
}

function myResumeClick() {
    clearActive();
    loadMyResumeContent();
    $("#myResume-btn").addClass("active");

    sessionStorage.setItem("currentPage", "myResume");
}

function myProjectClick() {
    clearActive();
    loadMyProjectContent();
    $("#myProject-btn").addClass("active");

    sessionStorage.setItem("currentPage", "myProject");
}

function contactClick() {
    clearActive();
    loadContactContent();
    $("#contact-btn").addClass("active");

    sessionStorage.setItem("currentPage", "contact");
}


// Load home.html content
function loadHomeContent() {
    $("#content-main").empty().load("../pages/home.html");

    hidePageLinks();
    $("#homeLinks").attr("hidden", false);
}

// Load my-life.html content
function loadMyLifeContent() {
    $("#content-main").empty().load("../pages/my-life.html");

    hidePageLinks();
    $("#myLifeLinks").attr("hidden", false);
}

// Load resume.html content
function loadMyResumeContent() {
    $("#content-main").empty().load("../pages/resume.html");

    hidePageLinks();
    $("#myResumeLinks").attr("hidden", false);
}

// Load projects.html content
function loadMyProjectContent() {
    $("#content-main").empty().load("../pages/projects.html");

    hidePageLinks();
    $("#myProjectLinks").attr("hidden", false); 
}

// Load contact.html content
function loadContactContent() {
    $("#content-main").empty().load("../pages/contact.html");

    hidePageLinks();
    $("#contactLinks").attr("hidden", false);
}

// Loads the links in the sidebar
function loadPageLinks() {
    $("#page-links").load("../pages/page-links.html", function() {
        hidePageLinks();
        $("#homeLinks").attr("hidden", false);
      });
}


// Hides all links in the sidebar
function hidePageLinks() {
    const container = document.querySelector("#page-links");
    const matches = container.querySelectorAll("div");
    matches.forEach((linkDiv) => {
        linkDiv.hidden=true;
    });
}

// Clear active
function clearActive() {
    const container = document.querySelector("#navbarSupportedContent");
    const matches = container.querySelectorAll("button.active");
    matches.forEach((btn) => {
        btn.classList.remove("active");
    });
}


function testClick() {
    clearActive();
}