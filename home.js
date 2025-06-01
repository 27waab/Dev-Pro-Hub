const activeUser = localStorage.getItem("activeUser");
if (!activeUser) {
    window.location.href = "index.html";
}

const users = JSON.parse(localStorage.getItem("users")) || [];
const currentUser = users.find(user => user.name === activeUser);

const logoutBtn = document.getElementById("logout");
const addProjectBtn = document.getElementById("addProject");
const deleteAccountBtn = document.getElementById("deleteAccount");
const projectList = document.getElementById("projectList");

const addProjectModal = new bootstrap.Modal(document.getElementById('addProjectModal'));
const projectForm = document.getElementById('projectForm');
const projectNameInput = document.getElementById('projectName');
const projectDescInput = document.getElementById('projectDesc');

const saveUsersToLocal = () => {
    localStorage.setItem("users", JSON.stringify(users));
};

const displayProjects = () => {
    projectList.innerHTML = "";
    currentUser.projects.forEach((project, index) => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-3";
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;
        projectList.appendChild(card);
    });
};

addProjectBtn.addEventListener("click", () => {
    projectNameInput.value = "";
    projectDescInput.value = "";
    addProjectModal.show();
});

projectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = projectNameInput.value.trim();
    const description = projectDescInput.value.trim();

    if (!name) {
        alert("يرجى إدخال اسم المشروع");
        return;
    }

    currentUser.projects.push({ name, description });
    saveUsersToLocal();
    displayProjects();
    addProjectModal.hide();
});

const deleteAccount = () => {
    const confirmDelete = confirm("هل أنت متأكد من حذف حسابك؟");
    if (!confirmDelete) return;
    const index = users.findIndex(user => user.name === activeUser);
    if (index !== -1) {
        users.splice(index, 1);
        saveUsersToLocal();
        localStorage.removeItem("activeUser");
        window.location.href = "index.html";
    }
};

const logout = () => {
    localStorage.removeItem("activeUser");
    window.location.href = "index.html";
};

logoutBtn.addEventListener("click", logout);
deleteAccountBtn.addEventListener("click", deleteAccount);

displayProjects();
