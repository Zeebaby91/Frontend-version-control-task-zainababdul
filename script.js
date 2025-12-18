const students = [
    { name: "Amina Usman – JSS2", age: 20 },
    { name: "Maryam Musa – JSS1", age: 17 },
    { name: "Bello Ahmed – SS1", age: 23 },
    { name: "Zainab Ali – Primary 6", age: 15 },
    { name: "Sani Ibrahim – SS2", age: 20 }
];

// map() → get student names
const studentNames = students.map(student => student.name);

// filter() → adult students
const adultStudents = students.filter(student => student.age >= 18);

// reduce() → sum of ages
const totalAge = students.reduce((sum, student) => sum + student.age, 0);

// Display list using forEach()
const list = document.getElementById("studentList");
studentNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
});

// Update statistics
document.getElementById("totalStudents").textContent =
    `${students.length} Enrolled Students`;

document.getElementById("adultStudents").textContent =
    `${adultStudents.length} Students Above 18`;

document.getElementById("totalAge").textContent =

    `Combined Age: ${totalAge} Years`;

