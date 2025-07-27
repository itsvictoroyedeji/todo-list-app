import "./styles.css";
import { greeting } from "./greetings"; // remove this line and src/greetings.js file
import ProjectTasks from "./pages/projectTasks";
import AddTaskModal from "./modals/addTask";
import User from "./modules/user";
import Project from "./modules/project";
import TodoFactory from "./modules/todo-factory";
import SidebarProjects from "./pages/sidebarProjects"

document.addEventListener('DOMContentLoaded',() => {
  const initialProjectIndex = 0;
  initLoader(initialProjectIndex);
});

// Global initializations 
let defaultUser;
let projectItemIndex;

// Initialize default user name and project if empty
if (defaultUser === undefined) {
  defaultUser = new User({
    name: "Victor",
    projects: [
      new Project({})
    ]
  });

  defaultUser.projects[0].addTodo(
    TodoFactory ({
      title: "First task of first project",
      description: "First description",
      dueDate: new Date().toLocaleDateString("en-CA"),
      priority: "Priority 4"
    })
  )

  defaultUser.addNewProject(
    new Project({
      name: "2nd project",
      todos: [
        TodoFactory ({
          title: "First task of 2nd project",
          description: "First description",
          dueDate: new Date().toLocaleDateString("en-CA"),
          priority: "Priority 4"
        }),
        TodoFactory ({
          title: "2nd task",
          description: "Second description",
          dueDate: new Date().toLocaleDateString("en-CA"),
          priority: "Priority 4"
        }),
      ]
    })
  )
  console.log(defaultUser);
};

// Display Default Project Task + Add Task Modal's HTML + Event Listeners
function initLoader(projectItemIndex) {
  SidebarProjects(defaultUser, projectItemIndex);
  ProjectTasks(defaultUser, projectItemIndex);
  AddTaskModal(defaultUser);
  attachEventListeners();
};

export function attachEventListeners() {
  // Change sidebar's title
  const sidebarTitle = document.querySelector(".sidebar-username span");
  sidebarTitle.textContent = `${defaultUser.name}'s Tasks`;

  // Sidebar project event listener
  const sidebarProjects = document.getElementsByClassName("sidebar-project-list-item");

  Array.from(sidebarProjects).forEach((project) => {
    project.addEventListener("click", (e) => {
      projectItemIndex = e.target.closest("li").dataset.index;
      mainDialog.textContent = '';
      initLoader(projectItemIndex);
    })
  });

  // Add Task form event listeners
  const addTaskButton = document.querySelector('.add-task-button');
  const editTaskButton = document.getElementsByClassName('task-list-edit-button');
  const deleteTaskButton = document.getElementsByClassName('task-list-delete-button');
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
  let taskItem;

  // Active project + Active project index selector
  const activeProject = document.querySelector(".sidebar-project-list-item.sidebar-active");
  const activeProjectIndex = activeProject.dataset.index;

  // Sidebar's "Add Task" button
  const sidebarAddTaskButton = document.querySelector(".sidebar-add-task span");

  sidebarAddTaskButton.addEventListener("click", () => {
    mainDialog.showModal();
    submitButton.textContent = addText;
  })

  // Helper function for task form close/cancel buttons
  function clearTaskFormValues() {
    formTaskName.value = "";
    formTaskDescription.value = "";
    formTaskDueDate.value = "";
    formTaskPriority.priority = "";
  }

  // + Add Task button to popup dialog
  addTaskButton.addEventListener("click", (e) => {
    mainDialog.showModal();
    submitButton.textContent = addText;
    }
  );

  // Edit Task button to popup dialog
  Array.from(editTaskButton).forEach((button) => 
    button.addEventListener("click", (e) => {
      mainDialog.showModal();
      taskItemIndex = e.target.closest("li").dataset.index;
      // const projectItem = document.querySelector(`.project-item[data-index="${taskItemIndex}"]`);
      taskItem = defaultUser.projects[activeProjectIndex].getTodos[taskItemIndex];
      formTaskName.value = taskItem.title;
      formTaskDescription.value = taskItem.description;
      formTaskDueDate.value = taskItem.dueDate;
      formTaskPriority.value = taskItem.priority;

      if (formTaskPriority.value === "Priority 1") {
        formTaskPriority.style.borderColor = "red";
      } else if (formTaskPriority.value === "Priority 2") {
        formTaskPriority.style.borderColor = "green";
      } else if (formTaskPriority.value === "Priority 3") {
        formTaskPriority.style.borderColor = "blue";
      } else if (formTaskPriority.value === "Priority 4") {
        formTaskPriority.style.borderColor = "#e6e6e6";
      }
      // Change submit button
      submitButton.textContent = saveText;
    }
  ));

  // Delete Task button confirm
  Array.from(deleteTaskButton).forEach((button) => 
    button.addEventListener("click", (e) => {
      if (confirm("Are you sure you want to delete this task?")) {;
        taskItemIndex = e.target.closest("li").dataset.index;
        defaultUser.projects[activeProjectIndex].deleteTodo(taskItemIndex);
        // Reload DOM
        mainDialog.textContent = '';
        initLoader(activeProjectIndex);
      }
    })
  );

  // Task Form Cancel (x) button
  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    mainDialog.close();
    clearTaskFormValues();
  });

  // Task form Close button
  formCloseButton.addEventListener("click", (e) => {
    e.preventDefault();
    mainDialog.close();
    clearTaskFormValues();
  });

  // Task form Add/Save button
  submitButton.addEventListener("click", taskSubmit);

  // Add New or Edit Task Data to User's Project
  function taskSubmit(e) {
    e.preventDefault();

    if (formTaskName.value.length > 0) {
      if (submitButton.textContent === addText) {
        defaultUser.projects[activeProjectIndex].addTodo(
          TodoFactory ({
            title: formTaskName.value,
            description: formTaskDescription.value,
            dueDate: formTaskDueDate.value,
            priority: formTaskPriority.value
          })
        );
      } else if (submitButton.textContent === saveText) {
        defaultUser.projects[activeProjectIndex].editTodo(
          taskItemIndex,
          TodoFactory ({
            title: formTaskName.value,
            description: formTaskDescription.value,
            dueDate: formTaskDueDate.value,
            priority: formTaskPriority.value
          })
        )
      }
      // Reload updated DOM and event listeners 
      mainDialog.textContent = '';
      initLoader(activeProjectIndex);
    } else {
      window.alert("Task name is required");
      return false;
    };
    mainDialog.close();
  };
}

