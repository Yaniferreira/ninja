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
        console.log("Los datos del ninja son :",this.nombre,this.salud,this.velocidad,this.fuerza);
    }
    drinkSake (){
        this.salud += 10;
        console.log(this.salud);
    }
 }
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

