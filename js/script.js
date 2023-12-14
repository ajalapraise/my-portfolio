import projects from "./projects.js";


function portfolioProjects() {
    const eachProject = projects.map(
        (project) =>
            `<div class="project">
            <div class="project-image">
                <img src=${project.image} alt=${project.name} />
                <div class="overlay">
                    <div class="project-links">
                        <a href=${project.github}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            aria-labelledby="socialGitHub"
                            role="img"
                            >
                                <title id="socialGitHub">GitHub</title>
                                <path
                                    fill="#FFF"
                                    fill-rule="evenodd"
                                    d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                                /></svg
                        ></a>
                        <a href=${project.live}
                            ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25"
                            height="25"
                            viewBox="0 0 48 48"
                            >
                            <path
                                fill="#fff"
                                d="M 41.470703 4.9863281 A 1.50015 1.50015 0 0 0 41.308594 5 L 27.5 5 A 1.50015 1.50015 0 1 0 27.5 8 L 37.878906 8 L 22.439453 23.439453 A 1.50015 1.50015 0 1 0 24.560547 25.560547 L 40 10.121094 L 40 20.5 A 1.50015 1.50015 0 1 0 43 20.5 L 43 6.6894531 A 1.50015 1.50015 0 0 0 41.470703 4.9863281 z M 12.5 8 C 8.3754991 8 5 11.375499 5 15.5 L 5 35.5 C 5 39.624501 8.3754991 43 12.5 43 L 32.5 43 C 36.624501 43 40 39.624501 40 35.5 L 40 25.5 A 1.50015 1.50015 0 1 0 37 25.5 L 37 35.5 C 37 38.003499 35.003499 40 32.5 40 L 12.5 40 C 9.9965009 40 8 38.003499 8 35.5 L 8 15.5 C 8 12.996501 9.9965009 11 12.5 11 L 22.5 11 A 1.50015 1.50015 0 1 0 22.5 8 L 12.5 8 z"
                            ></path></svg
                        ></a>
                    </div>
                </div>
            </div>
            <div class="project-info">
            <h3 class="name">${project.name}</h3>
            <ul>
                ${project.tools
                .map(
                    (skill) => `
                  <li>
                  ${skill}
                  </li>
                  `
                )
                .join("")}
            </ul>
            </div>
      </div>`
    );
    const allProjects = eachProject.join("");
    document.getElementById("PortfolioProjects").innerHTML = allProjects;
}

document.addEventListener("DOMContentLoaded", portfolioProjects);

