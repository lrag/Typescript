///////////
// ENUMS //
///////////

//Los enums en TS son una castaña

enum RolUsuario {
    Admin     = "ADMIN",
    User      = "EDITOR",
    Visitante = "VISITANTE"
}

class Usuario {

    constructor(
        public id:number,
        public nombre:string,
        public rol:RolUsuario
    ){}

}

let usuario = new Usuario(1,"Ringo Starr", RolUsuario.Admin);

console.log(RolUsuario.Admin)
console.log(RolUsuario.User)
console.log(RolUsuario.Visitante)

//
//Si necesitamos algo más complejo podemos utilizar un simple objeto JS
//al que ya le podemos meter lo que nos de la gana
//

export const rolesUsuario = {
    admin : "ADMIN",
    User      : "EDITOR",
    Visitante : "VISITANTE",
    tienePermiso : function(usuario:Usuario):boolean{
        return true;
    }    
}

enum FormatoAudio {
    mp3   = "MP3",
    flac  = "FLAC",
    wav   = "wav"
}

export const formatosAudio = {
    mp3  : { name: 'mp3', compresion: true },
    flac : { name: 'flac', compresion: true },
    wav  : { name: 'wav', compresion: true }
}