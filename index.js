let func = () => {
    let num = 6
    let arr = [2,2,3,4,5,6]
    let index

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            index = i
            break
        }
    }

    let p = document.createElement('p')
    p.textContent = `Заработабо!╰(*°▽°*)╯`
    document.body.append(p)



    alert(`Число ${num} найдено  его интекс ${index}`)
}

func()