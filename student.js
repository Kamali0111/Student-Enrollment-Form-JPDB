document.getElementById("saveBtn").addEventListener("click", saveData);
document.getElementById("updateBtn").addEventListener("click", updateData);

function validateForm() {

    let fields = [
        "rollNo",
        "fullName",
        "studentClass",
        "birthDate",
        "address",
        "enrollmentDate"
    ];

    for (let field of fields) {
        if (document.getElementById(field).value.trim() === "") {
            alert("Please fill all fields");
            return false;
        }
    }

    return true;
}

function saveData() {

    if (!validateForm())
        return;

    alert("Student data saved successfully");

    document.getElementById("studentForm").reset();
}

function updateData() {

    if (!validateForm())
        return;

    alert("Student data updated successfully");

    document.getElementById("studentForm").reset();
}
