document. getElementById("confirmar-compra").addEventListener("click", async ()=> {
    const carrito = JSON.parse(localStorage.getItem("products"));
    if(carrito && carrito.length > 0){
            const res = await fetch("tambori.dsic.upv.es:5432/carrito/comprar",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carrito)
        });
        if(res.ok){
            console.log("Compra realizada");
        }
        else{
            window.location.href = "fallo_conexion.html";
        }
    }
});

//https://nn-almacenes-inteligentes.netlify.app/carrito/comprar
