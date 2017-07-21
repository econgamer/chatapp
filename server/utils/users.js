[{
  id: '/#123123jo12jds',
  name: '',
  room: ''
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users{
  constructor(){
    this.users = [];
  }

  addUser(id, name, room){
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id){
    // return user that was removed
    var user = this.getUser(id);

    if(user){
      this.users = this.users.filter((user) => {
        return user.id !== id;
      });
    }

    return user;
  }

  getUser(id){
    return this.users.filter((user) => {
      return user.id === id;
    })[0];
  }

  getUserList (room){
    // users, namesArray
    var users = this.users.filter((user) => {
      return user.room === room;
    });

    var namesArray = users.map((user) => {
      return user.name;
    });

    return namesArray;
  }
}

module.exports = {Users};


 // class Person{
 //   constructor(name, age){
 //     this.name = name;
 //     this.age = age;
 //   }
 //
 //   getUserDescription(){
 //     return `${this.name} is ${this.age} year(s) old`
 //   }
 //
 // }
 //
 // var me = new Person('Michael', 24);
 // var description = me.getUserDescription();
 // console.log(description);
