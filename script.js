// Set up Ajax to get all the student details from json. Put it inside a function.

function getAllStudents() {
    $.ajax({
        url: './students.json',
        type: 'GET',
        data: 'json',
        // Every Ajax needs a success and an error        
        success: function (studentdata) {
            document.getElementById('results').innerHTML = '';
            let i;
            for (i = 0; i < studentdata.length; i++) {
                let student = studentdata[i];
                console.log(student);
                document.getElementById('results').innerHTML += `                
                <div class="col-md-4 col-12 mb-3">                        
                    <div class="card">                            
                        <img src="${student.profile_img}" class="card-img-top" alt="Student Profile Image">                            
                        <div class="card-body">                                
                            <h5 class="card-title"><span class="first-name">${student.first_name}</span> 
                                <span class="last-name">${student.last_name}</span>
                            </h5>                                
                            <p class="card-text">Id#: <span class="id-number">${student.id}</span>
                            </p>                                
                            <p class="card-text">Email: <span class="email">${student.email}</span>
                            </p>                            
                        </div>                        
                    </div>                    
                </div>                
                `            
            }
        },
        error: function() {
            console.log('error calling json file');
        }
    })
}

// jQuery to execute the getAllStudents function when the button is clicked
$('#getBtn').click(function () {
    getAllStudents();
})

// Set up Ajax to get student details from json based on user input into the search bar

function searchStudentsName() {
    $.ajax({
        url: './students.json',
        type: 'GET',
        data: 'json',
        success: function (studentdata) {
            let results = document.getElementById('results');
            results.innerHTML = '';
            for (let i = 0; i < studentdata.length; i++) {
                let student = studentdata[i];
                let firstName = student.first_name.toLowerCase();
                let lastName = student.last_name.toLowerCase();
                //Get the search input value                
                let searchName = document.getElementById('nameSearch').value;
                let search = searchName.toLowerCase();
                if ((firstName.includes(search) === true) || (lastName.includes(search)) === true) {
                    results.innerHTML += `                    
                    <div class="col-md-4 col-12 mb-3">                            
                        <div class="card">                                
                            <img src="${student.profile_img}" class="card-img-top" alt="Student Profile Image">                                
                            <div class="card-body">                                    
                                <h5 class="card-title"> 
                                    <span class="first-name">${student.first_name}</span> 
                                    <span class="last-name">${student.last_name}</span>
                                </h5>                                    
                                <p class="card-text">Id#: <span class="id-number">${student.id}</span>
                                </p>                                    
                                <p class="card-text">Email: <span class="email">${student.email}</span>
                                </p>                                
                            </div>                            
                        </div>                        
                    </div>                    
                    `                
                }
            }
        },
        error: function () {
            console.log('error - cannot filter');
        }
    })
}

// jQuery to execute the searchStudentsName function when the user types letters into the search field
$('#nameSearch').on('input', function () {
    searchStudentsName();
})

// Set up Ajax to get particular student details from json based on dropdown selection

function dropDownSelect() {
    $.ajax({
        url: './students.json',
        type: 'GET',
        data: 'json',
        success: function (studentdata) {
            let results = document.getElementById('results');
            results.innerHTML = '';
            let getSelection = document.getElementById("userSelection").value;
            console.log(getSelection);
            for (let i = 0; i < studentdata.length; i++) {
                let student = studentdata[i];
                let firstName = student.first_name.toLowerCase();
                let lastName = student.last_name.toLowerCase();
                let checkSelection = getSelection.toLowerCase();
                //Get the search input value                
                if (checkSelection === firstName || checkSelection === lastName) {
                    results.innerHTML += `                    
                    <div class="col-md-4 col-12 mb-3">                            
                        <div class="card">                                
                            <img src="${student.profile_img}" class="card-img-top" alt="Student Profile Image">                                
                            <div class="card-body">                                    
                                <h5 class="card-title"> 
                                    <span class="first-name">${student.first_name}</span> 
                                    <span class="last-name">${student.last_name}</span>
                                </h5>                                    
                                <p class="card-text">Id#: <span class="id-number">${student.id}</span>
                                </p>                                    
                                <p class="card-text">Email: <span class="email">${student.email}</span>
                                </p>                                
                            </div>                            
                        </div>                        
                    </div>                    
                    `                
                }
            }
        },

        error: function () {
            console.log('error - cannot do the dropdown');
        }

    })
}

// jQuery to execute the dropDownSelect function when the user changes the selection from the dropdown

$('#userSelection').on('change', function () {
        dropDownSelect();
})
