class Rectangulo {
    #area = 0

    constructor(base = 0, altura = 0){
        this.base = base
        this.altura = altura
        this.#area = base * altura

    }
    get getArea(){
        return this.#area
    }
}

const rectangulo = new Rectangulo(10, 15)
console.log(rectangulo.getArea)
// rectangulo.area = 20
