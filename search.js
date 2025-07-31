function searchRecipes() {
  const input = document.getElementById('searchInput');
  const query = input.value.toLowerCase().trim();
  const clearBtn = document.querySelector('.clear-btn');

  clearBtn.style.display = query ? 'block' : 'none';

  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query)
  );

  renderCardsFromSearch(filtered);
}

function renderCardsFromSearch(filteredRecipes) {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  if (filteredRecipes.length === 0) {
    container.innerHTML = "<p style='text-align:center; width:100%;'>No recipes found.</p>";
    return;
  }

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
function clearSearch() {
  const input = document.getElementById('searchInput');
  input.value = "";
  document.querySelector('.clear-btn').style.display = 'none';
  searchRecipes();
}
