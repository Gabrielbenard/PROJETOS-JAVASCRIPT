function getadmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value ==='Admin') {
            admins.push(key);
        }
    }
    return admins
}

const usuarios = new Map();

usuarios.set('luiz', 'Admin');
usuarios.set('lucas', 'Admin');
usuarios.set('gabriel', 'usuario');

console.log(getadmins(usuarios));   