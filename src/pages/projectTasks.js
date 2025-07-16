import addTaskDialog from "../modals/addTask"

// Shows Project Task page
export default function ProjectTasks() {
  // <main id="content" tabindex="-1"> - The root element that doesn't change
  const mainContent = document.querySelector("#content");
  //   <div class="my-project-view-container">
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

  //               <a href="" class="my-projects-breadcrumb buttonish-elem">
  const myProjectBreadcrumb = document.createElement("a");
  myProjectBreadcrumb.setAttribute("href", "#");
  myProjectBreadcrumb.classList.add("my-projects-breadcrumb", "buttonish-elem");
  projectsBreadcrumbs.appendChild(myProjectBreadcrumb);

  //                 <span>My Projects</span>
  const myProjectBreadcrumbSpan = document.createElement("span");
  const projectsBreadcrumbText = "My Projects";
  myProjectBreadcrumbSpan.appendChild(document.createTextNode(projectsBreadcrumbText));
  myProjectBreadcrumb.appendChild(myProjectBreadcrumbSpan);

  //               </a>
  //               <div class="my-projects-slash">/</div>
  const myProjectsSlash = document.createElement("div");
  myProjectsSlash.classList.add("my-projects-slash");
  myProjectsSlash.appendChild(document.createTextNode("/"));
  projectsBreadcrumbs.appendChild(myProjectsSlash);

  //             </div>
  //             <div class="projects-menu-items">
  const projectsMenuItems = document.createElement("div");
  projectsMenuItems.classList.add("projects-menu-items");
  myProjectsHeader.appendChild(projectsMenuItems);

  //               <button type="button" class="edit-project-button buttonish-elem">
  const editProjectButton = document.createElement("button");
  editProjectButton.setAttribute("type", "button");
  editProjectButton.classList.add("edit-project-button", "buttonish-elem");
  projectsMenuItems.appendChild(editProjectButton);

  //                 <span>Edit Project</span>
  const editProjectSpan = document.createElement("span");
  const editProjectSpanText = "Edit Project";
  editProjectSpan.appendChild(document.createTextNode(editProjectSpanText));
  editProjectButton.appendChild(editProjectSpan);
  
  //               </button>
  //               <button type="button" class="delete-project-button buttonish-elem">
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.setAttribute("type", "button");
  deleteProjectButton.classList.add("delete-project-button", "buttonish-elem");
  projectsMenuItems.appendChild(deleteProjectButton);

  //                 <span>Delete Project</span>
  const deleteProjectSpan = document.createElement("span");
  const deleteProjectSpanText = "Delete Project";
  deleteProjectSpan.appendChild(document.createTextNode(deleteProjectSpanText));
  deleteProjectButton.appendChild(deleteProjectSpan);
  //               </button>
  //             </div>
  //           </div>
  
  //           <div class="large-header-container">
  //             <div class="large-header-container-2">
  //               <h1 class="large-header-text">Default Project</h1>
  //             </div>
  //           </div>
  //           <div class="project-list-view-container" data-empty-view="false">
  //             <div class="section-list">
  //               <ul class="project-list-view">
  //                 <li class="project-tasks">
  //                   <div class="list-holder">
  //                     <ul class="project-items-container">
  //                       <!-- Each project item -->
  //                       <li class="project-item" data-index="0">
  //                         <div class="proj-item-container">
  //                           <div class="proj-item-container-flex">
  //                             <div class="task-blank-space"></div>
  //                             <button class="task-checkbox buttonish-elem-2" type="button">
  //                               <span class="button-background"></span>
  //                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="tb7nk6f">
  //                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5056 9.00958C16.2128 8.71668 15.7379 8.71668 15.445 9.00958L10.6715 13.7831L8.72649 11.8381C8.43359 11.5452 7.95872 11.5452 7.66583 11.8381C7.37294 12.1309 7.37293 12.6058 7.66583 12.8987L10.1407 15.3736C10.297 15.5299 10.5051 15.6028 10.7097 15.5923C10.8889 15.5833 11.0655 15.5104 11.2023 15.3735L16.5056 10.0702C16.7985 9.77735 16.7985 9.30247 16.5056 9.00958Z" fill="currentColor">
  //                                 </path>
  //                               </svg>
  //                               <span class="button-border"></span>
  //                             </button>
  //                             <div class="task-item-content">
  //                               <div class="task-item-wrapper">
  //                                 <div class="task-content">
  //                                   Do a review of something inside here
  //                                 </div>
  //                                 <div class="task-description">
  //                                   <p>
  //                                     Item description once again. Hopefully this works.
  //                                   </p>
  //                                 </div>
  //                               </div>
  //                               <div class="task-date-container buttonish-elem-2">
  //                                 <span class="date-icon">
  //                                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" fill-rule="evenodd" d="M9.5 1h-7A1.5 1.5 0 0 0 1 2.5v7A1.5 1.5 0 0 0 2.5 11h7A1.5 1.5 0 0 0 11 9.5v-7A1.5 1.5 0 0 0 9.5 1M2 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM8.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M3.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path>
  //                                   <path fill="currentColor" fill-rule="evenodd" d="M9.5 1h-7A1.5 1.5 0 0 0 1 2.5v7A1.5 1.5 0 0 0 2.5 11h7A1.5 1.5 0 0 0 11 9.5v-7A1.5 1.5 0 0 0 9.5 1M2 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM8.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M3.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>
  //                                   <span class="date">
  //                                     Today
  //                                   </span>
  //                                 </span>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                         <div class="task-list-actions-container">
  //                           <button class="task-list-edit-button buttonish-elem" type="button">Edit</button>
  //                           <button class="task-list-delete-button buttonish-elem" type="button">Delete</button>
  //                         </div>
  //                       </li>
  //                     </ul>
  //                   </div>
  //                 </li>
  //                 <div style="height: 1px;"></div>
  //                 <li class="add-task-section actions">
  //                   <button class="add-task-button buttonish-elem-2" type="button">
  //                     <span class="icon_add">
  //                       <svg width="13" height="13"><path fill="currentColor" fill-rule="evenodd" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1z"></path></svg>
  //                     </span>
  //                     Add task
  //                   </button>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>  
  //   </div>
  // </main>
  // Generate Modal to add task
  addTaskDialog();
   
}