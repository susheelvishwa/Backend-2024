const lodash = require("lodash");

function saveInput() {
  console.log("Saving input...");
}

const debouncedSave = lodash.debounce(saveInput, 1000);
window.addEventListener("input", debouncedSave);
