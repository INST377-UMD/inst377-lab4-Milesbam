// Alert Me Function
document.getElementById("alert-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value;
    alert("Hi " + name + "!");
});

// Change Colors
let isBlue = true;
document.getElementById("color-btn").addEventListener("click", function() {
    if (isBlue) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
    isBlue = !isBlue;
});

// Text Tester
document.getElementById("text-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let text = document.getElementById("text-input").value;
    let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (validation.test(text)) {
        alert("Special characters detected!");
    } else {
        alert("How about...Nah");
    }
});

// Add Text 
document.getElementById("add-text-btn").addEventListener("click", function() {
    let title = document.getElementById("page-title");
    title.textContent += " Add Text";
});
