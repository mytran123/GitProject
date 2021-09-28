class Apple {
    weight;

    constructor(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    decrease() { //mỗi lần ăn là giảm đi 1
        this.weight -= 1;
    }

    isEmpty() {
        if (this.weight === 0) {
            return false;
        } else {
            return true;
        }
        //Cách khác: return this.weight === 0
    }
}