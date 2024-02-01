const h1 = document.querySelector("h1");

// h1.addEventListener("click", () => (h1.textContent = "Удалено")); //! балуюсь

function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.printInfo = function () {
  return `Имя: ${this.name},  Эл.почта: ${this.email}`;
};


let renderUserList = (users) => {
  let list = document.querySelector(".users-list");

    list.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    const listItem = document.createElement("li");

    listItem.textContent = `${users[i].name}  ${users[i].email}`;
    list.append(listItem);
  }
};


let init = () => {
  const users = [];

  const createBtn = document.querySelector(".create-btn");
  createBtn.addEventListener("click", () => {
    const nameEL = document.querySelector("input[type ='text']");
    const emailEL = document.querySelector("input[type ='email']");

    const name = nameEL.value;
    const email = emailEL.value;

    if (name && email) {
      const user = new User(name, email);
      users.push(user);
      renderUserList(users);
      nameEL.value = "";
      emailEL.value = "";
    }
  });
};

let createBtn1 = document.querySelector(".create-btn");
const move = createBtn1.animate(
  [
    { transform: "translateX(0px)" },
    { transform: "translateX(100px)" },
    { transform: "translateX(0px)" },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  }
)


createBtn1.addEventListener("mouseenter", () => {
  move.pause();
});
createBtn1.addEventListener("mouseleave", () => {
  move.play();
});

let logo = document.querySelector(".logo");
const moveLogo = logo.animate(
  [
    { transform: "rotate(0deg)" },
    { transform: "rotate(360deg)" },
  ],
  { duration: 3000, iterations: Infinity }
)




logo.addEventListener("mouseenter", () => {
  moveLogo.pause();
});
logo.addEventListener("mouseleave", () => {
  moveLogo.play();
});

init();
