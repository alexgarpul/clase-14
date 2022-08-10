class EscuelaDeCodigo {
    static #instancia
    
    nombre = ''
    ubicacion = ''
    fundacion = 1900

    constructor(nombre, ubicacion, fundacion){
        if(!!EscuelaDeCodigo.#instancia){
            return EscuelaDeCodigo.#instancia
        }
        EscuelaDeCodigo.#instancia = this 
        this.nombre = nombre
        this.ubicacion = ubicacion
        this.fundacion = fundacion
    }
}

const sonBata = new EscuelaDeCodigo('C13', 'Comuna 13', 2021)
const udea = new EscuelaDeCodigo('Universiad de Antioquia', 'Comuna 4', 1908)

console.log(`Mi escuela de codigo es ${sonBata.nombre} ubicada en ${sonBata.ubicacion}`)

console.log(`Mi escuela de codigo es ${udea.nombre} ubicada en ${udea.ubicacion}`)
