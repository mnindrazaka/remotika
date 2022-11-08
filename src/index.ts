type Person = {
  name: string;
  address: string;
};

const person: Person = {
  name: "aka",
  address: "condong",
};

const person2: Person = {
  name: "aka2",
  address: "condong",
};

class Student {
  name: string;
  address: string;
  eat() {
    console.log(this.name);
  }
}

console.log(person);
