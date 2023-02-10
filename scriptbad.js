function getStudentDetails() {
    $.ajax({
        url: './students.json',
        type: 'GET',
        data: 'json',
    
        // every Ajax needs a success and an error
    
        // on success run a function ... (studentData is the name we have given the array inside students.json)
        // success: function(studentData) {
        //     let i;
        //     for (i = 0; i < studentData.length; i++) {
        //         let student = studentData[i];
        //         console.log(student);
        //     }
        // }
        success: function(studentData) {
            document.getElementById('results').innerHTML = '';
            let i;
            for (i = 0; i < studentData.length; i++) {
                let student = studentData[i];
                console.log(student);
                document.getElementById('results').innerHTML += `
                <div class="col-md-4 col-12 mb-3">
                    <div class="card">
                        <img src="${student.profile_img}" class="card-img-top" alt="Student Profile Image">
                        <div class="card-body">
                            <h5 class="card-title"><span class="first-name">${student.first_name}</span> <span class="last-name">${student.last_name}</span></h5>
                            <p class="card-text">Id#: <span class="id-number">${student.id}</span></p>
                            <p class="card-text">Email: <span class="email">${student.email}</span></p>
                        </div>
                    </div>
                </div>
                `
            }
        },

        error: function() {
            console.log("error calling json file");
        }
    })
}

// wwrap all of the above inside a function and then do a j query on click to call the get function

$('#getBtn').click(function () {
    getStudentDetails();
})


// function to be the wrapper for the AJAX - need to do another AJAX
function searchStudentsName() {

    $.ajax ({
        url: './students.json',
        type: 'GET',
        data: 'json',
        success: function(studentData) {

            let results = document.getElementById('results');
            results.innerHTML = '';
            for (let i = 0; i < studentData.length; i++) {

                let student = studentData[i];
                let firstName = student.first_name.toLowerCase();
                let lastName = student.last_name.toLowerCase();
                // get the search input value
                let searchName = document.getElementById('nameSearch').value;
                let search = searchName.toLowerCase;
                if ((firstName.includes(search) === true) || (lastName.includes(search)) === true) {
                    console.log("working");

                    results.innerHTML += `
                    <div class="col-md-4 col-12 mb-3">
                        <div class="card">
                            <img src="${student.profile_img}" class="card-img-top" alt="Student Profile Image">
                            <div class="card-body">
                                <h5 class="card-title"><span class="first-name">${student.first_name}</span> <span class="last-name">${student.last_name}</span></h5>
                                <p class="card-text">Id#: <span class="id-number">${student.id}</span></p>
                                <p class="card-text">Email: <span class="email">${student.email}</span></p>
                            </div>
                        </div>
                    </div>
                    `
                }
            }
        },
        error: function() {
            console.log("error - cannot filter");
        }
    })
}

// j query on input to call the get function

$('#nameSearch').on('input', function () {
    searchStudentsName();
})
