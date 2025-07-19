import "./styles.css";
import { greeting } from "./greetings"; // remove this line and src/greetings.js file
import ProjectTasks from "./pages/projectTasks";

// Display Default Project Task's HTML
ProjectTasks();

// + Add Task button to popup dialog
const addTaskButton = document.querySelector('.add-task-button');
const mainDialog = document.querySelector('#addTaskDialog');
const submitButton = document.querySelector('.submit-button');
const cancelButton = document.querySelector('.cancel-button');
const formCloseButton = document.querySelector('.form-close-button')

addTaskButton.addEventListener("click", () => {
  mainDialog.showModal();
});

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  mainDialog.close();
});

formCloseButton.addEventListener("click", (e) => {
  e.preventDefault();
  mainDialog.close();
});

submitButton.addEventListener("click", taskSubmit);
function taskSubmit(e) {
  e.preventDefault();
  console.log(e);
}

mainDialog.addEventListener("mouseover", (e) => {
  e.preventDefault();
})