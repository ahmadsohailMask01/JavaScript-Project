class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  get password() {
    return this._password;
  }
  set password(value) {
    this._password = value;
  }
}
const obj = new User("Ahmad", "123345");
console.log(obj.password);

// const obj = new User();
// console.log(obj.nameOfUser);

// function myFunc() {
//   this.myObj = "67878687";
// }
// const newObj = new myFunc();
// console.log(newObj.myObj);
