//document. getElementById("confirmar-compra").addEventListener("click", async ()=> {
//    const carrito = JSON.parse(localStorage.getItem("products"));
//    if(carrito && carrito.length > 0){
//            const res = await fetch("https://tambori.dsic.upv.es/carrito/comprar",{
//            method: "POST",
//            headers: {
//                "Content-Type": "application/json"
//            },
//            body: JSON.stringify(carrito)
//        });
//        if(res.ok){
//            console.log("Compra realizada");
//        }
//        else{
//            window.location.href = "fallo_conexion.html";
//        }
//    }
//});

//https://nn-almacenes-inteligentes.netlify.app/carrito/comprar
console.clear();

document. getElementById("confirmar-compra").addEventListener("click", async ()=> {
    const carrito = JSON.parse(localStorage.getItem("products"));

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://steady-mermaid-8a8d30.netlify.app/carrito/comprar");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    const body = JSON.stringify({carrito});

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 201) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

    xhr.send(body);
});
    