import "./styles.css";
import { greeting } from "./greetings"; // remove this line and src/greetings.js file
import ProjectTasks from "./pages/projectTasks";
import AddTaskModal from "./modals/addTask";
import User from "./modules/user";
import Project from "./modules/project";
import TodoFactory from "./modules/todo-factory";
import SidebarProjects from "./pages/sidebarProjects";
import AddProjectModal from "./modals/addProject";

document.addEventListener('DOMContentLoaded',() => {
  const initialProjectIndex = 0;
  initLoader(initialProjectIndex);
});

// GLOBAL initializations 
let defaultUser;
let projectItemIndex;
let newProjectIndex;
const mainDialog = document.querySelector("#content");
const sidebarProjectsList = document.querySelector("#sidebar-projects-list");

// Initialize default user name and project if empty
if (defaultUser === undefined) {
  defaultUser = new User({
    name: "Victor",
    projects: [
      new Project({})
    ]
  });

  // defaultUser.projects[0].addTodo(
  //   TodoFactory ({
  //     title: "First task of first project",
  //     description: "First description",
  //     dueDate: new Date().toLocaleDateString("en-CA"),
  //     priority: "Priority 4"
  //   })
  // )

  // defaultUser.addNewProject(
  //   new Project({
  //     name: "2nd project",
  //     todos: [
  //       TodoFactory ({
  //         title: "First task of 2nd project",
  //         description: "First description",
  //         dueDate: new Date().toLocaleDateString("en-CA"),
  //         priority: "Priority 4"
  //       }),
  //       TodoFactory ({
  //         title: "2nd task",
  //         description: "Second description",
  //         dueDate: new Date().toLocaleDateString("en-CA"),
  //         priority: "Priority 4"
  //       }),
  //     ]
  //   })
  // );
};

// ------- DEFAULT INTI -----
// Display Default Project Task + Add Task Modal's HTML + Event Listeners

function initLoader(projectItemIndex) {
  if (defaultUser.projects.length > 0) {
    SidebarProjects(defaultUser, projectItemIndex);
    ProjectTasks(defaultUser, projectItemIndex);
    AddProjectModal(defaultUser);
    AddTaskModal(defaultUser);
    attachEventListeners();

  } else {
    mainDialog.textContent = "";
    sidebarProjectsList.textContent = "";
    AddProjectModal(defaultUser);
    AddTaskModal(defaultUser);
    // attachEventListeners();
  }
  console.log(defaultUser);
};

