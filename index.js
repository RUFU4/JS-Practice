let str = "Akbewka" //Для второй задачи
let arr = [cat, dog, parrot, horse] //Для третьей задачи

// Первая задачка
console.log(str[3])

//Вторая задачка
//Вообще строки в JS не изменяются, а методы строк просто возвращают модифицированную строку. Способов замены символа можно придумать много. Здесь только те, на которые мне пока что хватило ума :о

// 1 Вариант
function optionOne(){
    let str3 = str.split("")
    str3.splice(3, 1, "o")
    console.log(str3.join(""))
}

// 2 Вариант
function optionTwo(){
    let str3 = str.split("")
    console.log((str3.map((item) => item === "e" ? "o" : item)).join(""))
}

function optionThree(){
    let str3 = str.split("")
    let str4 = str3.reduce((accum, item) => {
        if (item === "e"){
            accum.push("o")
        }
        else accum.push(item)
        return accum
    }, [])
}
optionOne()
optionTwo()
optionThree()

//Третья задачка
console.log(arr.findIndex((item) => item === "parrot"))
arr