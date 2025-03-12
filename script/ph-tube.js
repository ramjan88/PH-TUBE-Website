//
// load the btn categories
function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((Response) => Response.json())
    .then((data) => {
      displayCategories(data.categories);
    });
}

function displayCategories(categories) {
  const categoriesContainer = document.getElementById("categoties-container");

  for (let cat of categories) {
    console.log(cat);
    const div = document.createElement("div");
    div.innerHTML = `
    <button class='btn bg-[#25252533] hover:bg-[#FF1F3D] hover:text-white'>${cat.category}</button>
    `;
    categoriesContainer.appendChild(div);
  }
}
loadCategories();
