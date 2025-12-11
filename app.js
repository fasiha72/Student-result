function getResult() {

    let name = prompt("Enter Student Name:");
    let roll = prompt("Enter Roll Number:");

    let English = +prompt("Enter English Marks (out of 100):");
    let Math = +prompt("Enter Math Marks (out of 100):");
    let Science = +prompt("Enter Science Marks (out of 100):");
    let Urdu = +prompt("Enter Urdu Marks (out of 100):");
    let Islamiat = +prompt("Enter Islamiat Marks (out of 100):");

    let total = English + Math + Science + Urdu + Islamiat;
    let percentage = (total / 500) * 100;

    let grade;

    if (percentage >= 80) grade = "A+";
    else if (percentage >= 70) grade = "A";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 50) grade = "C";
    else if (percentage >= 40) grade = "D";
    else grade = "Fail";

    document.getElementById("result").innerHTML = `
        <div class="result-card">
            <h2>Student Result</h2>

            <p><b>Name:</b> ${name}</p>
            <p><b>Roll No:</b> ${roll}</p>

            <table>
                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                </tr>
                <tr><td>English</td><td>${English}</td></tr>
                <tr><td>Math</td><td>${Math}</td></tr>
                <tr><td>Science</td><td>${Science}</td></tr>
                <tr><td>Urdu</td><td>${Urdu}</td></tr>
                <tr><td>Islamiat</td><td>${Islamiat}</td></tr>
            </table>

            <p class="highlight">Total Marks: ${total} / 500</p>
            <p class="highlight">Percentage: ${percentage.toFixed(2)}%</p>
            <p class="highlight">Grade: ${grade}</p>
        </div>
    `;
}
