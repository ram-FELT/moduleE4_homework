function Device(calledName, power){
    this.power=power;
    this.calledName = calledName
    this.works=false
    this.switch_on = function(){
        this.works = true;
        console.log(` ${this.calledName}: Прибор включён`)    
    }
    this.switch_off = function(){
        this.works = false;
        console.log(` ${this.calledName}: Прибор отключён`)       
    }
    this.currentPower = function(){
        if (this.works) return this.power
            else return 0
    }
    
}

let nightLight = new Device("Ночник", 30)
let computer = new Device("ПК", 650)
let candy = new Device("Холодильник", 200)

nightLight.style = "Техно"
computer.configuration ='11gen i7 CPU, 16G RAM, 3TB HDD,1TB SSD, 24"IPS'
candy.color = "Белый"

function Notebook(user){
    this.user = user
}
Notebook.prototype = new Device("Ноутбук", 51)
const usernameComputer = new Notebook("Username")
usernameComputer.color = "Серый-металик"
function WashingMachine(washingAmount){
    this.washingAmount = washingAmount
}
WashingMachine.prototype = new Device("Стиральная машина", 1020)
WashingMachine.prototype.wash = function() {
    console.log("ε=ε=ε=ε=┌(;￣▽￣)┘ ε=ε=┌( >_<)┘ C= C= C= C=┌( `ー´)┘ ＼(≧▽≦)／")
}
const indesit = new WashingMachine(5)
indesit.color ="Белый"
nightLight.switch_on()
indesit.switch_on()
usernameComputer.switch_on()
console.log(`Потребляется сейчас, Вт: ${nightLight.currentPower()+computer.currentPower()+candy.currentPower()+usernameComputer.currentPower()+indesit.currentPower()}`)
indesit.wash()