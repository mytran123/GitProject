let chuot = new Chuot("Rat", 100, 40);
let meo = new Meo("Cat", 1000, 60);
console.log(chuot.keu());
console.log(meo.keu());
console.log(meo.batChuot(chuot));
meo.anChuot(chuot);
console.log("Cuối cùng cũng làm thịt được nhà ")