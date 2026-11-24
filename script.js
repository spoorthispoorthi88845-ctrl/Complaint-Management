
// Get complaint form
const form = document.querySelector("form");

// Store complaints
let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

// Submit complaint
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputs = form.querySelectorAll("input, select, textarea");

    const complaint = {
        id: Date.now(),
        name: inputs[0].value,
        title: inputs[1].value,
        category: inputs[2].value,
        description: inputs[3].value,
        status: "Pending"
    };

    complaints.push(complaint);

    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert("Complaint submitted successfully!");

    form.reset();
});