export function attachEventListeners() {
  // Change sidebar's title
  const sidebarTitle = document.querySelector(".sidebar-username span");
  sidebarTitle.textContent = `${defaultUser.name}'s Tasks`;

  // Add Project form event listeners
  const sidebarAddProjectButton = document.querySelector(".sidebar-projects-add button");
  const editProjectButton = document.querySelector('.edit-project-button');
  const deleteProjectButton = document.querySelector('.delete-project-button');
  const projectDialog = document.querySelector('#addProjectDialog');
  const projectDialogHeader = document.querySelector('#addProjectDialog .form-header-text');
  const formProjectName = document.querySelector('#project-name');
  const projectSubmitButton = document.querySelector('#addProjectDialog .submit-button');
  const projectCancelButton = document.querySelector('#addProjectDialog .cancel-button');
  const projectFormCloseButton = document.querySelector('#addProjectDialog .form-close-button');

  // Add Task form event listeners
  const sidebarAddTaskButton = document.querySelector(".sidebar-add-task span");
  const addTaskButton = document.querySelector('.add-task-button');
  const editTaskButton = document.getElementsByClassName('task-list-edit-button');
  const deleteTaskButton = document.getElementsByClassName('task-list-delete-button');
  const taskDialog = document.querySelector('#addTaskDialog');
  const taskSubmitButton = document.querySelector('#addTaskDialog .submit-button');
  const taskCancelButton = document.querySelector('#addTaskDialog .cancel-button');
  const taskFormCloseButton = document.querySelector('#addTaskDialog .form-close-button');
  const formTaskName = document.querySelector('#task-name');
  const formTaskDescription = document.querySelector('#task-description');
  const formTaskDueDate = document.querySelector('#task-date');
  const formTaskPriority = document.querySelector('#task-priority');

  // Form text defaults
  const addText = "Add";
  const saveText = "Save";
  const addProjectHeaderText = "Add project";
  const editProjectHeaderText = "Edit project";
  let taskItemIndex;
  let taskItem;
  let projectItem;

  function clearModalTextContents() {
      projectDialog.textContent = '';
      taskDialog.textContent = '';
  }

  // -------------- Projects =======

  function clearProjectFormValues() {
    formProjectName.value = "";
  };

  // Sidebar projects selector
  const sidebarProjectSelectors = document.getElementsByClassName("sidebar-project-list-item");

  // Sidebar projects event listener
  Array.from(sidebarProjectSelectors).forEach((project) => {
    project.addEventListener("click", (e) => {
      projectItemIndex = e.target.closest("li").dataset.index;
      clearModalTextContents();
      initLoader(projectItemIndex);
    })
  });

  // Active project + Active project index selector
  const activeProject = document.querySelector(".sidebar-project-list-item.sidebar-active");
  let activeProjectIndex;
  if (defaultUser.projects.length > 0) {
    activeProjectIndex = activeProject.dataset.index;
  }

  // Sidebar's "+ Add Task" button
  sidebarAddTaskButton.addEventListener("click", () => {
    taskDialog.showModal();
    taskSubmitButton.textContent = addText;
  });

  // Sidebar's "+"" (add project) button
  sidebarAddProjectButton.addEventListener("click", () => {
    projectDialog.showModal();
    projectDialogHeader.textContent = addProjectHeaderText;
    projectSubmitButton.textContent = addText;
  });

  // Edit Project Button
  editProjectButton.addEventListener("click", () => {
    projectDialog.showModal();
    projectDialogHeader.textContent = editProjectHeaderText;
    projectSubmitButton.textContent = saveText;

    // Prefill Form Fields
    projectItem = defaultUser.projects[activeProjectIndex];
    formProjectName.value = projectItem.name;
  });

  // Delete Project Button
  deleteProjectButton.addEventListener("click", (e) => {
    if (confirm(`The "${defaultUser.projects[activeProjectIndex].name}" project and all of its tasks will be permanently deleted.`)) {
      defaultUser.deleteProject(activeProjectIndex);
      // Reload DOM
      clearModalTextContents();
      initLoader(0);
    }
  });

  // Project Form Cancel (x) button
  projectCancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    projectDialog.close();
    clearProjectFormValues();
  });

  // Project form Close button
  projectFormCloseButton.addEventListener("click", (e) => {
    e.preventDefault();
    projectDialog.close();
    clearProjectFormValues();
  });

  // Project form Add/Save button
  projectSubmitButton.addEventListener("click", projectSubmit);

  // Add New or Edit Project Data for user
  function projectSubmit(e) {
    e.preventDefault();
    if (formProjectName.value.length > 0) {
      if (projectSubmitButton.textContent === addText) {
        defaultUser.addNewProject(
          new Project({
            name: formProjectName.value
          })
        );
        // Reload updated DOM and event listeners with new index
        newProjectIndex = defaultUser.projects.length - 1;
        clearModalTextContents();
        initLoader(newProjectIndex);
       
      } else if (projectSubmitButton.textContent === saveText) {
        defaultUser.projects[activeProjectIndex].name = formProjectName.value;
        clearModalTextContents();
        // Reload updated DOM and event listeners with current index
        initLoader(activeProjectIndex);
      }
      

    } else {
      window.alert("Task name is required");
      return false;
    };
    projectDialog.close();
  };

  // ------- Tasks -----

  // Helper function for task form close/cancel buttons
  function clearTaskFormValues() {
    formTaskName.value = "";
    formTaskDescription.value = "";
    formTaskDueDate.value = "";
    formTaskPriority.priority = "";
  };

  // + Add Task button to popup dialog
  addTaskButton.addEventListener("click", (e) => {
    taskDialog.showModal();
    taskSubmitButton.textContent = addText;
    }
  );

  // Edit Task button to popup dialog
  Array.from(editTaskButton).forEach((button) => 
    button.addEventListener("click", (e) => {
      taskDialog.showModal();
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
      taskSubmitButton.textContent = saveText;
    }
  ));

  // Delete Task button confirm
  Array.from(deleteTaskButton).forEach((button) => 
    button.addEventListener("click", (e) => {
      if (confirm("Are you sure you want to delete this task?")) {;
        taskItemIndex = e.target.closest("li").dataset.index;
        defaultUser.projects[activeProjectIndex].deleteTodo(taskItemIndex);
        // Reload DOM
        clearModalTextContents();
        initLoader(activeProjectIndex);
      }
    })
  );

  // Task Form Cancel (x) button
  taskCancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    taskDialog.close();
    clearTaskFormValues();
  });

  // Task form Close button
  taskFormCloseButton.addEventListener("click", (e) => {
    e.preventDefault();
    taskDialog.close();
    clearTaskFormValues();
  });

  // Task form Add/Save button
  taskSubmitButton.addEventListener("click", taskSubmit);

  // Add New or Edit Task Data to User's Project
  function taskSubmit(e) {
    e.preventDefault();

    if (formTaskName.value.length > 0) {
      if (taskSubmitButton.textContent === addText) {
        defaultUser.projects[activeProjectIndex].addTodo(
          TodoFactory ({
            title: formTaskName.value,
            description: formTaskDescription.value,
            dueDate: formTaskDueDate.value,
            priority: formTaskPriority.value
          })
        );
      } else if (taskSubmitButton.textContent === saveText) {
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
      clearModalTextContents();
      initLoader(activeProjectIndex);
    } else {
      window.alert("Task name is required");
      return false;
    };
    taskDialog.close();
  };
}

