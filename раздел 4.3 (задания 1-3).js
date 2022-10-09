function zadanie_1(obj){
    for (let key in obj)
        if (obj.hasOwnProperty(key))
            console.log(key)
}

a = {"a":1, "b":2}
zadanie_1(a)


function zadanie_2(prop, obj){
    for (let key in obj)
        if (key == prop)
            return true
    return false
}

console.log(zadanie_2("c", a))


function zadanie_3(){
    let func = {}
    return func
}