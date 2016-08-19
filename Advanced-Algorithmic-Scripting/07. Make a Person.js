//Fill in the object constructor with the following methods below

    //getFirstName()
    //getLastName()
    //getFullName()
    //setFirstName(first)
    //setLastName(last)
    //setFullName(firstAndLast)
    
var Person = function(firstAndLast) {
    firstAndLast = firstAndLast.split(' ');
    var firstName = firstAndLast[0]; //assign first and last names separately
    var lastName = firstAndLast[1];
    var fullName = firstAndLast[0] + ' ' + firstAndLast[1];
  
  //method for getting the first, last, or full name of the person
  this.getFirstName = function() {
    return firstName;
    };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };
  
  //Setting new methods for changing name
  this.setFirstName = function(name) {
    firstName = name;
  };
  this.setLastName = function(name) {
    lastName = name;
  };
  this.setFullName = function(name){
    name = name.split(' ');
    firstName = name[0];
    lastName = name[1];
  };
  
};

var bob = new Person('Bob Ross');
bob.getFirstName();
