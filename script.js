document.getElementById("contactForm").onsubmit = function() {
    alert("Your inquiry has been submitted.");
    return false;
};

document.getElementsByTagName("tr")[1].onclick = function() {
    alert("Amsterdam Chips Available!");
};

document.getElementsByTagName("tr")[2].onclick = function() {
    alert("Regular Chips Available!");
};
