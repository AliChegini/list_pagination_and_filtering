

let totalStudents = document.body.getElementsByClassName("student-item cf").length;
let studentsPerPage = 10;

// getting htmlCollection
let htmlCollection = document.body.getElementsByClassName("student-item cf")

// converting htmlCollection to array
let studentsArray = [].slice.call(htmlCollection);

//console.log(studentsArray);


/*** 
   function to hide all of the items in the 
   list except for the ten you want to show.
***/

function showPage(students, pageCounter) {
   // start of the slice
   let start = (pageCounter - 1) * studentsPerPage 

   // end of the slice
   let end = start + studentsPerPage
   let visibleStudents = students.slice(start, end);
   document.body.se = visibleStudents;
   //console.log(visibleStudents);

}

showPage(studentsArray, 1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks() {

}


// function to load buttons as needed
function loadButtons() {
   let buttonsNeeded = Math.floor(totalStudents / studentsPerPage) + 1;
   let button = document.createElement("button");
   button.innerHTML = "I am a button";
   let pagination = document.createElement("div");
   pagination.appendChild(button);

   // document.body.appendChild(button);

}

loadButtons();