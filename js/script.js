
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

// function showPage(students, pageCounter = 1) {
//    // start of the slice
//    let start = (pageCounter - 1) * studentsPerPage 

//    // end of the slice
//    let end = start + studentsPerPage
//    let visibleStudents = students.slice(start, end);
//    //console.log(visibleStudents);

//    return visibleStudents;
// }

// TODO: figure out formula for i in range 
function showPage(students, pageCounter = 1) {
   //  i = ( pageCounter - 1 ) * studentPerPage
   for (let i = ( pageCounter - 1 ) * studentsPerPage; i < students.length; i ++) {
      if ( i >= (pageCounter * studentsPerPage) {
         students[i].style.display = "none";
      }
   }
}



showPage(htmlCollection, 2);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks() {

}


// function to load buttons as needed
function loadButtons(activePage = 1) {
   let buttonsNeeded = Math.floor(totalStudents / studentsPerPage) + 1;

   // create pagination element
   let pagination = document.createElement("div");
   pagination.className = "pagination";

   let ul = document.createElement("ul");
   pagination.appendChild(ul);
   
   // loop to create buttons
   for (let i = 1; i <= buttonsNeeded; i ++ ) {
      let li = document.createElement("li");
      let a = document.createElement("a");

      // check if the page is active set attribute class
      if (i == activePage) {
         a.setAttribute("class", "active");
      }

      a.setAttribute("href", `#${i}`);
      a.innerHTML = i;
   
      li.appendChild(a);
      ul.appendChild(li);
   }

   document.body.appendChild(pagination);
}

loadButtons();

//document.getElementById("pagination").addEventListener("click", loadButtons(2));
