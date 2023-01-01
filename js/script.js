

let totalStudents = document.body.getElementsByClassName("student-item cf").length;
let studentsPerPage = 10;

//console.log(totalStudents);


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage(studentList, pageNumber) {
   for (let i = 0; i < studentList.length; i++) {
      if (i > pageNumber * studentsPerPage) {
         // hide elements
      }

   }
}


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
