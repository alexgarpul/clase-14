class Persona {

    static _conteo = 0
    static get getConteo() {
        console.log(`${this._conteo} instancias`)
    }

    static mensaje() {
        console.log('Hola, soy un metodo estatico')
    }

    comidaFavorita = ''
    superHeroe = ''
    nombre = ''
    edad = ''
    frase = ''

    constructor(superHeroe, nombre,edad, frase) {
        this.superHeroe = superHeroe
        this.nombre = nombre
        this.edad = edad
        this.frase = frase
        Persona._conteo++
    }
    set setComidaFavorita(comida){
        this.comidaFavorita = comida.toUpperCase()
    }

    get getComidaFavorita(){
        console.log(`la comida favorita de ${this.nombre} es ${this.comidaFavorita}`)
    }

    quiensoy(){
        console.log(`Yo soy ${this.nombre} y mi frase favorita es '${this.frase}'`)
    }
}

const shesho = new Persona('Guason','sergio', 25, 'Ya nada puede hacerme daño, mi vida es una completa comedia')
console.log(shesho)
shesho.setComidaFavorita = 'Bandeja Paisa'
shesho.getComidaFavorita

const Alex = new Persona('Loki','Alexander', 21, 'La libertad es la gran mentira de la vida. Una vez que acepten eso en sus corazones conocerán la paz')
console.log(Alex)
Alex.setComidaFavorita = 'Spaguetti'
Alex.getComidaFavorita 

console.log(`El conteo estatico de persona es: ${Persona._conteo}`)
Persona.getConteo
Persona.mensaje()
