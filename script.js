function calcular() {

    var gabinete = document.getElementById("gabinete").value;
    var procesador = document.getElementById("procesador").value;
    var discoduro = document.getElementById("discoduro").value;
    var memoriaram = document.getElementById("memoriaram").value;
    var monitor = document.getElementById("monitor").value;

    var total = 0;

    if (gabinete == "ninguna") {
        alert("Seleccione un gabinete");
        return;
    } else if (gabinete == "minitorre") {
        total += 700;
    } else if (gabinete == "torre") {
        total += 1200;
    } else if (gabinete == "desktop") {
        total += 550;
    } else if (gabinete == "gamer") {
        total += 2500;
    }

    if (procesador == "ninguna") {
        alert("Seleccione un procesador");
        return;
    } else if (procesador == "celeron") {
        total += 900;
    } else if (procesador == "inteltres") {
        total += 1500;
    } else if (procesador == "intelcinco") {
        total += 3500;
    } else if (procesador == "intelsiete") {
        total += 5000;
    }

    if (discoduro == "ninguna") {
        alert("Seleccione un disco duro");
        return;
    } else if (discoduro == "500GB") {
        total += 500;
    } else if (discoduro == "750GB") {
        total += 800;
    } else if (discoduro == "1TB") {
        total += 1000;
    } else if (discoduro == "250SSD") {
        total += 900;
    } else if (discoduro == "500SSD") {
        total += 1380;
    }

    if (memoriaram == "ninguna") {
        alert("Seleccione una memoria RAM");
        return;
    } else if (memoriaram == "4GB") {
        total += 600;
    } else if (memoriaram == "8GB") {
        total += 1050;
    } else if (memoriaram == "16GB") {
        total += 1950;
    }

    if (monitor == "ninguna") {
        alert("Seleccione un monitor");
        return;
    } else if (monitor == "17pulgadas") {
        total += 500;
    } else if (monitor == "19pulgadas") {
        total += 800;
    } else if (monitor == "21.5pulgadas") {
        total += 1000;
    } else if (monitor == "24pulgadas") {
        total += 1300;
    } else if (monitor == "27pulgadas") {
        total += 1700;
    } else if (monitor == "32pulgadas") {
        total += 2000;
    }

    if (document.getElementById())

    document.getElementById("total").innerText = "Total: $" + total;
}