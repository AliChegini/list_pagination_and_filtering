
let totalStudents = document.body.getElementsByClassName("student-item cf").length;
let studentsPerPage = 10;

// getting htmlCollection of students
let htmlCollection = document.body.getElementsByClassName("student-item cf")

// number of buttons needed 
let buttonsNeeded = Math.floor(totalStudents / studentsPerPage) + 1;

/*** 
   function to hide all of the items in the 
   list except for the ten to show.
***/

function showPage(students, pageCounter = 1) {
   let studentsInLastPage = totalStudents % studentsPerPage;

   // start of the slice
   let start = (pageCounter - 1) * studentsPerPage;

   // end of the slice
   let end;

   // end is calculated differently for the last page 
   if (pageCounter == buttonsNeeded) {
      end = start + studentsInLastPage;
   } else {
      end = start + studentsPerPage;
   }

   // loop to hide all elements
   for (let i = 0; i < students.length; i ++) {
      students[i].style.display = "none";
   }
   // loop to display 10 students per page
   for (let i = start; i < end; i ++) {
      students[i].style.display = "block";
   }
}


// function to load buttons
function loadButtons() {
   
   // create pagination element
   let pagination = document.createElement("div");
   pagination.className = "pagination";

   let ul = document.createElement("ul");
   pagination.appendChild(ul);
   
   // loop to create buttons
   for (let i = 1; i <= buttonsNeeded; i ++ ) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.setAttribute("href", `#${i}`);
      a.innerHTML = i;
   
      li.appendChild(a);
      ul.appendChild(li);
   }
   // append pagination div at the end of student list
   document.getElementsByClassName("student-list")[0].appendChild(pagination);
}


// function to set the active page
function setActivePage(activePage = 1) {
   let links = document.getElementsByTagName("a");

   for (let i = 0; i < links.length; i ++) {
      // page number starts from 1 not 0
      if (i == activePage-1) {
         links[i].setAttribute("class", "active");
      } else {
         links[i].setAttribute("class", "");
      }
   }
}

showPage(htmlCollection);
loadButtons();
setActivePage();

// event listener for dynamic elements
document.body.addEventListener("click", function(e) {
   let target = e.target.closest("a");

   if (target) {
      reloadPage(target.innerHTML)
   }
});

function reloadPage(pageCounter) {
   showPage(htmlCollection, pageCounter);
   setActivePage(pageCounter);
}