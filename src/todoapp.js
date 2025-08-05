import "./styles.css";
import ProjectTasks from "./pages/projectTasks";
import ListOfProjects from "./pages/listOfProjects";
import AddTaskModal from "./modals/addTask";
import User from "./interfaces/user";
import Project from "./interfaces/project";
import TodoFactory from "./interfaces/todo-factory";
import SidebarProjects from "./pages/sidebarProjects";
import AddProjectModal from "./modals/addProject";

// Add project tasks on page load
document.addEventListener('DOMContentLoaded',() => {
  const initialProjectIndex = 0;
  initLoader(initialProjectIndex);
});

// No zoom on double-click of buttons
document.addEventListener('dblclick', function(e) {
  e.preventDefault();
});

// GLOBAL initializations 
let defaultUser;
let projectItemIndex;
let newProjectIndex;
const mainContent = document.querySelector("#content");

// Initialize default user name and project
defaultUser = new User({
  projects: [
    new Project({})
  ]
});

// Local Storage setup 
if(!localStorage.getItem("user")) {
  populateStorage();
} else {
  setDefaultUser();
};

function populateStorage() {
  localStorage.setItem('user', JSON.stringify(defaultUser));
  alert(`Hey there! Add your todo's here. Click the "+ Add Task" button to add your tasks.`)
  setDefaultUser();
};

function setDefaultUser() {
  const userData = localStorage.getItem('user');
  if(userData) {
    defaultUser = JSON.parse(userData);

    // add all methods from user class back to user
    Object.setPrototypeOf(defaultUser, User.prototype );
    // console.log("User proto", defaultUser);

    // add all methods from projects class back to projects
    for (let i = 0 ; i < defaultUser.projects.length ; i++) {
      Object.setPrototypeOf(defaultUser.projects[i], Project.prototype );
      // console.log("User + project proto", defaultUser);
    }
  } else {
  console.log("User data not found in local storage");
  }
  console.log("local storage:", defaultUser);
}

// localStorage.clear();

// ------- DEFAULT INIT LOADER -----
// Display Default Project Task + Add Task Modal's HTML + Event Listeners

function initLoader(projectItemIndex) {
  if (defaultUser.projects.length > 0) {
    mainContent.classList.remove("no-projects");
    SidebarProjects(defaultUser, projectItemIndex);
    ProjectTasks(defaultUser, projectItemIndex);
    AddProjectModal(defaultUser);
    AddTaskModal(defaultUser, projectItemIndex);
    attachEventListeners();

  } else {
    mainContent.textContent = "";
    SidebarProjects(defaultUser, projectItemIndex);
    ProjectTasks(defaultUser, projectItemIndex);
    AddProjectModal(defaultUser);
    AddTaskModal(defaultUser);
    
    // Show +Add Projects button on main page if no projects
    mainContent.classList.add("no-projects");
    const addProjectButton = document.createElement("button");
    addProjectButton.setAttribute("type", "button");
    addProjectButton.classList.add("add-project-button", "buttonish-elem");
    addProjectButton.appendChild(document.createTextNode('+ Add New Project')); // + Add Project button
    mainContent.appendChild(addProjectButton);

    attachEventListeners();
  }
  
  console.log(defaultUser);
};

