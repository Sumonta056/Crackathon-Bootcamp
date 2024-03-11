// Creating an object using object literal notation
let person = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "gardening", "cooking"],
  address: {
    city: "New York",
    country: "USA",
  },
  // Defining a method inside the object
  greet: function () {
    console.log(
      "Hello, my name is " + this.name + " and I'm " + this.age + " years old."
    );
  },
};

// Accessing object properties
console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
console.log(person.hobbies[0]); // Output: reading
console.log(person.address.city); // Output: New York

// Calling a method defined in the object
person.greet(); // Output: Hello, my name is John Doe and I'm 30 years old.

// Adding new properties to the object
person.email = "john@example.com";
console.log(person.email); // Output: john@example.com

// Modifying existing properties
person.age = 32;
console.log(person.age); // Output: 32

// Deleting a property
delete person.hobbies;
console.log(person.hobbies); // Output: undefined
