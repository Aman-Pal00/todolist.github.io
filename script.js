// console.log("aman");
ShowNotes();
let addbtn = document.getElementById('addbtn');
// let formtaskname = document.getElementById('formtaskname');
addbtn.addEventListener('click', function (e) {
   e.preventDefault();
   let taskname = document.getElementById('formtaskname');

   let contain_form_data = localStorage.getItem('contain_form_data');
 
   if (contain_form_data == null) {
      contain_form_dataObj = [];

   }
   else {
      contain_form_dataObj = JSON.parse(contain_form_data);
   }
   contain_form_dataObj.push(taskname.value);
   localStorage.setItem("contain_form_data", JSON.stringify(contain_form_dataObj));
   taskname.value = "";
   console.log(contain_form_dataObj);
   ShowNotes();
})
function ShowNotes() {
   let contain_form_data = localStorage.getItem('contain_form_data');
   if (contain_form_data == null) {
      contain_form_dataObj = [];

   }
   else {
      contain_form_dataObj = JSON.parse(contain_form_data);
   }
   let html = "";
   contain_form_dataObj.forEach(function (element , index) {
      html += `<div class="data">
      <h5>task name :</h5>
      <p>${element}</p>
      <input id="${index}" onclick="deletetask(this.id)"  type="button" value="delete Task">
    </div>
      `
   });
   let contain_form_data_ele=document.getElementById('contain_form_data')
   if (contain_form_dataObj.length != 0 ) {
      contain_form_data_ele.innerHTML = html
   }
   else{
      contain_form_data_ele.innerHTML = `Nothing to show! Use "Add a note" section above to add notes.`
   }
}

// function for deleting task 
function deletetask(index){
   // console.log('deleting',index);

   let contain_form_data = localStorage.getItem('contain_form_data');
   if (contain_form_data == null) {
      contain_form_dataObj = [];

   }
   else{
      contain_form_dataObj = JSON.parse(contain_form_data);
   }

   contain_form_dataObj.splice(index,1);
   localStorage.setItem("contain_form_data", JSON.stringify(contain_form_dataObj)); 
   ShowNotes();

}