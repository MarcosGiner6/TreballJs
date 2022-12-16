export { crearApartadoEquipos };

import "../css/equipos.css";

const NUMEROS_EQUIPOS = {
    madrid: 76,
    valencia: 7272,
    atletico: 73,
    manchesterCity: 80,
    chelsea: 88,
    sevilla: 89,
    barcelona: 97,
    psg: 100,
    manchesterUnited: 102,
    granada: 151,
    villarreal: 162,
    espana: 19,
};

const KEY = "6cdef937e3abd907cf41a83bec638b30bda7bf6beb50a24c86fa484b754cbe28";

async function crearApartadoEquipos() {
    let divContainer = document.createElement("div");
    divContainer.id = "containerPrincipal";
    divContainer.classList.add("container");

    let datosJugadores = await getDatos(NUMEROS_EQUIPOS.valencia, KEY);

    divContainer.append(
        crearMenu(),
        crearApartadoJugadores(datosJugadores.result[0].players)
    );

    return divContainer;
}

async function getDatos(equipo, key) {
    const URI = `https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${equipo}&APIkey=${key}`;
    const response = await fetch(URI);
    return await response.json();
}

function crearApartadoJugadores(infoJugadores) {
    let divJugadores = document.createElement("div");
    divJugadores.classList.add("container-player");
    divJugadores.id = "container-player";

    let divJugadores2 = document.createElement("div");
    divJugadores2.classList.add("players");

    divJugadores.append(divJugadores2);

    infoJugadores.forEach((jugador) => {
        divJugadores2.append(crearDivJugador(jugador));
    });

    return divJugadores;
}

function crearDivJugador(jugador) {
    const texto = document.createElement("p");

    // texto.innerHTML = `
    //         <h3>${jugador.player_name}</h3>
    //         <img src="${jugador.player_image}" alt="">
    //         <p><b>Key</b> ${jugador.player_key}</p>
    //         <p><b>Numero</b> ${jugador.player_number}</p>
    //         <p><b>Pais</b> ${jugador.player_country}</p>
    //         <p><b>Posicion</b> ${jugador.player_type}</p>
    //         <p><b>Edad</b> ${jugador.player_age}</p>
    //         <p><b>Goles</b> ${jugador.player_goals}</p>
    //     `;

    texto.innerHTML = `<h3>${jugador.player_name}<h3>
                <img src="${jugador.player_image}" alt="">
                <p><b>Dorsal:</b> ${jugador.player_number}</p>
                <p><b>Posicion:</b> ${jugador.player_type}</p>
                <p><b>Edad:</b> ${jugador.player_age}</p>
                <p><b>Goles:</b> ${jugador.player_goals}</p>
    `;

    return texto;
}

function crearMenu() {
    let menu = document.createElement("div");
    menu.classList.add("teams");

    for (const key in NUMEROS_EQUIPOS) {
        let item = document.createElement("div");
        item.classList.add("team");
        item.innerHTML = key;
        item.addEventListener("click", async () => {
            document.querySelector("#container-player").remove();

            let datosJugadores = await getDatos(NUMEROS_EQUIPOS[key], KEY);
            crearApartadoJugadores(datosJugadores.result[0].players);
            document.querySelector("#containerPrincipal").append(crearApartadoJugadores(datosJugadores.result[0].players));
        });

        menu.append(item);
    }

    return menu;
}

