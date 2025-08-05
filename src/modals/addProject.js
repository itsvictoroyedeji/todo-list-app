export default function addProjectModal(user) {

  // Get Root dialog element
  const mainDialog = document.querySelector("#addProjectDialog");
  
  // global variable declaration
  const svgNS = "http://www.w3.org/2000/svg";
  const formTitle = "Add project";
  const cancelButtonText = "Cancel";
  const addButtonText = "Add";

  // Add project dialog
  // <div class="form-section">
  const formSection = document.createElement("div");
  formSection.classList.add("form-section");
  mainDialog.appendChild(formSection);
    
  //   <form id="addNewProject" class="form" method="dialog">
  const form = document.createElement("form");
  form.classList.add("form");
  form.id = "addNewProject";
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

  //             Add new project
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

  //         <div class="form-row project-form-name">
  const projectName = document.createElement("div");
  projectName.classList.add("form-row", "project-form-name");
  mainFormContainer.appendChild(projectName);

  //           <label for="project-name">
  const projectNameLabel = document.createElement("label");
  projectNameLabel.setAttribute("for", "project-name");
  projectNameLabel.appendChild(document.createTextNode("Name"));
  projectName.appendChild(projectNameLabel);

  //             Name
  //           </label>
  //           <input type="text" name="name" id="project-name"
  //           placeholder="Submit items by next week"
  //           maxlength="120"
  //           autofocus
  //           required>
  const projectNameInput = document.createElement("input");
  projectNameInput.type = "text";
  projectNameInput.id = "project-name";
  projectNameInput.name = "name";
  projectNameInput.maxLength = 70;
  // projectNameInput.autofocus = true;
  projectNameInput.required = true;
  projectName.appendChild(projectNameInput);

  
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

  if (projectNameInput.value.length > 0) {
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