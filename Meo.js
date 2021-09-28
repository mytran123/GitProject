class Meo {
    ten;
    khoiluong;
    tocdo;

    constructor(ten, khoiluong, tocdo) {
        this.ten = ten;
        this.khoiluong = khoiluong;
        this.tocdo = tocdo;
    }

    keu() {
        return "meo meo";
    }

    batChuot(chuot) {
        if (this.tocdo > chuot.tocdo) {
            return true;
        } else {
            console.log("Hụt rồi");
        }
    }

    anChuot(chuot) {
        if (chuot.song()) {
            this.weight += chuot.weight;
        } else {
            return this.weight;
        }
    }



}