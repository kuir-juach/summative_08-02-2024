document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const studentId = document.getElementById('student-id').value;
    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;
    const math = parseFloat(document.getElementById('math').value);
    const science = parseFloat(document.getElementById('science').value);
    const english = parseFloat(document.getElementById('english').value);
    const socialStudies = parseFloat(document.getElementById('social-studies').value);
    const religiousStudies = parseFloat(document.getElementById('religious-studies').value);
    const payment = document.getElementById('payment').value;

    const average = ((math + science + english + socialStudies + religiousStudies) / 5).toFixed(2);
    
    const studentList = document.getElementById('student-list');
    
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${studentId}</td>
        <td>${name}</td>
        <td>${studentClass}</td>
        <td>${math}</td>
        <td>${science}</td>
        <td>${english}</td>
        <td>${socialStudies}</td>
        <td>${religiousStudies}</td>
        <td>${average}</td>
        <td>${payment}</td>
    `;
    
    studentList.appendChild(row);
    
    document.getElementById('student-form').reset();
});

document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const students = document.querySelectorAll('#student-list tr');

    students.forEach(function(student) {
        const id = student.cells[0].textContent.toLowerCase();
        const name = student.cells[1].textContent.toLowerCase();
        if (id.includes(searchTerm) || name.includes(searchTerm)) {
            student.style.display = '';
        } else {
            student.style.display = 'none';
        }
    });
});
