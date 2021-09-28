let switchbutton = new SwitchButton();
let lamp = new ElectricLamp();
switchbutton.connectToLamp(lamp);
for (let i = 0; i < 10; i++) {
    switchbutton.switchOn();
    console.log(lamp.status);
    switchbutton.switchOff();
    console.log(lamp.status);
}