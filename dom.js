document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("colorPopup");
  const popupTitle = document.getElementById("popupTitle");
  const colorInput = document.getElementById("colorInput");
  const applyColor = document.getElementById("applyColor");
  const cancelColor = document.getElementById("cancelColor");
  const text = document.getElementById("text1");
  const body = document.getElementById("bd");
  const basket = document.getElementById("basket");
  const basketStat = document.getElementById("basketstat");

  let currentMode = ""; 
  let flowerCount = 0;

  function openPopup(mode) {
    currentMode = mode;
    popupTitle.textContent = mode === "text" ? "input your color" : "input your color";
    popup.style.display = "flex";
  }

  function closePopup() {
    popup.style.display = "none";
  }

  applyColor.addEventListener("click", () => {
    const color = colorInput.value;
    if (currentMode === "text") {
      text.style.color = color;
    } else if (currentMode === "background") {
      body.style.backgroundColor = color;
    }
    closePopup();
  });

  cancelColor.addEventListener("click", closePopup);

  document.getElementById("chtext").addEventListener("click", () => openPopup("text"));
  document.getElementById("bccol").addEventListener("click", () => openPopup("background"));

  const flowerImages = document.querySelectorAll("img[id^='img']");

  flowerImages.forEach(img => {
    img.addEventListener("click", function() {
      const clone = img.cloneNode(true);
      clone.style.width = "80px";
      clone.style.height = "80px";
      clone.style.cursor = "default";

      basket.appendChild(clone);

      flowerCount++;
      basketStat.textContent = `The flower basket currently contains ${flowerCount} flower${flowerCount > 1 ? "s" : ""}.`;
    });
  });
});
