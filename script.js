
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");
  const cards = document.querySelectorAll(".product-card");


  searchInput.addEventListener("input", filterCars);


  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterCars();
  });

  function filterCars() {
    const searchText = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const model = card.dataset.name.toLowerCase();
      const text = card.textContent.toLowerCase();

      if (model.includes(searchText) || text.includes(searchText)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});


let modal = document.getElementById("carModal");
let closeBtn = document.querySelector(".close");

document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    let card = btn.closest(".product-card");

    document.getElementById("modalName").textContent = card.dataset.name;
    document.getElementById("modalFront").src = card.dataset.imgFront;
    document.getElementById("modalBack").src = card.dataset.imgBack;
    document.getElementById("modalSpecs").textContent = "المواصفات: " + card.dataset.specs;
    document.getElementById("modalPrice").textContent = "السعر: " + card.dataset.price;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});