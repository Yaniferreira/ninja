class Ninja{
    constructor(nombre,salud,velocidad,fuerza){
        this.nombre=nombre;
        this.salud=0;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName(){
        console.log("El ninja se llama :",this.nombre);
    }
    showStats(){
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }
    drinkSake (){
        this.salud += 10;
        console.log(this.salud);
    }
 }
 class Sensei extends Ninja {
    constructor(nombre,salud,velocidad,fuerza,sabiduria) {
        super(nombre,salud,velocidad,fuerza); 
        this.salud=200;
        this.velocidad=10;
        this.fuerza=10;
        this.sabiduria = 10;
    }

    speakWisdom() {
        this.drinkSake(); 
        console.log("El sabio Sensei dice: 'Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.'");
    }

    showStats() {
        super.showStats();
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom(); 
superSensei.showStats(); 