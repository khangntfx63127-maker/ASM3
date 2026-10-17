document.addEventListener("DOMContentLoaded", function () {
  /* ===== Mục 9: ẩn thông tin cá nhân, nhập email mới xem ===== */
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailBox = document.getElementById("email-box");
  const infoBox = document.getElementById("info-box");
  const input = document.getElementById("email-input");
  const error = document.getElementById("email-error");
  const submit = document.getElementById("email-submit");

  function checkEmail() {
    const value = input.value.trim();
    if (value === "" || !regex.test(value)) {
      error.textContent = value === "" ? "Vui lòng nhập email." : "Email không đúng định dạng.";
      error.classList.remove("hide");
      input.classList.add("is-invalid");
      return;
    }
    emailBox.classList.add("hide");
    infoBox.classList.remove("hide");
  }
  submit.addEventListener("click", checkEmail);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") checkEmail();
  });

  /* ===== Mục 10: View more / View less ===== */
  document.querySelectorAll(".cv-card").forEach(function (card) {
    const title = card.querySelector(".cv-head h4");
    const btn = card.querySelector(".toggle-btn");
    title.addEventListener("click", function () {
      const isOpen = card.classList.toggle("open");
      btn.textContent = isOpen ? "View less" : "View more";
    });
  });
});