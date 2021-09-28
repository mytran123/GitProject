class SwitchButton {
    status;
    lamp;

    constructor(status, lamp) {
        this.status = false;
        this.lamp = lamp;
    }

    connectToLamp() {
        this.lamp = lamp;
    }

    switchOn() {
        this.status = true;
        return this.lamp.turnOn();
    }

    switchOff() {
        this.status = false;
        return this.lamp.turnOff();
    }
}