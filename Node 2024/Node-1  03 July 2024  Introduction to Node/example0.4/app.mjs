const shouldUseMath = true;

if (shouldUseMath) {
  import("./math.mjs")
    .then((math) => {
      console.log(math.add(2, 3));
      console.log(math.multiply(2, 3));
    })
    .catch((error) => {
      console.error("Error loading the module:", error);
    });
} else {
  console.log("Math utilities are not required.");
}
