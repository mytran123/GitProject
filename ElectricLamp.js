class ElectricLamp {
    status;

    constructor(status) {
        this.status = false;
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }
}