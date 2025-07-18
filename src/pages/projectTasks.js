import addTaskModal from "../modals/addTask"

// Shows Project Task page
export default function ProjectTasks() {
  // <main id="content" tabindex="-1"> - The root element that doesn't change
  const mainContent = document.querySelector("#content");

  // global variable declaration
  const svgNS = "http://www.w3.org/2000/svg";
  const editTaskText = "Edit";
  const deleteTaskText = "Delete";
  const editProjectText = "Edit Project";
  const deleteProjectText = "Delete Project";
  const addTaskText = "Add Task";

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
  editProjectSpan.appendChild(document.createTextNode(editProjectText));
  editProjectButton.appendChild(editProjectSpan);
  
  //               </button>
  //               <button type="button" class="delete-project-button buttonish-elem">
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.setAttribute("type", "button");
  deleteProjectButton.classList.add("delete-project-button", "buttonish-elem");
  projectsMenuItems.appendChild(deleteProjectButton);

  //                 <span>Delete Project</span>
  const deleteProjectSpan = document.createElement("span");
  deleteProjectSpan.appendChild(document.createTextNode(deleteProjectText));
  deleteProjectButton.appendChild(deleteProjectSpan);
  //               </button>
  //             </div>
  //           </div>
  
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
  const project = [
    {
      name: "Default Project"
    }
  ];
  headerContainerText.appendChild(document.createTextNode(project[0].name));
  headerContainer2.appendChild(headerContainerText);
  //             </div>
  //           </div>

  //           <div class="project-list-view-container" data-empty-view="false">
  const projectListContainer = document.createElement("div");
  projectListContainer.classList.add("project-list-view-container");
  projectListContainer.dataset.emptyView = "false";
  myProjectsView.appendChild(projectListContainer);
   
  //             <div class="section-list">
  const projectSectionList = document.createElement("div");
  projectSectionList.classList.add("section-list");
  projectListContainer.appendChild(projectSectionList);

  //               <ul class="project-list-view">
  const projectListView = document.createElement("ul");
  projectListView.classList.add("project-list-view");
  projectSectionList.appendChild(projectListView);

  //                 <li class="project-tasks">
  const projectTasksSection = document.createElement("li");
  projectTasksSection.classList.add("project-tasks");
  projectListView.appendChild(projectTasksSection);
  
  //                   <div class="list-holder">
  const listHolder = document.createElement("div");
  listHolder.classList.add("list-holder");
  projectTasksSection.appendChild(listHolder);

  //                     <ul class="project-items-container">
  const projectItemsContainer = document.createElement("ul");
  projectItemsContainer.classList.add("project-items-container");

  const taskItems = [
    {
      title: "Task 1 title",
      description: "Task 1 description. This should work!",
      date: "2025-07-14",
      priority: 4,
    },
    {
      title: "Task 2 title",
      description: "Task 2 description. This should work!",
      date: "2025-07-15",
      priority: 4,
    },
    {
      title: "Task 3 title",
      description: "Task 3 description. This should work!",
      date: "2025-07-16",
      priority: 4,
    }
  ];

  //                       <!-- Each project item -->
  for (let i = 0 ; i < taskItems.length - 1 ; i++) {
  
  //                       <li class="project-item" data-index="0">
    const projectItem = document.createElement("li");
    projectItem.classList.add("project-item");
    projectItem.dataset.index = i;
    projectItemsContainer.appendChild(projectItem);

  //                         <div class="proj-item-container">
    const projectItemContainer = document.createElement("div");
    projectItemContainer.classList.add("proj-item-container");
    projectItem.appendChild(projectItemContainer);

  //                           <div class="proj-item-container-flex">
    const projectItemContainerFlex = document.createElement("div");
    projectItemContainerFlex.classList.add("proj-item-container-flex");
    projectItemContainer.appendChild(projectItemContainerFlex);

  //                             <div class="task-blank-space"></div>
    const taskBlankSpace = document.createElement("div");
    taskBlankSpace.classList.add("task-blank-space");
    projectItemContainerFlex.appendChild(taskBlankSpace);

  //                             <button class="task-checkbox buttonish-elem-2" type="button">
    const taskCheckboxButton = document.createElement("button");
    taskCheckboxButton.classList.add("task-checkbox", "buttonish-elem-2");
    taskCheckboxButton.setAttribute("type", "button");
    projectItemContainerFlex.appendChild(taskCheckboxButton);

  //                               <span class="button-background"></span>
    const buttonBackground = document.createElement("span");
    buttonBackground.classList.add("button-background");
    taskCheckboxButton.appendChild(buttonBackground);

  //                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="tb7nk6f">
    const buttonBackgroundSVG = document.createElementNS(svgNS, "svg");
    buttonBackgroundSVG.setAttribute("width", "24");
    buttonBackgroundSVG.setAttribute("height", "24");
    buttonBackgroundSVG.setAttribute("viewBox", "0 0 24 24");
    buttonBackgroundSVG.setAttribute("fill", "none");
    buttonBackgroundSVG.classList.add("tb7nk6f");
    taskCheckboxButton.appendChild(buttonBackgroundSVG);

  //                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5056 9.00958C16.2128 8.71668 15.7379 8.71668 15.445 9.00958L10.6715 13.7831L8.72649 11.8381C8.43359 11.5452 7.95872 11.5452 7.66583 11.8381C7.37294 12.1309 7.37293 12.6058 7.66583 12.8987L10.1407 15.3736C10.297 15.5299 10.5051 15.6028 10.7097 15.5923C10.8889 15.5833 11.0655 15.5104 11.2023 15.3735L16.5056 10.0702C16.7985 9.77735 16.7985 9.30247 16.5056 9.00958Z" fill="currentColor">
  //                                 </path>
    const buttonBackgroundSVGPath = document.createElementNS(svgNS, "path");
    buttonBackgroundSVGPath.setAttribute("fill-rule", "evenodd");
    buttonBackgroundSVGPath.setAttribute("clip-rule", "evenodd");
    const buttonBackgroundSVGPathTrace = "M16.5056 9.00958C16.2128 8.71668 15.7379 8.71668 15.445 9.00958L10.6715 13.7831L8.72649 11.8381C8.43359 11.5452 7.95872 11.5452 7.66583 11.8381C7.37294 12.1309 7.37293 12.6058 7.66583 12.8987L10.1407 15.3736C10.297 15.5299 10.5051 15.6028 10.7097 15.5923C10.8889 15.5833 11.0655 15.5104 11.2023 15.3735L16.5056 10.0702C16.7985 9.77735 16.7985 9.30247 16.5056 9.00958Z";
    buttonBackgroundSVGPath.setAttribute("d", buttonBackgroundSVGPathTrace);
    buttonBackgroundSVGPath.setAttribute("fill", "currentColor");
    buttonBackgroundSVG.appendChild(buttonBackgroundSVGPath);

  //                               </svg>
  //                               <span class="button-border"></span>
    const buttonBorder = document.createElement("span");
    buttonBorder.classList.add("button-border");
    taskCheckboxButton.appendChild(buttonBorder);

  //                             </button>
  //                             <div class="task-item-content">
    const taskItemContent = document.createElement("div");
    taskItemContent.classList.add("task-item-content");
    projectItemContainerFlex.appendChild(taskItemContent);

  //                               <div class="task-item-wrapper">
    const taskItemWrapper = document.createElement("div");
    taskItemWrapper.classList.add("task-item-wrapper");
    taskItemContent.appendChild(taskItemWrapper);

  //                                 <div class="task-content">
    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskContent.appendChild(document.createTextNode(taskItems[i].title));
    taskItemWrapper.appendChild(taskContent);

  //                                   Do a review of something inside here
  //                                 </div>
  //                                 <div class="task-description">
    const taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskItemWrapper.appendChild(taskDescription);

  //                                   <p>
    const taskDescriptionPara = document.createElement("p");
    taskDescriptionPara.appendChild(document.createTextNode(taskItems[i].description));
    taskDescription.appendChild(taskDescriptionPara);
  //                                     Item description once again. Hopefully this works.
  //                                   </p>
  //                                 </div>
  //                               </div>
  //                               <div class="task-date-container buttonish-elem-2">
    const taskDateContainer = document.createElement("div");
    taskDateContainer.classList.add("task-date-container", "buttonish-elem-2");
    taskItemContent.appendChild(taskDateContainer);
  
  //                                 <span class="date-icon">
    const dateIcon = document.createElement("span");
    dateIcon.classList.add("date-icon");
    taskDateContainer.appendChild(dateIcon);

  //                                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
    const dateIconSVG = document.createElementNS(svgNS, "svg");
    dateIconSVG.setAttribute("width", "12");
    dateIconSVG.setAttribute("height", "12");
    dateIconSVG.setAttribute("viewBox", "0 0 12 12");
    dateIconSVG.setAttribute("fill", "none");
    dateIcon.appendChild(dateIconSVG);

  //                                    <path fill="currentColor" fill-rule="evenodd" d="M9.5 1h-7A1.5 1.5 0 0 0 1 2.5v7A1.5 1.5 0 0 0 2.5 11h7A1.5 1.5 0 0 0 11 9.5v-7A1.5 1.5 0 0 0 9.5 1M2 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM8.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M3.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path>
    const dateIconSVGPath = document.createElementNS(svgNS, "path");
    dateIconSVGPath.setAttribute("fill-rule", "evenodd");
    dateIconSVGPath.setAttribute("clip-rule", "evenodd");
    const dateIconSVGPathTrace = "M9.5 1h-7A1.5 1.5 0 0 0 1 2.5v7A1.5 1.5 0 0 0 2.5 11h7A1.5 1.5 0 0 0 11 9.5v-7A1.5 1.5 0 0 0 9.5 1M2 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM8.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M3.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z";
    dateIconSVGPath.setAttribute("d", dateIconSVGPathTrace);
    dateIconSVGPath.setAttribute("fill", "currentColor");
    dateIconSVG.appendChild(dateIconSVGPath);

  //                                  </svg>
  //                                   <span class="date">
    const dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    // const currentDate = new Date();
    // const dateString = currentDate.toLocaleDateString();
    dateSpan.appendChild(document.createTextNode(taskItems[i].date));
    dateIcon.appendChild(dateSpan);
  //                                     Today
  //                                   </span>
  //                                 </span>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                         <div class="task-list-actions-container">
    const taskListActionsContainer = document.createElement("div");
    taskListActionsContainer.classList.add("task-list-actions-container");
    projectItemContainerFlex.appendChild(taskListActionsContainer);

  //                           <button class="task-list-edit-button buttonish-elem" type="button">Edit</button>
    const taskListEditButton = document.createElement("button");
    taskListEditButton.classList.add("task-list-edit-button", "buttonish-elem");
    taskListEditButton.appendChild(document.createTextNode(editTaskText));
    taskListEditButton.setAttribute("type", "button");
    taskListActionsContainer.appendChild(taskListEditButton);
  //                           <button class="task-list-delete-button buttonish-elem" type="button">Delete</button>
    const taskListDeleteButton = document.createElement("button");
    taskListDeleteButton.classList.add("task-list-delete-button", "buttonish-elem");
    taskListDeleteButton.appendChild(document.createTextNode(deleteTaskText));
    taskListDeleteButton.setAttribute("type", "button");
    taskListActionsContainer.appendChild(taskListDeleteButton);

  //                         </div>
  //                       </li>
  }
  listHolder.appendChild(projectItemsContainer);
  //                     </ul>
  //                   </div>
  //                 </li>
  //                 <div style="height: 1px;"></div>
  const aboveAddTaskButtonDiv = document.createElement("div");
  aboveAddTaskButtonDiv.setAttribute("style", "height: 1px;");
  projectListView.appendChild(aboveAddTaskButtonDiv);

  //                 <li class="add-task-section actions">
  const addTaskSection = document.createElement("li");
  addTaskSection.classList.add("add-task-section", "actions");
  aboveAddTaskButtonDiv.appendChild(addTaskSection);

  //                   <button class="add-task-button buttonish-elem-2" type="button">
  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add("add-task-button", "buttonish-elem-2");
  addTaskButton.setAttribute("type", "button");

  //                     <span class="icon_add">
  const addIcon = document.createElement("span");
  addIcon.classList.add("icon_add");
  addTaskButton.appendChild(addIcon);

  //                       <svg width="13" height="13"><path fill="currentColor" fill-rule="evenodd" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1z"></path></svg>
  const addIconSVG = document.createElementNS(svgNS, "svg");
  addIconSVG.setAttribute("width", "13");
  addIconSVG.setAttribute("height", "13");
  addIcon.appendChild(addIconSVG);

  const addIconSVGPath = document.createElementNS(svgNS, "path");
  addIconSVGPath.setAttribute("fill", "currentColor");
  addIconSVGPath.setAttribute("fill-rule", "evenodd");
  addIconSVGPath.setAttribute("d", "M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1z");
  addIconSVG.appendChild(addIconSVGPath);

  //                     </span>
  addTaskButton.appendChild(document.createTextNode(addTaskText));
  addTaskSection.appendChild(addTaskButton);
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
  addTaskModal();
   
}