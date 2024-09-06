let str = "Akbewka" //Для второй задачи
let arr = ["cat", "dog", "parrot", "horse"] //Для третьей задачи
let arr2 = ["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"] //Для четвертой задачи
let arr3 = [31, 10, 'chicken', 9, 'fish', 10] //Для пятой задачи
let obj =  {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  }

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
    console.log(str4)
}
optionOne()
optionTwo()
optionThree()

//Третья задачка
console.log(arr.findIndex((item) => item === "parrot"))

function MyFindIndexOne(element, arr){
    let output = arr.reduce((acc, item, index) => {
        if (element === item){
            acc = index
        }
        return acc
    }, 0)
    return output
}
console.log(MyFindIndexOne("parrot", arr))

//четвертая задачка 

delete arr2[4]
arr2.shift()
arr2.splice(arr2.length - 2, 2)

//пятая задача 

let strs = arr3.filter((item) => typeof item === "string")
console.log(strs)
let tens = arr3.filter((item) => item === 10)
console.log(tens)

//шестая 
for (let key in obj){
    console.log(key + " : " + obj[key])
}