
let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

function displayAdminComplaints() {
    const container = document.getElementById("adminComplaints");

    if (complaints.length === 0) {
        container.textContent = "No complaints submitted yet.";
        return;
    }

    container.innerHTML = "";

    complaints.forEach(function(complaint) {
        const item = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = complaint.title;
const id = document.createElement("p");
id.textContent = "Complaint ID: " + complaint.id;

        const name = document.createElement("p");
        name.textContent = "Student: " + complaint.name;

        const category = document.createElement("p");
        category.textContent = "Category: " + complaint.category;

        const description = document.createElement("p");
        description.textContent = "Description: " + complaint.description;

        const status = document.createElement("p");
        status.textContent = "Status: " + complaint.status;

        const select = document.createElement("select");

        ["Pending", "In Progress", "Resolved"].forEach(function(value) {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = value;
            select.appendChild(option);
        });

        select.value = complaint.status;

        select.addEventListener("change", function() {
            complaint.status = select.value;
            localStorage.setItem("complaints", JSON.stringify(complaints));
            displayAdminComplaints();
        });

        item.append(title, name, category, description, status, select);
        container.appendChild(item);
    });
}

displayAdminComplaints();

function logout() {
    window.location.href = "login.html";
}

