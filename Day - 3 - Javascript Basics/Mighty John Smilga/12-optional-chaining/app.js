const people = [
  {
    name: "bob",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  { name: "peter", location: { street: "123 Pine street" } },
  {
    name: "susan",
    location: { street: "123 Apple street", timezone: { offset: "+9:00" } },
  },
];

people.forEach((person) => {
  console.log(person.name); // every person has name, so no problem
});

people.forEach((person) => {
  console.log(person.location.timezone.offset); // will throw error because peter does not have timezone
});

console.log(true && "Optional Chaining"); // if true, then print the next value
console.log(false && "Ami print hobo na"); // if false, then print false

//now think of using this in object

// now we can use optional chaining to avoid error

people.forEach((person) => {
  // console.log(person.name)
  // console.log(person.location)
  // console.log(person.location.street)
  // console.log(person.location.timezone.offset)
  // console.log(
  //   person.location &&
  //     person.location.timezone &&
  //     person.location.timezone.offset
  // );
  console.log(person?.location?.timezone?.offset || "default value");
});
