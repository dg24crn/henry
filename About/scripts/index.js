class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(title, description, imgUrl) {
    const id = this.activities.length + 1;
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

const repository = new Repository();

function createActivityElement(activity) {
  const { title, description, imgUrl } = activity;

  const imgElement = document.createElement("img");
  imgElement.src = imgUrl;
  imgElement.alt = title;

  const titleElement = document.createElement("h3");
  titleElement.innerHTML = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description;

  const cardElement = document.createElement("div");
  cardElement.classList.add("activity-card");
  cardElement.appendChild(imgElement);
  cardElement.appendChild(titleElement);
  cardElement.appendChild(descriptionElement);

  return cardElement;
}

function renderActivities() {
  const activitiesContainer = document.getElementById("activities-container");
  activitiesContainer.innerHTML = "";

  const activities = repository.getAllActivities();
  activities.forEach((activity) => {
    const activityElement = createActivityElement(activity);
    activitiesContainer.appendChild(activityElement);
  });
}

function handleAddActivity(event) {
  event.preventDefault();

  const titleInput = document.getElementById("activity-name-input");
  const descriptionInput = document.getElementById(
    "activity-description-input"
  );
  const imgUrlInput = document.getElementById("activity-url-input");

  const imgUrl = imgUrlInput.value;
  const title = titleInput.value;
  const description = descriptionInput.value;

  if (!title || !description || !imgUrl) {
    alert("Please, complete every field.");
    return;
  }

  repository.createActivity(title, description, imgUrl);
  renderActivities();
}

const addButton = document.getElementById("add-activity-button");
addButton.addEventListener("click", handleAddActivity);

function handleAddActivity(event) {
  event.preventDefault();

  const titleInput = document.getElementById("activity-name-input");
  const descriptionInput = document.getElementById(
    "activity-description-input"
  );
  const imgUrlInput = document.getElementById("activity-url-input");

  const imgUrl = imgUrlInput.value;
  const title = titleInput.value;
  const description = descriptionInput.value;

  if (!title || !description || !imgUrl) {
    alert("Fill every field..");
    return;
  }

  repository.createActivity(title, description, imgUrl);
  renderActivities();
}
