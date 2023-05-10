// Check if the browser supports local storage
if (typeof (Storage) !== "undefined") {
    sessionStorage.setItem("currentPage", "home");
} else {
    alert("Local storage not supported...");
}

// Action during initial load of the website
$(document).ready(function () {
    loadPageLinks();
    homeClick();
    getLocation();
});

// Nav bar button actions

function homeClick() {
    clearActive(); // clear the active tag
    loadHomeContent(); // load the content
    $("#home-btn").addClass("active"); // add the active tag

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
    $("#page-links").load("../pages/page-links.html", function () {
        hidePageLinks();
        $("#homeLinks").attr("hidden", false);
    });
}


// Hides all links in the sidebar
function hidePageLinks() {
    const container = document.querySelector("#page-links");
    const matches = container.querySelectorAll("div");
    matches.forEach((linkDiv) => {
        linkDiv.hidden = true;
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

// When message is sent
function sendMessage() {
    if ($("#message-from").checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        alert("Message successfully sent");
    } else {
        event.preventDefault();
        event.stopPropagation();
    }
}


function testClick() {
    clearActive();
}

// Implementation of geo-location

var x = document.getElementById("geo-location-container");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation not supported...");
    }
}

function showPosition(position) {
    var dist = distance(53.8, -1.55, position.coords.latitude, position.coords.longitude, "K");
    x.innerHTML = "We are " + (Math.round((dist) * 100) / 100).toFixed(2) + "km apart";
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::                                                                         :::
//:::  This routine calculates the distance between two points (given the     :::
//:::  latitude/longitude of those points). It is being used to calculate     :::
//:::  the distance between two locations using GeoDataSource (TM) prodducts  :::
//:::                                                                         :::
//:::  Definitions:                                                           :::
//:::    South latitudes are negative, east longitudes are positive           :::
//:::                                                                         :::
//:::  Passed to function:                                                    :::
//:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
//:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
//:::    unit = the unit you desire for results                               :::
//:::           where: 'M' is statute miles (default)                         :::
//:::                  'K' is kilometers                                      :::
//:::                  'N' is nautical miles                                  :::
//:::                                                                         :::
//:::  Worldwide cities and other features databases with latitude longitude  :::
//:::  are available at https://www.geodatasource.com                         :::
//:::                                                                         :::
//:::  For enquiries, please contact sales@geodatasource.com                  :::
//:::                                                                         :::
//:::  Official Web site: https://www.geodatasource.com                       :::
//:::                                                                         :::
//:::               GeoDataSource.com (C) All Rights Reserved 2022            :::
//:::                                                                         :::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist;
    }
}