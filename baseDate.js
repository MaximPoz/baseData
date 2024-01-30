const h1 = document.querySelector("h1");

h1.addEventListener('click', () => h1.textContent = "Удалено"); //! балуюсь


function User(name, email) {
    this.name = name;
    this.email = email;
}

User.prototype.printInfo = function () {
    return `Имя: ${this.name},  Эл.почта: ${this.email}`
}

let formatMessage = (users) => {
    let list = document.querySelector(".contactList")


  let usersList = "Список сохраненных пользователей:\n";

  for (let i = 0; i < users.length; i++) {
    const listItem = document.createElement('li')

    listItem.addEventListener('click', () => listItem.textContent = "Удалено");//! балуюсь
    
    listItem.textContent = `${users[i].name}  ${users[i].email}`
    list.append(listItem)
  }

  return usersList;
};

let createUser = (fields) => {
  let newUser = {};

  for (let i = 0; i < fields.length; i++) {
    do {
      const fieldsValue = prompt(fields[i].message);

      if (fieldsValue) {
        newUser[fields[i].key] = fieldsValue;
        break;
      }
    } while (true);
  }
  
  return new User(newUser.name, newUser.email);
  
};

let init = () => {
  const users = [];
  let fields = [
    { key: "name", message: "Введите имя" },
    { key: "email", message: "Введите почту" },
  ];
  let isCreate;

  do {
    isCreate = confirm("Хотите создать нового пользователя?");

    if (!isCreate) break;

    const newUser = createUser(fields);
    users.push(newUser);
  } while (true);

  formatMessage(users);
};

init();
