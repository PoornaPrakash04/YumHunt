function showLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function showSignup() {
  document.getElementById("signupModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("signupModal").style.display = "none";
}

const container = document.getElementById("card-container");

function renderCards(filteredCategory = "All") {
  container.innerHTML = "";

  const filteredRecipes = filteredCategory === "All"
    ? recipes
    : recipes.filter(r => r.category === filteredCategory);

  filteredRecipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => {
      localStorage.setItem("selectedRecipe", JSON.stringify(recipe));
      window.location.href = "recipe.html";
    };
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="card-body">
        <h3>${recipe.name}</h3>
        <p>${recipe.category}</p>
      </div>`;
    container.appendChild(card);
  });
}

function filterCategory(category) {
  document.getElementById('searchInput').value = ""; 
  renderCards(category);
}


// Initial render
if (container) renderCards();


