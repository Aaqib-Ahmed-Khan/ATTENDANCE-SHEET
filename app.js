var userData = [
    {
      name: "Abdullah",
      fatherName: "Mushtaq",
      age: 37,
      rollNo: 4654,
      attendance: 'absent',
    },
    {
      name: "Bilal",
      fatherName: "ahmed",
      age: 34,
      rollNo: 4565,
      attendance: 'absent',
    },
    {
      name: "Junaid",
      fatherName: "ahmed",
      age: 27,
      rollNo: 768,
      attendance: 'absent',
    },
  ];
  
  var userTable = document.getElementById("userTable").getElementsByTagName('tbody')[0];
  var userName = document.getElementById("name");
  var fatherName = document.getElementById("fatherName");
  var rollno = document.getElementById("rollno");
  var age = document.getElementById("age");
  
  var totalAttendance = document.getElementById("totalAttendance");
  var presentCount = document.getElementById("presentCount");
  var absentCount = document.getElementById("absentCount");
  
  function addData() {
    userTable.innerHTML = "";
    for (var i = 0; i < userData.length; i++) {
      userTable.innerHTML += `
      <tr>
        <td>0${i + 1}</td>
        <td>${userData[i].name}</td>
        <td>${userData[i].fatherName}</td>
        <td>${userData[i].rollNo}</td>
        <td>${userData[i].age}</td>
        <td>
          <button onclick="markPresent(${i})">P</button>
          <button onclick="markAbsent(${i})">A</button>
        </td>
      </tr>`;
    }
    updateAttendanceCounts();
  }
  
  function addUser() {
    var obj = {
      name: userName.value,
      fatherName: fatherName.value,
      rollNo: rollno.value,
      age: age.value,
      attendance: 'absent',
    };
  
    userData.push(obj);
    addData();
  }
  
  function markPresent(index) {
    userData[index].attendance = 'present';
    updateAttendanceCounts();
  }
  
  function markAbsent(index) {
    userData[index].attendance = 'absent';
    updateAttendanceCounts();
  }
  
  function updateAttendanceCounts() {
    var total = userData.length;
    var present = 0;
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].attendance === 'present') {
        present++;
      }
    }
    var absent = total - present;
  
    totalAttendance.innerText = "Total: " + total;
    presentCount.innerText = "Present: " + present;
    absentCount.innerText = "Absent: " + absent;
  }
  
  addData();
  