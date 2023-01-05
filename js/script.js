

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
   //console.log(visibleStudents);

   return visibleStudents;
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

   // create pagination element
   let pagination = document.createElement("pagination");
   pagination.style.backgroundColor = "red";

   // problem is to append the pagination element to page element instead of body 
   // how ???
   // let page = document.body.getElementsByClassName("page");
   
   // loop to create buttons
   for (let i = 1; i <= buttonsNeeded; i ++ ) {
      let button = document.createElement("button");
      button.innerHTML = i;
      pagination.appendChild(button);
   }

   //document.body.append(pagination);
   document.body.appendChild(pagination);

}

loadButtons();