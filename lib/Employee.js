// TODO: Write code to define and export the Employee class
// constructors are resuable Objects

class Employee{
    constructor(name,id,email){
        this.name=name
        this.id=id
        this.email=email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }
}

module.exports=Employee


// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns'Employee'

// class Animal{
//     constructor(name,age){
//         this.name=name
//         this.age=age
  
//     }
//      print=function(){
//           console.log(this.name)
//       }
// }

 
// const dog={
//   name: "woffy",
//   age:12,
//   print: function(){
//    console.log(this.name)
//   }   
// }

// // objects have properties (variables) and methods(functions)

// const cat={
//     name: "meow",
//     age:10,
//     print: function(){
//         console.log(this.name)
//     }
// }


// const dog = new Animal("woffy",12)
// dog.print()
// const cat = new Animal("meow",10)
// cat.print()