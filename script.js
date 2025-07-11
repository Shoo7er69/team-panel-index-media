document.addEventListener("DOMContentLoaded", () => {
      const form = document.querySelector("form");
        const button = document.getElementById("submitBtn");
          const btnText = document.getElementById("btnText");
            const checkIcon = document.getElementById("checkIcon");

              form.addEventListener("submit", () => {
                  btnText.textContent = "Submitted";
                      checkIcon.classList.remove("hidden");
                          button.classList.add("bg-green-500", "hover:bg-green-600");
                            });
                            });
})