export default function sidebarProjects(user) {
  // <ul id="sidebar-projects-list" tab-index="-1" class="">
  const sidebarProjectsList = document.querySelector("#sidebar-projects-list");
  sidebarProjectsList.textContent = "";

  // Get list of projects
  const projects = user.projects;

  // Loop through each project
  for (let i = 0 ; i < projects.length ; i++) {
 
  // <li class="sidebar-project-list-item sidebar-box-background-no-trans" data-index="0">
    const sidebarProjectListItem = document.createElement("li");
    sidebarProjectListItem.classList.add("sidebar-project-list-item", "sidebar-box-background-no-trans");
    sidebarProjectListItem.dataset.index = i;
    sidebarProjectsList.appendChild(sidebarProjectListItem);

  //   <div class="sidebar-project-list-item-container">
    const sidebarProjectListItemContainer = document.createElement("div");
    sidebarProjectListItemContainer.classList.add("sidebar-project-list-item-container");
    sidebarProjectListItem.appendChild(sidebarProjectListItemContainer);

  //     <a href="javascript:void(0)">
    const projectLink = document.createElement("a");
    projectLink.setAttribute("href", "javascript:void(0)");
    sidebarProjectListItemContainer.appendChild(projectLink);

  //       <span>Default Project</span>
    const projectLinkSpan = document.createElement("span");
    projectLinkSpan.appendChild(document.createTextNode(projects[i].name));
    projectLink.appendChild(projectLinkSpan);
  //     </a>

  //     <span class="sidebar-project-list-item-length">
    const projectItemTaskLength = document.createElement("span");
    projectItemTaskLength.classList.add("sidebar-project-list-item-length");
    sidebarProjectListItemContainer.appendChild(projectItemTaskLength);
    
  //       <span>5</span>
     const projectItemTaskLengthSpan = document.createElement("span");
     projectItemTaskLengthSpan.appendChild(document.createTextNode(projects[i].todos.length));
     projectItemTaskLength.appendChild(projectItemTaskLengthSpan)

  }
  //     </span>
  //   </div>  
  // </li>
}

