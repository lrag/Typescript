///////////
// ENUMS //
///////////

enum RolUsuario {
    Admin     = "ADMIN",
    User      = "EDITOR",
    Visitante = "GUEST"
}

class Usuario {

    constructor(
        public id:string,
        public nombre:string,
        public rol:RolUsuario
    ){}

}

console.log(RolUsuario.Admin)
console.log(RolUsuario.User)
console.log(RolUsuario.Visitante)
