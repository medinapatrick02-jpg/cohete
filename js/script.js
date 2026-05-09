let altura = 0;
let meta = 300;

function subir(seleccion) {

    let avance = Math.floor(Math.random() * 50);

    if (seleccion === 1) {

        altura -= -avance;

        if (altura > meta) altura = meta;

        document.getElementById("cohete").style.transform =
            `translate(-50%, -${altura}px)`;

        setTimeout(() => {
            document.getElementById("cohete").style.transform =
                `translate(-50%, -${altura}px)`;
        }, 100);

        document.getElementById("altura").textContent = "Altura: " + altura;
    }

    if (altura < 60) {
        document.getElementById("capa").textContent = "🌍 Núcleo interno";
    } else if (altura < 120) {
        document.getElementById("capa").textContent = "🔥 Núcleo externo";
    } else if (altura < 180) {
        document.getElementById("capa").textContent = "🌋 Manto inferior";
    } else if (altura < 240) {
        document.getElementById("capa").textContent = "Espacio Exterior 👾";
    } else if (altura < 280) {
        document.getElementById("capa").textContent = "Galaxia 🌌";
    } else {
        document.getElementById("capa").textContent = "Via Lactea 👽";
    }

    if (altura >= meta) {
        document.getElementById("resultado").textContent =
            "🚀 Saliste de la Tierra";
        document.getElementById("altura").textContent = meta;
    }
}