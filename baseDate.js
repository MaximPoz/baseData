let formatMessage = (users) => {
    let usersList = "Список сохраненных пользователей:\n"

    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users[i].length; j++) {
            usersList += ` ${users[i][j]}`;
        }
        usersList += `\n`
    }
    return usersList
}

let createUser = (fields) => {
    let newUser = []

    for (let i = 0; i < fields.length; i++) {
        do {
            const fieldsValue = prompt(fields[i])

            if (fieldsValue) {
                newUser.push(fieldsValue)
                break
            }
        } while (true);
    }
    return newUser
}


let init = () => {
    const users = []
    let fields = ["Введите имя", "Введите почту"]
    let isCreate

    do {
        isCreate = confirm("Хотите создать нового пользователя?")

        if (!isCreate) break

        const newUser = createUser(fields)
        users.push(newUser)
    } while (true);

    
    alert(formatMessage(users))
}

init()