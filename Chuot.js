class Chuot {
    ten;
    khoiluong;
    tocdo;
    trangthai;

    constructor(ten, khoiluong, tocdo, trangthai, keu) {
        this.ten = ten;
        this.khoiluong = khoiluong;
        this.tocdo = tocdo;
        this.trangthai = true;
    }

    keu() {
        return "chít chít";
    }

    chet() {
        this.trangthai = false;
    }

    song() {
        this.trangthai = true;
    }
}