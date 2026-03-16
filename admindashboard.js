const form = document.getElementById("entryForm");
const table = document.getElementById("recordTable");

let records = JSON.parse(localStorage.getItem("hostelRecords")) || [];

function displayRecords() {
    table.innerHTML = "";
    records.forEach((rec, index) => {
        table.innerHTML += `
            <tr>
                <td>${rec.Name}</td>
                <td>${rec.room}</td>
                <td>${rec.contact}</td>
                <td>${rec.destination}</td>
                <td>${rec.outTime}</td>
                <td>${rec.inTime || "-"}</td>
                <td>
                    <button class="action-btn" onclick="markInTime(${index})">
                        Mark In
                    </button>
                </td>
            </tr>
        `;
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const newRecord = {
        Name: Name.value,
        room: room.value,
        contact: contact.value,
        destination: destination.value,
        outTime: outTime.value,
        inTime: ""
    };

    records.push(newRecord);
    localStorage.setItem("hostelRecords", JSON.stringify(records));

    form.reset();
    displayRecords();
});

function markInTime(index) {
    const time = prompt("Enter In Time (HH:MM)");
    if (time) {
        records[index].inTime = time;
        localStorage.setItem("hostelRecords", JSON.stringify(records));
        displayRecords();
    }
}

function logout() {
    window.location.href = "wardenlogin.html";
}

displayRecords();
