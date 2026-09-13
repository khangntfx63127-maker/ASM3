document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".resume-grid .card");

  cards.forEach(function (card) {
    const viewMore = card.querySelector(".viewmore");
    const viewLess = card.querySelector(".viewless");
    const content = card.querySelector(".card-content");

    // Nếu card không có nút thì bỏ qua
    if (!viewMore || !viewLess || !content) {
      return;
    }

    // Bấm View More
    viewMore.addEventListener("click", function () {
      content.classList.add("active");

      viewMore.style.display = "none";
      viewLess.style.display = "block";
    });

    // Bấm View Less
    viewLess.addEventListener("click", function () {
      content.classList.remove("active");

      viewMore.style.display = "inline-block";
      viewLess.style.display = "none";
    });
  });
});
