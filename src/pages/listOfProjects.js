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
    const addTaskText = "Add Project";

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




  }
}