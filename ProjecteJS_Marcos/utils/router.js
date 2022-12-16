import { LoginForm } from "../pages/login.js";
import { home } from "../pages/home.js";
import { crearApartadoEquipos } from "../src/equipos.js";

export {Route};

function Route(ruta) {

    let main = document.querySelector('#main');

    switch(ruta){

        case ('#/'):
            main.innerHTML='';
            main.append(home());
            main.append(LoginForm());
        break;

        case ('#/equipos'):
            main.innerHTML='';
            main.append(crearApartadoEquipos());
        break;
    }
}