export class Persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    profesion: String;
    urlgh: String;
    urllinkedin: String;
    urlinstagram: String;
    urlcv: String;
    sobremi: String;

    constructor(nombre: String, apellido: String, img: String, profesion: String, urlgh: String, 
        urllinkedin: String, urlinstagram: String, urlcv:String, sobremi: String){
            this.nombre = nombre;
            this.apellido = apellido;
            this.img = img;
            this.profesion = profesion;
            this.urlgh = urlgh;
            this.urllinkedin = urllinkedin;
            this.urlinstagram = urlinstagram;
            this.urlcv = urlcv;
            this.sobremi = sobremi;
        }
        
}