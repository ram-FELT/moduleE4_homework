class Device {
    constructor(calledName, power){
        this.power=power
        this.calledName = calledName 
        this.works=false}
        switch_on() {
            this.works = true;
            console.log(` ${this.calledName}: Прибор включён`)    
        }
        switch_off() {
            this.works = false;
            console.log(` ${this.calledName}: Прибор отключён`)       
        }
        currentPower() {
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

class Notebook extends Device {
    constructor(calledName, power, user){
        super(calledName, power)
        this.user = user
        this.power=power
        this.calledName = calledName    
    
    }
}
const usernameComputer = new Notebook("Ноутбук", 51, "Username")
usernameComputer.color = "Серый-металик"
class WashingMachine extends Device{
    constructor(calledName, power, washingAmount){
    super(calledName, power)
    this.washingAmount = washingAmount
    this.power=power
    this.calledName = calledName 
    }
    wash() {
        console.log("ε=ε=ε=ε=┌(;￣▽￣)┘ ε=ε=┌( >_<)┘ C= C= C= C=┌( `ー´)┘ ＼(≧▽≦)／")
        }
}
const indesit = new WashingMachine("Стиральная машина", 1020, 5)
indesit.color ="Белый"
nightLight.switch_on()
indesit.switch_on()
usernameComputer.switch_on()
console.log(`Потребляется сейчас, Вт: ${nightLight.currentPower()+computer.currentPower()+candy.currentPower()+usernameComputer.currentPower()+indesit.currentPower()}`)
indesit.wash()