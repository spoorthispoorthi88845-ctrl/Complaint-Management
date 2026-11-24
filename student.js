
let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

function displayStudentComplaints() {
    const container = document.getElementById("studentComplaints");

    if (complaints.length === 0) {
        container.textContent = "No complaints submitted yet.";
        return;
    }

    container.innerHTML = "";

    complaints.forEach(function(complaint) {
        const card = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = complaint.title;
const id = document.createElement("p");
id.textContent = "Complaint ID: " + complaint.id;

        const category = document.createElement("p");
        category.textContent = "Category: " + complaint.category;

        const description = document.createElement("p");
        description.textContent = "Description: " + complaint.description;

        const status = document.createElement("p");
        status.textContent = "Complaint Status: " + complaint.status;

        card.append(title,id,category, description, status);
        container.appendChild(card);
    });
}

displayStudentComplaints();
