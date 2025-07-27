export default function addTaskModal(user) {

  // Get Root dialog element
  const mainDialog = document.querySelector("#addTaskDialog");
  
  // global variable declaration
  const svgNS = "http://www.w3.org/2000/svg";
  const formTitle = "Add new task";
  const cancelButtonText = "Cancel";
  const addButtonText = "Add";
  const saveButtonText = "Save";

  // Add task dialog
  // <div class="form-section">
  const formSection = document.createElement("div");
  formSection.classList.add("form-section");
  mainDialog.appendChild(formSection);
    
  //   <form id="addNewTask" class="form" method="dialog">
  const form = document.createElement("form");
  form.classList.add("form");
  form.id = "addNewTask";
  formSection.appendChild(form);

  //     <header class="form-header">
  const formHeader = document.createElement("header");
  formHeader.classList.add("form-header");
  form.appendChild(formHeader);

  //       <div class="form-header-flex">
  const formHeaderFlex = document.createElement("div");
  formHeaderFlex.classList.add("form-header-flex");
  formHeader.appendChild(formHeaderFlex);

  //         <div class="form-header-title-container">
  const formHeaderTitle = document.createElement("div");
  formHeaderTitle.classList.add("form-header-title-container");
  formHeaderFlex.appendChild(formHeaderTitle);

  //           <h1 class="form-header-text">
  const formHeaderText = document.createElement("h1");
  formHeaderText.classList.add("form-header-text");
  formHeaderText.appendChild(document.createTextNode(formTitle));
  formHeaderTitle.appendChild(formHeaderText);

  //             Add new task
  //           </h1>
  //         </div>
  //         <div class="form-close-container">
  const formCloseContainer = document.createElement("div");
  formCloseContainer.classList.add("form-close-container");
  formHeaderFlex.appendChild(formCloseContainer);

  //           <button class="form-close-button buttonish-elem" type="button" tabindex="0">
  const formCloseButton = document.createElement("button");
  formCloseButton.classList.add("form-close-button", "buttonish-elem");
  formCloseButton.setAttribute("type", "button");
  formCloseButton.setAttribute("tabindex", "0");
  formCloseContainer.appendChild(formCloseButton);

  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
  const formCloseButtonSVG = document.createElementNS(svgNS, "svg");
  formCloseButtonSVG.setAttribute("width", "24");
  formCloseButtonSVG.setAttribute("height", "24");
  formCloseButton.appendChild(formCloseButtonSVG);

                  // <path fill="currentColor" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>
  const formCloseButtonSVGPath = document.createElementNS(svgNS, "path");
  formCloseButtonSVGPath.setAttribute("fill", "currentColor");
  formCloseButtonSVGPath.setAttribute("d", "M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z");
  formCloseButtonSVG.appendChild(formCloseButtonSVGPath);

  //           </button>
  //         </div>
  //       </div>
  //     </header>
  //     <hr class="form-header-line">
  const formHeaderLine = document.createElement("hr");
  formHeaderLine.classList.add("form-header-line");
  form.appendChild(formHeaderLine);

  //     <div class="main-form">
  const mainForm = document.createElement("div");
  mainForm.classList.add("main-form");
  form.appendChild(mainForm);

  //       <div class="main-form-container-flex">
  const mainFormContainer = document.createElement("div");
  mainFormContainer.classList.add("main-form-container-flex");
  mainForm.appendChild(mainFormContainer);

  //         <div class="form-row task-form-name">
  const taskName = document.createElement("div");
  taskName.classList.add("form-row", "task-form-name");
  mainFormContainer.appendChild(taskName);

  //           <label for="task-name">
  const taskNameLabel = document.createElement("label");
  taskNameLabel.setAttribute("for", "task-name");
  taskNameLabel.appendChild(document.createTextNode("Name"));
  taskName.appendChild(taskNameLabel);

  //             Name
  //           </label>
  //           <input type="text" name="name" id="task-name"
  //           placeholder="Submit items by next week"
  //           maxlength="120"
  //           autofocus
  //           required>
  const taskNameInput = document.createElement("input");
  taskNameInput.type = "text";
  taskNameInput.id = "task-name";
  taskNameInput.name = "name";
  taskNameInput.placeholder = "Submit items by next week";
  taskNameInput.maxLength = 120;
  taskNameInput.autofocus = true;
  taskNameInput.required = true;
  taskName.appendChild(taskNameInput);

  //         </div>
  //         <div class="form-row task-form-description">
  const taskDescription = document.createElement("div");
  taskDescription.classList.add("form-row", "task-form-description");
  mainFormContainer.appendChild(taskDescription);

  //           <label for="task-description">
  const taskDescriptionLabel = document.createElement("label");
  taskDescriptionLabel.setAttribute("for", "task-description");
  taskDescriptionLabel.appendChild(document.createTextNode("Description"));
  taskDescription.appendChild(taskDescriptionLabel);
  //             Description
  //           </label>
  //           <input type="text" name="description" id="task-description"
  //           max-length="240"
  //           autofocus>
  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.type = "text";
  taskDescriptionInput.id = "task-description";
  taskDescriptionInput.name = "description";
  taskDescriptionInput.maxLength = 240;
  taskDescriptionInput.autofocus = true;
  taskDescription.appendChild(taskDescriptionInput);

  //         </div>
  //         <div class="form-row task-form-date">
  const taskDate = document.createElement("div");
  taskDate.classList.add("form-row", "task-form-date");
  mainFormContainer.appendChild(taskDate);

  //           <label for="task-date">
  const taskDateLabel = document.createElement("label");
  taskDateLabel.setAttribute("for", "task-date");
  taskDateLabel.appendChild(document.createTextNode("Date"));
  taskDate.appendChild(taskDateLabel);
  //             Date
  //           </label>
  //           <input type="date" name="task-date" id="task-date"
  //           value="2025-07-08"
  //           min="2023-01-01"
  //           max="2025-12-31"
  //           autofocus>
  const taskDatePicker = document.createElement("input");
  taskDatePicker.type = "date";
  taskDatePicker.id = "task-date";
  taskDatePicker.name = "date";
  // const todaysDate = new Date();
  // taskDatePicker.value = todaysDate.toLocaleDateString();
  taskDatePicker.min = "2023/01/01";
  taskDatePicker.max = "2026/12/31";
  taskDatePicker.autofocus = true;
  taskDate.appendChild(taskDatePicker);

  //         </div>
  //         <div class="form-row task-form-priority">
  const taskPriority = document.createElement("div");
  taskPriority.classList.add("form-row", "task-form-priority");
  mainFormContainer.appendChild(taskPriority);

  //           <label for="task-priority">
  const taskPriorityLabel = document.createElement("label");
  taskPriorityLabel.setAttribute("for", "task-priority");
  taskPriorityLabel.appendChild(document.createTextNode("Priority"));
  taskPriority.appendChild(taskPriorityLabel);

  //             Priority
  //           </label>
  //           <select
  //           name="task-priority" id="task-priority"
  //           autofocus>
  const taskPrioritySelect = document.createElement("select");
  taskPrioritySelect.id = "task-priority";
  taskPrioritySelect.name = "task-priority";
  taskPrioritySelect.autofocus = true;

  //             <option value="">Select a priority</option>
  //             <option value="priority 1">
  //               Priority 1
  //             </option>
  //             <option value="priority 2">
  //               Priority 2
  //             </option>
  //             <option value="priority 3">
  //               Priority 3
  //             </option>
  //             <option value="priority 4">
  //               Priority 4
  //             </option>

  const priorities = [
    "Select a priority",
    "Priority 1",
    "Priority 2",
    "Priority 3",
    "Priority 4"
  ];

  for (let priority of priorities) {
    const priorityOption = document.createElement("option");
    priorityOption.value = priority;
    if (priorityOption.value == "Select a priority") {
      priorityOption.value = "";
    }
    priorityOption.appendChild(document.createTextNode(priority));
    taskPrioritySelect.appendChild(priorityOption);
  }

  taskPrioritySelect.addEventListener("change", priorityChange);

  function priorityChange(e) {
    if (taskPrioritySelect.value === "Priority 1") {
      taskPrioritySelect.style.borderColor = "red";
    } else if (taskPrioritySelect.value === "Priority 2") {
      taskPrioritySelect.style.borderColor = "green";
    } else if (taskPrioritySelect.value === "Priority 3") {
      taskPrioritySelect.style.borderColor = "blue";
    } else if (taskPrioritySelect.value === "Priority 4") {
      taskPrioritySelect.style.borderColor = "#e6e6e6";
    }
  }

  taskPriority.appendChild(taskPrioritySelect);
  //           </select>
  //         </div>

  //         <div class="form-row task-form-project">
  const taskProject = document.createElement("div");
  taskProject.classList.add("form-row", "task-form-project");
  mainFormContainer.appendChild(taskProject);

  //           <label for="task-project">
  const taskProjectLabel = document.createElement("label");
  taskProjectLabel.setAttribute("for", "task-project");
  taskProjectLabel.appendChild(document.createTextNode("Project"));
  taskProject.appendChild(taskProjectLabel);

  //             Project
  //           </label>
  //           <select
  //           name="task-project" id="task-project"
  //           autofocus>
  //             <option value="(current project)">(current project)</option>
  //           </select>
  const taskProjectSelect = document.createElement("select");
  taskProjectSelect.id = "task-project";
  taskProjectSelect.name = "task-project";
  taskProjectSelect.autofocus = true;
 
  const userProjects = user.projects;
  console.log(userProjects)

  for (let i = 0 ; i < userProjects.length ; i++) {
    const projectOption = document.createElement("option");
    projectOption.value = userProjects[i].name;
    projectOption.appendChild(document.createTextNode(userProjects[i].name));
    taskProjectSelect.appendChild(projectOption);
  }

  taskProject.appendChild(taskProjectSelect);

  //         </div>
  //       </div>
  //     </div>
  //     <div class="form-buttons-container">
  const formButtonsContainer = document.createElement("div");
  formButtonsContainer.classList.add("form-buttons-container");
  mainForm.appendChild(formButtonsContainer);

  //       <hr class="form-buttons-line">
  const formButtonsLine = document.createElement("hr");
  formButtonsLine.classList.add("form-buttons-line");
  formButtonsContainer.appendChild(formButtonsLine);

  //       <footer class="form-buttons-flex">
  const footerFormButtons = document.createElement("footer");
  footerFormButtons.classList.add("form-buttons-flex");
  formButtonsLine.appendChild(footerFormButtons);

  //         <div class="form-buttons-flex-2">
  const footerFormButtons2 = document.createElement("div");
  footerFormButtons2.classList.add("form-buttons-flex-2");
  footerFormButtons.appendChild(footerFormButtons2);

  //           <button type="button" class="button cancel-button buttonish-elem" value="cancel" formmethod="dialog" formnovalidate>
  //             Cancel
  //           </button>
  const cancelButton = document.createElement("button");
  cancelButton.classList.add("button", "cancel-button", "buttonish-elem");
  cancelButton.setAttribute("type", "button");
  cancelButton.value = "cancel";
  cancelButton.formMethod = "dialog";
  cancelButton.formNoValidate = true;
  cancelButton.appendChild(document.createTextNode(cancelButtonText));
  footerFormButtons2.appendChild(cancelButton);

  //           <button type="submit" class="button submit-button buttonish-elem">
  const submitButton = document.createElement("button");
  submitButton.classList.add("button", "submit-button", "buttonish-elem");
  submitButton.setAttribute("type", "submit");

  if (taskNameInput.value.length > 0) {
    submitButton.appendChild(document.createTextNode(editButtonText));
  } else {
    submitButton.appendChild(document.createTextNode(addButtonText));
  }
  
  footerFormButtons2.appendChild(submitButton);

  //             Add
  //           </button>
  //         </div>
  //       </footer>
  //     </div>
  //   </form>
  // </div>          
  // // End dialog
}