export default function listOfProjects(user) {
  if (user.projects.length > 0) {
    
    // <main id="content" tabindex="-1"> - The root element that doesn't change
    const mainContent = document.querySelector("#content");
    mainContent.textContent = "Hi. fix me";

  }
}