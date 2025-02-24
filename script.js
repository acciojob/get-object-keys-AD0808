// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]

// Additional Tests
const student2 = {
  name: "Alice",
  age: 25,
  city: "New York"
};
console.log(getKeys(student2)); // Output: ["name", "age", "city"]