export function attachEventListeners() {
  // Change sidebar's title (activate on a later day)
  // const sidebarTitle = document.querySelector(".sidebar-username span");
  // sidebarTitle.textContent = `${defaultUser.name}'s Tasks`;

  // Add Project form event listeners
  const sidebarAddProjectButton = document.querySelector(".sidebar-projects-add button");
  const emptyProjectPageAddProjectButton = document.querySelector("#content.no-projects button");
  
  const editProjectButton = document.querySelector('.edit-project-button');
  const deleteProjectButton = document.querySelector('.delete-project-button');
  const projectDialog = document.querySelector('#addProjectDialog');
  const projectDialogHeader = document.querySelector('#addProjectDialog .form-header-text');
  const formProjectName = document.querySelector('#project-name');
  const projectSubmitButton = document.querySelector('#addProjectDialog .submit-button');
  const projectCancelButton = document.querySelector('#addProjectDialog .cancel-button');
  const projectFormCloseButton = document.querySelector('#addProjectDialog .form-close-button');

  // Add Task form event listeners
  const sidebarAddTaskButton = document.querySelector(".sidebar-add-task button");
  const taskItemContent = document.getElementsByClassName("task-item-content");
  const addTaskButton = document.querySelector('.add-task-button');
  const editTaskButton = document.getElementsByClassName('task-list-edit-button');
  const deleteTaskButton = document.getElementsByClassName('task-list-delete-button');
  const checkedTask = document.getElementsByClassName('task-checkbox');
  const taskDialog = document.querySelector('#addTaskDialog');
  const taskDialogHeader = document.querySelector('#addTaskDialog .form-header-text');
  const taskSubmitButton = document.querySelector('#addTaskDialog .submit-button');
  const taskCancelButton = document.querySelector('#addTaskDialog .cancel-button');
  const taskFormCloseButton = document.querySelector('#addTaskDialog .form-close-button');
  const formTaskName = document.querySelector('#task-name');
  const formTaskDescription = document.querySelector('#task-description');
  const formTaskDueDate = document.querySelector('#task-date');
  const formTaskPriority = document.querySelector('#task-priority');
  const formTaskProject = document.querySelector('#task-project');

  // Form text defaults
  const addText = "Add";
  const saveText = "Save";
  const addProjectHeaderText = "Add project";
  const editProjectHeaderText = "Edit project";
  const addTaskHeaderText = "Add new task";
  const editTaskHeaderText = "Edit task";
  let taskItemIndex;
  let taskItem;
  let projectItem;

  function clearModalTextContents() {
      projectDialog.textContent = '';
      taskDialog.textContent = '';
  }

  // Get Active project + Get Active project index selector
  const activeProject = document.querySelector(".sidebar-project-list-item.sidebar-active");

  let activeProjectIndex;
  if (defaultUser.projects.length > 0 ) {
    activeProjectIndex = activeProject.dataset.index;
  }


  // -------------- Projects page ----

  // "My projects" on sidebar goes to projects page
  const sidebarMyProjectsButton = document.querySelector(".sidebar-projects-list-header-flexbox > a");

  if (defaultUser.projects.length == 0) {
    sidebarMyProjectsButton.style.pointerEvents = "none";
  } else {
    sidebarMyProjectsButton.style.pointerEvents = "initial";
    sidebarMyProjectsButton.disabled = false;
    sidebarMyProjectsButton.addEventListener("click", projectPageEventListeners);
  }

  // Show projects page when "My Projects" breadcrumb on top is clicked
  if (defaultUser.projects.length > 0) {
    const myProjectsBreadcrumb = document.querySelector(".my-projects-breadcrumb");
    myProjectsBreadcrumb.addEventListener("click", projectPageEventListeners);
  }

  function projectPageEventListeners() {
    mainContent.textContent = '';
    ListOfProjects(defaultUser);

    // Remove highlight on sidebar's projects
    const sidebarProjectsListItems = document.getElementsByClassName("sidebar-project-list-item");

    Array.from(sidebarProjectsListItems).forEach(project => {
      project.classList.remove("sidebar-active");
    });

    // Project Page items declarations
    const projectPageItem = document.getElementsByClassName("project-page-project-item");
    const projectPageEditButton = document.getElementsByClassName('project-page-list-edit-button');
    const projectPageDeleteButton = document.getElementsByClassName('project-page-list-delete-button');
    const projectPageAddProjectButton = document.querySelector(".add-project-button");
   

    if (defaultUser.projects.length > 0) {

      // Clicks to correct project page
      Array.from(projectPageItem).forEach(project => {
        project.addEventListener("click", (e) => {
          mainContent.textContent = '';
          clearModalTextContents();
          initLoader(e.target.closest("li").dataset.index);
        })
      });

      // Project Page Edit Project button
      Array.from(projectPageEditButton).forEach(project => {
        project.addEventListener("click", (e) => {
          const selectedProjectIndex = e.target.closest("li").dataset.index;

          projectDialog.showModal();
          projectDialogHeader.textContent = editProjectHeaderText;
          projectSubmitButton.textContent = saveText;

          // Prefill Form Fields
          projectItem = defaultUser.projects[selectedProjectIndex];
          formProjectName.value = projectItem.name;
        })
      });

      // Project Page Delete Project button
      Array.from(projectPageDeleteButton).forEach(project => {
        project.addEventListener("click", (e) => {
          const selectedProjectIndex = e.target.closest("li").dataset.index;

          if (confirm(`The "${defaultUser.projects[selectedProjectIndex].name}" project and all of its tasks will be permanently deleted.`)) {
            defaultUser.deleteProject(selectedProjectIndex);
            // Reload DOM
            clearModalTextContents();
            populateStorage(); // => Update local storage
            mainContent.textContent = "";
            initLoader(0);
          }
        })
      });
    };

    // Product page's +Add Project button
    projectPageAddProjectButton.addEventListener("click", () => {
      projectDialog.showModal();
      projectDialogHeader.textContent = addProjectHeaderText;
      projectSubmitButton.textContent = addText;
    });
  }

  // -------------- Project =======

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

  // Sidebar's "+ Add Task" button
  if (defaultUser.projects.length == 0) {
    sidebarAddTaskButton.disabled = true;
  } else {
    sidebarAddTaskButton.disabled = false;
    sidebarAddTaskButton.addEventListener("click", () => {
      taskDialog.showModal();
      taskSubmitButton.textContent = addText;
    });
  }
  
  // Sidebar's "+"" (add project) button
  sidebarAddProjectButton.addEventListener("click", () => {
    projectDialog.showModal();
    projectDialogHeader.textContent = addProjectHeaderText;
    projectSubmitButton.textContent = addText;
  });

  // + Add Project button if there are no projects
  if (defaultUser.projects.length === 0) {
    emptyProjectPageAddProjectButton.addEventListener("click", () => {
      projectDialog.showModal();
      projectDialogHeader.textContent = addProjectHeaderText;
      projectSubmitButton.textContent = addText;
    });
  }

  if (defaultUser.projects.length > 0) {
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
        populateStorage(); // => Update local storage
        initLoader(0);
      }
    });
  }

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
      
      let duplicate;

      // Add a new project
      if (projectSubmitButton.textContent === addText) {
        // Check if there's a duplicate project name
        for (let i = 0; i < defaultUser.projects.length ; i++) {
          if (defaultUser.projects[i].name === formProjectName.value) {
            window.alert("Duplicate project name. Please choose another one.");
            duplicate = true
            break;
          } else {
            duplicate = false;
          }
        };
        if (duplicate) {
          return false;
        } else {
          defaultUser.addNewProject(
            new Project({
              name: formProjectName.value
            })
          );
          // Reload updated DOM and event listeners with new index
          newProjectIndex = defaultUser.projects.length - 1;
          clearModalTextContents();
          populateStorage(); // => Update local storage
          initLoader(newProjectIndex);
        }
      // Edit an existing project 
      } else if (projectSubmitButton.textContent === saveText) {
        // Check if there's a duplicate project name
        for (let i = 0; i < defaultUser.projects.length ; i++) {
          if (defaultUser.projects[i].name === formProjectName.value) {
            duplicate = true
            break;
          } else {
            duplicate = false;
          }
        };
        if (duplicate) {
          if (defaultUser.projects[activeProjectIndex].name !== formProjectName.value) {
            window.alert("Another project has this name. Please choose another one.");
            return false;
          }
        } else {
          defaultUser.projects[activeProjectIndex].name = formProjectName.value;
          clearModalTextContents();
          populateStorage(); // => Update local storage
          // Reload updated DOM and event listeners with current index
          initLoader(activeProjectIndex);
        }
      }
    } else {
      window.alert("Project name is required");
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

  if (defaultUser.projects.length > 0) {
    // + Add Task button to popup dialog
    addTaskButton.addEventListener("click", (e) => {
      taskDialog.showModal();
      taskDialogHeader.textContent = addTaskHeaderText;
      taskSubmitButton.textContent = addText;
      }
    );
  }

  // Edit Task popup dialog when task is clicked
  Array.from(taskItemContent).forEach(task => 
    task.addEventListener("click", editTaskFunction
  ));

  // Edit Task button to popup dialog
  Array.from(editTaskButton).forEach((button) => 
    button.addEventListener("click", editTaskFunction
  ));

  function editTaskFunction(e) {
    taskDialog.showModal();
    taskDialogHeader.textContent = editTaskHeaderText;
    taskItemIndex = e.target.closest("li").dataset.index;
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
  };

  // Delete Task button confirm
  Array.from(deleteTaskButton).forEach((button) => 
    button.addEventListener("click", (e) => {
      if (confirm("Are you sure you want to delete this task?")) {;
        taskItemIndex = e.target.closest("li").dataset.index;
        defaultUser.projects[activeProjectIndex].deleteTodo(taskItemIndex);
        // Reload DOM
        clearModalTextContents();
        populateStorage(); // => Update local storage
        initLoader(activeProjectIndex);
      }
    })
  );

  Array.from(checkedTask).forEach((button) =>
    button.addEventListener("click", (e) => {
      taskItemIndex = e.target.closest("li").dataset.index;
      defaultUser.projects[activeProjectIndex].todos[taskItemIndex].complete = true;
      e.target.closest("li").style.opacity = 0;
      defaultUser.projects[activeProjectIndex].deleteTodo(taskItemIndex);
      // Reload DOM
      clearModalTextContents();
      initLoader(activeProjectIndex);
    })
  )

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

    let formTaskProjectIndex;

    if (formTaskName.value.length > 0) {
      // Get index of selected project in form
      formTaskProjectIndex = defaultUser.projects.findIndex(item => 
                                      item.name === formTaskProject.value);

      // Save task dialog
      if (taskSubmitButton.textContent === addText) {
        defaultUser.projects[formTaskProjectIndex].addTodo(
          TodoFactory ({
            title: formTaskName.value,
            description: formTaskDescription.value,
            dueDate: formTaskDueDate.value,
            priority: formTaskPriority.value
          })
        );
      // Edit Task dialog
      } else if (taskSubmitButton.textContent === saveText) {
        // If the "Project" value submitted is different from the current project
        if (formTaskProject.value !== defaultUser.projects[activeProjectIndex].name) {
          defaultUser.projects[activeProjectIndex].deleteTodo(taskItemIndex);
          defaultUser.projects[formTaskProjectIndex].addTodo(
            TodoFactory ({
              title: formTaskName.value,
              description: formTaskDescription.value,
              dueDate: formTaskDueDate.value,
              priority: formTaskPriority.value
            })
          )
        } else {
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
      }
      // Reload updated DOM and event listeners 
      clearModalTextContents();
      populateStorage(); // => Update local storage
      initLoader(formTaskProjectIndex);
    } else {
      window.alert("Task name is required");
      return false;
    };
    taskDialog.close();
  };
}

