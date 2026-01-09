const students = [
  { roll: "24100110002", name: "Abhinav Jassi" },
  { roll: "24100110003", name: "Aditya Raj" },
  { roll: "24100110004", name: "Akanksha" },
  { roll: "24100110006", name: "Alok Kumar Singh" },
  { roll: "24100110007", name: "Aman Kumar" },
  { roll: "24100110008", name: "Amrinder Singh" },
  { roll: "24100110009", name: "Amritpreet Singh" },
  { roll: "24100110010", name: "Aniket Kumar" },
  { roll: "24100110011", name: "Anjali" },
  { roll: "24100110012", name: "Ankit Kumar Tyagi" },
  { roll: "24100110013", name: "Ankush" },
  { roll: "24100110015", name: "Arun" },
  { roll: "24100110016", name: "Arun Singh Tomar" },
  { roll: "24100110017", name: "Aryan" },
  { roll: "24100110021", name: "Baljinder Singh" },
  { roll: "24100110024", name: "Bhawanpreet Kaur" },
  { roll: "24100110026", name: "Bikram Das" },
  { roll: "24100110027", name: "Chetan Kumar" },
  { roll: "24100110029", name: "Damanpreet Singh" },
  { roll: "24100110031", name: "Deepak Kumar" },
  { roll: "24100110032", name: "Dev Karan" },
  { roll: "24100110034", name: "Dhairya Sharma" },
  { roll: "24100110037", name: "Dipankar Sutradhar" },
  { roll: "24100110038", name: "Divyansh Sharma" },
  { roll: "24100110039", name: "Ekta" },
  { roll: "24100110040", name: "Gautam Kumar" },
  { roll: "24100110041", name: "Gulshan Nishad" },
  { roll: "24100110042", name: "Gurpreet Kaur" },
  { roll: "24100110043", name: "Gurwinder Sian" },
  { roll: "24100110044", name: "Hariom Yadav" },
  { roll: "24100110046", name: "Harsimran Singh" },
  { roll: "24100110047", name: "Heena Rani" },
  { roll: "24100110048", name: "Japjit Singh" },
  { roll: "24100110049", name: "Jashanpreet Kaur" },
  { roll: "24100110051", name: "Jaskaran Singh" },
  { roll: "24100110052", name: "Jaswinder Singh" },
  { roll: "24100110053", name: "Kanchan" },
  { roll: "24100110058", name: "Lovepreet Singh Chahal" },
  { roll: "24100110059", name: "Madhav Sharma" },
  { roll: "24100110061", name: "Manu Kumar" },
  { roll: "24100110063", name: "Mayank Rajawat" },
  { roll: "24100110064", name: "Mehak" },
  { roll: "24100110065", name: "Mithlesh Kumar" },
  { roll: "24100110066", name: "Mohit Kumar Malli" },
  { roll: "24100110067", name: "Muskan" },
  { roll: "24100110069", name: "Nishant" },
  { roll: "24100110070", name: "Nishant Dhiman" },
  { roll: "24100110079", name: "Rajwinder Kaur" },
  { roll: "24100110095", name: "Shiv Sagar Kumar" },
  { roll: "24100110113", name: "Vinit" },
  { roll: "24100110119", name: "Abhishek Kumar Pal" },
  { roll: "24100110122", name: "Rohit Kumar" },
  { roll: "24100030009", name: "Anandita Ojha" },
  { roll: "24100030010", name: "Aviraj Chetry" },
  { roll: "25100111001", name: "Armanpreet Singh" },
  { roll: "25100111002", name: "Dev Soni" },
  { roll: "25100111003", name: "Kishan Gupta" },
  { roll: "25100111005", name: "Pranav Gupta" },
  { roll: "25100111006", name: "Priyanshu Tiwari" },
  { roll: "25100111007", name: "Sameer Tiwari" },
  { roll: "25100111008", name: "Shahid Mushtaq" },
  { roll: "25100111009", name: "Yash Raj" },
  { roll: "24100030022", name: "Himanshu Nain" }
];

const table = document.getElementById("studentTable");

students.forEach((s, i) => {
  table.innerHTML += `
    <tr>
      <td>${i + 1}</td>
      <td>${s.roll}</td>
      <td>${s.name}</td>
      <td>
        <select onchange="updateCount()">
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </td>
    </tr>
  `;
});

function updateCount() {
  const selects = document.querySelectorAll("select");
  let present = 0, absent = 0;

  selects.forEach(sel => {
    sel.value === "Present" ? present++ : absent++;
  });

  document.getElementById("presentCount").innerText = present;
  document.getElementById("absentCount").innerText = absent;
}

function saveAttendance() {
  const date = document.getElementById("date").value;
  if (!date) {
    alert("Please select a date");
    return;
  }
  alert("Attendance saved for " + date);
}