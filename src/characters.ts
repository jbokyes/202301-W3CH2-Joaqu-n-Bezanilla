export class Character {
  public lifestate: boolean
  constructor(
    public name: string,
    public family: string,
    public age: number,

  ) {
    this.name = name;
    this.age = age;
    this.family = family;
    this.lifestate = true;
  }
  greetings() {
    console.log(`Hola soy ${this.name} y tengo ${this.age}`); // Cambiar de clg a "asignar string"
  }
  kill() {
    this.lifestate = false;
  }
}

export class King extends Character {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public lifestate: boolean,
    public reigningAge: number
  ) {
    super(name, family, age, lifestate);
  }
  greetings(){
    greetings();
    console.log("Primero pego, luego pregunto");
  }
}

export class Fighter extends Character {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public lifestate: boolean,
    public weapon: string,
    public skill: number,
  ){
    super(name, family, age, lifestate);
  }
  super.greetings(){
    console.log("Primero pego y luego pregunto");
  }
}
