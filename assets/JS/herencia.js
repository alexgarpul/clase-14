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

    constructor(nombre,edad, frase) {
       
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
        console.log(`Yo soy ${this.nombre} y mi frase favorita es ${this.frase}`)
    }

}

class Heroe extends Persona{
    clan = 'Sin Clan'
    superHeroe = ''

    constructor(superHeroe, nombre, edad, frase, clan){
        super(superHeroe, nombre, edad, frase, clan)
        this.clan = clan
        this.superHeroe = superHeroe
    }
    quiensoy(){
        console.log(`Soy ${this.superHeroe} y pertenezco a ${this.clan}`)
    }
}

const spiderman = new Heroe(
    'Spiderman',
    'Peter Parker',
    22,
    'Soy Peter Parker',
    'The Avengers'
)

console.log(spiderman)
spiderman.getComidaFavorita = 'Un festin'
spiderman.setComidaFavorita

const alex = new Persona('Alex', 21, 'Mi vida es una eterna Comedia')
console.log(alex)
alex.getComidaFavorita = 'Spaguetti'
alex.setComidaFavorita


const thor = new Heroe('El Dios del Trueno', 'Thor Odinson', 3500, 'Ven a mí Rompe Tormentas', 'The Avengers')
console.log(thor)
thor.getComidaFavorita = 'Hamburguesa'
thor.setComidaFavorita


spiderman.quiensoy()
alex.quiensoy()
thor.quiensoy()
