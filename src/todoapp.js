import "./styles.css";
import { greeting } from "./greetings"; // remove this line and src/greetings.js file
import ProjectTasks from "./pages/projectTasks";
import AddTaskModal from "./modals/addTask";
import User from "./modules/user";
import Project from "./modules/project";
import TodoFactory from "./modules/todo-factory";
// import { defaultUser }  from "./modals/default-user";

document.addEventListener('DOMContentLoaded',() => {
   initLoader();
});

let defaultUser;

// Initialize default user name and project if empty
if (defaultUser === undefined) {
  defaultUser = new User({
  name: "Victor",
  projects: [
    new Project({
  })
  ]
  });

  defaultUser.projects[0].addTodo(
    TodoFactory ({
      title: "First task",
      description: "First description",
      dueDate: new Date().toLocaleDateString("en-CA"),
      priority: "Priority 4"
    })
  );
}

// Display Default Project Task + Add Task Modal's HTML + Event Listeners
function initLoader() {
  ProjectTasks(defaultUser);
  AddTaskModal();
  attachEventListeners();
  console.log(defaultUser);
};

function attachEventListeners() {
  const addTaskButton = document.querySelector('.add-task-button');
  const editTaskButton = document.getElementsByClassName('task-list-edit-button');
  const mainDialog = document.querySelector('#addTaskDialog');
  const submitButton = document.querySelector('.submit-button');
  const cancelButton = document.querySelector('.cancel-button');
  const formCloseButton = document.querySelector('.form-close-button');
  const formTaskName = document.querySelector('#task-name');
  const formTaskDescription = document.querySelector('#task-description');
  const formTaskDueDate = document.querySelector('#task-date');
  const formTaskPriority = document.querySelector('#task-priority');
  const addText = "Add";
  const saveText = "Save";
  let taskItemIndex;
  

  // + Add Task button to popup dialog
  addTaskButton.addEventListener("click", (e) => {
    mainDialog.showModal();
    submitButton.textContent = addText;
    }
  );

  Array.from(editTaskButton).forEach((button) => 
    button.addEventListener("click", (e) => {
      mainDialog.showModal();
      taskItemIndex = e.target.closest("li").dataset.index;
      // const projectItem = document.querySelector(`.project-item[data-index="${taskItemIndex}"]`);
      const taskItems = defaultUser.projects[0].getTodos[taskItemIndex];
      formTaskName.value = taskItems.title;
      formTaskDescription.value = taskItems.description;
      formTaskDueDate.value = taskItems.dueDate;
      formTaskPriority.value = taskItems.priority;

      submitButton.textContent = saveText;
    }
  ));

  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    mainDialog.close();
    formTaskName.value = "";
    formTaskDescription.value = "";
    formTaskDueDate.value = "";
    formTaskPriority.priority = "";
  });

  formCloseButton.addEventListener("click", (e) => {
    e.preventDefault();
    mainDialog.close();
    formTaskName.value = "";
    formTaskDescription.value = "";
    formTaskDueDate.value = "";
    formTaskPriority.priority = "";
  });

  submitButton.addEventListener("click", taskSubmit);

  // Add New or Edit Task Data to User's Project
  function taskSubmit(e) {
    e.preventDefault();


    if (formTaskName.value.length > 0) {
      
      defaultUser.projects[0].addTodo(
        TodoFactory ({
          title: formTaskName.value,
          description: formTaskDescription.value,
          dueDate: formTaskDueDate.value,
          priority: formTaskPriority.value
        })
      );
      // Reload updated DOM and event listeners 
      mainDialog.textContent = '';
      initLoader();
    } else {
      window.alert("Task name is required");
      return false;
    };
    mainDialog.close();
  };
}



