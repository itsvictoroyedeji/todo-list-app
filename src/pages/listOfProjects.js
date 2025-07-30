export default function listOfProjects(user) {
  if (user.projects.length > 0) {
    
    // <main id="content" tabindex="-1"> - The root element that doesn't change
    const mainContent = document.querySelector("#content");
    // mainContent.textContent = "";

    // global variable declaration
    const svgNS = "http://www.w3.org/2000/svg";
    const myProjectsHeaderText = "My Projects";
    const editProjectText = "Edit";
    const deleteProjectText = "Delete";
    const addProjectText = "+ Add Project";

    // <div class="my-project-view-container">
    const myProjectsContainer = document.createElement("div");
    myProjectsContainer.classList.add("my-project-view-container");
    mainContent.appendChild(myProjectsContainer);

    //    <div class="my-project-view-container-2">
    const myProjectsContainer2 = document.createElement("div");
    myProjectsContainer2.classList.add("my-project-view-container-2");
    myProjectsContainer.appendChild(myProjectsContainer2);

    //      <div class="my-project-view-container-3">
    const myProjectsContainer3 = document.createElement("div");
    myProjectsContainer3.classList.add("my-project-view-container-3");
    myProjectsContainer2.appendChild(myProjectsContainer3);

            // <div class="my-project-view">
    const myProjectsView = document.createElement("div");
    myProjectsView.classList.add("my-project-view");
    myProjectsContainer3.appendChild(myProjectsView);

    //           <div class="projects-container-header">
    const myProjectsHeader = document.createElement("div");
    myProjectsHeader.classList.add("projects-container-header");
    myProjectsView.appendChild(myProjectsHeader);

    //             <div class="projects-breadcrumbs">
    const projectsBreadcrumbs = document.createElement("div");
    projectsBreadcrumbs.classList.add("projects-breadcrumbs");
    myProjectsHeader.appendChild(projectsBreadcrumbs);

    //             <div class="projects-menu-items">
    const projectsMenuItems = document.createElement("div");
    projectsMenuItems.classList.add("projects-menu-items");
    myProjectsHeader.appendChild(projectsMenuItems);

    //           <div class="large-header-container">
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("large-header-container");
    myProjectsView.appendChild(headerContainer);

    //             <div class="large-header-container-2">
    const headerContainer2 = document.createElement("div");
    headerContainer2.classList.add("large-header-container-2");
    headerContainer.appendChild(headerContainer2);

    //               <h1 class="large-header-text">Default Project</h1>
    const headerContainerText = document.createElement("h1");
    headerContainerText.classList.add("large-header-text");
    headerContainerText.appendChild(document.createTextNode(myProjectsHeaderText));
    headerContainer2.appendChild(headerContainerText);
                
    //           </div>
    //           <div class="project-page-list-header-container">
    const listCounterHeaderContainer = document.createElement("div");
    listCounterHeaderContainer.classList.add("project-page-list-header-container");
    myProjectsView.appendChild(listCounterHeaderContainer);

    //             <div class="projects-page-list-blank-space"></div>
    const listCounterHeaderSpace = document.createElement("div");
    listCounterHeaderSpace.classList.add("projects-page-list-blank-space");
    listCounterHeaderContainer.appendChild(listCounterHeaderSpace);

    //             <div class="projects-page-list-header">
    const listCounterHeader = document.createElement("div");
    listCounterHeader.classList.add("projects-page-list-header");
    listCounterHeaderContainer.appendChild(listCounterHeader);

    //               <div class="projects-page-list-header-flex">
    const listCounterHeaderFlex = document.createElement("div");
    listCounterHeaderFlex.classList.add("projects-page-list-header-flex");
    listCounterHeader.appendChild(listCounterHeaderFlex);

    //                 <div class="projects-page-list-counter">
    const listCounterContainer = document.createElement("div");
    listCounterContainer.classList.add("projects-page-list-counter");
    listCounterHeaderFlex.appendChild(listCounterContainer);

    //                   <div class="projects-list-counter-text">
    const listCounterText = document.createElement("div");
    listCounterText.classList.add("projects-list-counter-text");
    let projectsText;
    user.projects.length === 1 ? 
      projectsText = "project" :
      projectsText = "projects" ;
    listCounterText.appendChild(document.createTextNode(`${user.projects.length} ${projectsText}`)); // Number of projects for user
    listCounterContainer.appendChild(listCounterText);

    //                     3 projects
    //                   </div>
    //                 </div>
    //                 <div class="project-page-add-project-button-container">
    const addProjectButtonContainer = document.createElement("div");
    addProjectButtonContainer.classList.add("project-page-add-project-button-container");
    listCounterHeaderFlex.appendChild(addProjectButtonContainer);

    //                   <button type="button" class="add-project-button buttonish-elem" >
    const addProjectButton = document.createElement("button");
    addProjectButton.setAttribute("type", "button");
    addProjectButton.classList.add("add-project-button", "buttonish-elem");
    addProjectButton.appendChild(document.createTextNode(addProjectText)); // + Add Project button
    addProjectButtonContainer.appendChild(addProjectButton);

    //                     + Add Project
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="project-page-list-of-projects-container">
    const listOfProjectsContainer = document.createElement("div");
    listOfProjectsContainer.classList.add("project-page-list-of-projects-container");
    myProjectsView.appendChild(listOfProjectsContainer);

    //             <ul class="project-page-projects-ul" tabindex="0">
    const listOfProjectsUl = document.createElement("ul");
    listOfProjectsUl.classList.add("project-page-projects-ul");
    listOfProjectsUl.setAttribute("tabindex", "0");
    listOfProjectsContainer.appendChild(listOfProjectsUl);

    const userProjects = user.projects;
    

    //               <!-- List of projects -->
    for (let i = 0 ; i < userProjects.length ; i++) {

    //                 <li class="project-page-project-li" data-index="0">
    const eachProjectLi = document.createElement("li");
    eachProjectLi.classList.add("project-page-project-li");
    eachProjectLi.dataset.index = i;
    listOfProjectsUl.appendChild(eachProjectLi);
    
    //                   <div class="project-page-project-flex">
    const eachProjectFlex = document.createElement("div");
    eachProjectFlex.classList.add("project-page-project-flex");
    eachProjectLi.appendChild(eachProjectFlex);

    //                     <a href="#" class="project-page-project-item">
    const eachProjectItem = document.createElement("a");
    eachProjectItem.setAttribute("href", "javascript:void(0)");
    eachProjectItem.classList.add("project-page-project-item");
    eachProjectFlex.appendChild(eachProjectItem);

    //                       <div class="project-page-project-item-div">
    const eachProjectItemDIV = document.createElement("div");
    eachProjectItemDIV.classList.add("project-page-project-item-div");
    eachProjectItem.appendChild(eachProjectItemDIV);

    //                         <div class="project-page-project-item-text">
    const eachProjectItemText = document.createElement("div");
    eachProjectItemText.classList.add("project-page-project-item-text");
    eachProjectItemText.appendChild(document.createTextNode(userProjects[i].name));
    eachProjectItemDIV.appendChild(eachProjectItemText);
    //                           Home
    //                         </div>
    //                         <div class="project-page-project-item-space"></div>
    const eachProjectItemSpace = document.createElement("div");
    eachProjectItemSpace.classList.add("project-page-project-item-space");
    eachProjectItemDIV.appendChild(eachProjectItemSpace);

    //                       </div>
    //                     </a>
    //                     <div class="project-page-list-actions-container">
    const eachProjectItemActionsContainer = document.createElement("div");
    eachProjectItemActionsContainer.classList.add("project-page-list-actions-container");
    eachProjectFlex.appendChild(eachProjectItemActionsContainer);


    //                       <button class="project-page-list-edit-button buttonish-elem" type="button">Edit</button>
    const editProjectButton = document.createElement("button");
    editProjectButton.setAttribute("type", "button");
    editProjectButton.classList.add("project-page-list-edit-button", "buttonish-elem");
    editProjectButton.appendChild(document.createTextNode(editProjectText)); // Edit text
    eachProjectItemActionsContainer.appendChild(editProjectButton);

    //                       <button class="project-page-list-delete-button buttonish-elem" type="button">Delete</button>
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.setAttribute("type", "button");
    deleteProjectButton.classList.add("project-page-list-delete-button", "buttonish-elem");
    deleteProjectButton.appendChild(document.createTextNode(deleteProjectText)); // Delete text
    eachProjectItemActionsContainer.appendChild(deleteProjectButton);
    //                     </div>
    //                   </div>
    //                 </li>

    }
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </main>


  }
}