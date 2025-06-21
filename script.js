document.addEventListener('DOMContentLoaded', function() {
    // Datos de los brawlers (ejemplo)
    const brawlers = [
        {
            id: 1,
            name: "Shelly",
            rarity: "common",
            class: "Tiradora",
            health: 3800,
            attack: 320,
            super: 1400,
            image: "images/brawlers/shelly.png",
            abilities: [
                { name: "Ataque: Disparo múltiple", description: "Dispara 5 perdigones que infligen daño" },
                { name: "Super: Superdisparo", description: "Dispara 9 perdigones que infligen más daño y destruyen obstáculos" },
                { name: "Gadget: Granada de concha", description: "Lanza una granada que inflige 1000 de daño" }
            ]
        },
        {
            id: 2,
            name: "Colt",
            rarity: "rare",
            class: "Tirador",
            health: 2800,
            attack: 300,
            super: 300,
            image: "images/brawlers/colt.png",
            abilities: [
                { name: "Ataque: Ráfaga", description: "Dispara 6 balas rápidas en línea recta" },
                { name: "Super: Balas de plata", description: "Dispara 12 balas de largo alcance que destruyen obstáculos" },
                { name: "Gadget: Carrera", description: "Aumenta la velocidad de movimiento un 30% durante 3 segundos" }
            ]
        },
        {
            id: 3,
            name: "Bull",
            rarity: "rare",
            class: "Tanque",
            health: 5600,
            attack: 400,
            super: 1200,
            image: "images/brawlers/bull.png",
            abilities: [
                { name: "Ataque: Escopeta", description: "Dispara 5 perdigones a corta distancia" },
                { name: "Super: Carga", description: "Carga hacia adelante, infligiendo daño y rompiendo obstáculos" },
                { name: "Gadget: Caja fuerte", description: "Recupera 1500 de salud instantáneamente" }
            ]
        },
        {
            id: 4,
            name: "Brock",
            rarity: "super-rare",
            class: "Tirador",
            health: 2600,
            attack: 1100,
            super: 440,
            image: "images/brawlers/brock.png",
            abilities: [
                { name: "Ataque: Misil", description: "Dispara un misil que explota al impactar" },
                { name: "Super: Lluvia de cohetes", description: "Lanza una ráfaga de cohetes que cubren un área amplia" },
                { name: "Gadget: Botas cohete", description: "Salta sobre obstáculos para reposicionarse" }
            ]
        },
        {
            id: 5,
            name: "El Primo",
            rarity: "super-rare",
            class: "Tanque",
            health: 6000,
            attack: 360,
            super: 800,
            image: "images/brawlers/el-primo.png",
            abilities: [
                { name: "Ataque: Golpes", description: "Da cuatro puñetazos rápidos a corta distancia" },
                { name: "Super: Salto estelar", description: "Salta a una ubicación, infligiendo daño y aturdimiento" },
                { name: "Gadget: Cinturón de asteroides", description: "Aumenta la velocidad de movimiento un 25% durante 4 segundos" }
            ]
        },
        {
            id: 6,
            name: "Poco",
            rarity: "epic",
            class: "Apoyo",
            health: 3600,
            attack: 660,
            super: 840,
            image: "images/brawlers/poco.png",
            abilities: [
                { name: "Ataque: Nota poderosa", description: "Lanza ondas sónicas que atraviesan obstáculos" },
                { name: "Super: Solo de curación", description: "Cura a todos los aliados en un área grande" },
                { name: "Gadget: Amplificador", description: "El siguiente ataque inflige 500 de daño adicional" }
            ]
        },
        {
            id: 7,
            name: "Rosa",
            rarity: "epic",
            class: "Tanque",
            health: 5400,
            attack: 480,
            super: 300,
            image: "images/brawlers/rosa.png",
            abilities: [
                { name: "Ataque: Golpes de boxeo", description: "Da tres golpes rápidos a corta distancia" },
                { name: "Super: Plantas resistentes", description: "Reduce el daño recibido un 70% durante 3 segundos" },
                { name: "Gadget: Fertilizante", description: "Cura 800 de salud por segundo durante 4 segundos" }
            ]
        },
        {
            id: 8,
            name: "Carl",
            rarity: "mythic",
            class: "Luchador",
            health: 4200,
            attack: 580,
            super: 300,
            image: "images/brawlers/carl.png",
            abilities: [
                { name: "Ataque: Pico volador", description: "Lanza un pico que regresa como un boomerang" },
                { name: "Super: Torbellino", description: "Gira rápidamente infligiendo daño y rompiendo obstáculos" },
                { name: "Gadget: Vuelo de águila", description: "El siguiente ataque atraviesa obstáculos y enemigos" }
            ]
        },
        {
            id: 9,
            name: "Leon",
            rarity: "legendary",
            class: "Asesino",
            health: 3200,
            attack: 480,
            super: 300,
            image: "images/brawlers/leon.png",
            abilities: [
                { name: "Ataque: Cuchillas giratorias", description: "Lanza cuatro cuchillas que se expanden" },
                { name: "Super: Camuflaje", description: "Se vuelve invisible durante 8 segundos" },
                { name: "Gadget: Clone", description: "Deja un clon que explota al ser destruido" }
            ]
        },
        {
            id: 10,
            name: "Sandy",
            rarity: "legendary",
            class: "Apoyo",
            health: 3800,
            attack: 360,
            super: 300,
            image: "images/brawlers/sandy.png",
            abilities: [
                { name: "Ataque: Golpes de arena", description: "Lanza tres ráfagas de arena que atraviesan enemigos" },
                { name: "Super: