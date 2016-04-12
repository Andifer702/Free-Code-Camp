var Person = function(firstAndLast) {
    firstAndLast.split(' ');
    var firstName = firstAndLast[0],
        lastName = firstAndLast[1];
  getFirstName = function() {
    return firstName;
    };
  getLastName = function() {
    return lastName;
  };
  getFullName = function() {
    return firstName + ' ' + lastName;
  };
};

var bob = new Person('Bob Ross');
