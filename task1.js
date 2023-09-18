function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

// Example usage:
const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof'
});
mango.getInfo(); // Output: Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com'
});
poly.getInfo(); // Output: Login: Poly, Email: poly@mail.com
