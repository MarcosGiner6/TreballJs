import { Route } from "../utils/router.js";

import { MenuTemplate } from "../components/menu/menu.js";
import { CardTemplate } from "../components/cards/cards.js";

import './styles.scss';
import { crearApartadoEquipos } from "./equipos.js";
import { LoginForm } from "../pages/login.js";

(()=>{
    
    document.addEventListener("DOMContentLoaded", async ()=>{
        const main = document.querySelector('#main');
        main.append(MenuTemplate());

        main.append(await crearApartadoEquipos());

    });
    
})();