
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
// Display submitted complaints
function displayComplaints() {
    const container = document.getElementById("complaints");

    container.innerHTML = "<h2>Submitted Complaints</h2>";

    complaints.forEach(function(complaint) {
        container.innerHTML += `
            <div>
                <h3>${complaint.title}</h3>
                <p>Student: ${complaint.name}</p>
                <p>Category: ${complaint.category}</p>
                <p>Description: ${complaint.description}</p>
                <p>Status: ${complaint.status}</p>
            </div>
        `;
    });
}

displayComplaints();
