document. getElementById("confirmar-compra").addEventListener("click", async ()=> {
    const carrito = JSON.parse(localStorage.getItem("products"));
    console.log(carrito);
    if(carrito && carrito.length > 0){
            const res = await fetch("http://localhost:4000/carrito",{
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carrito)
        });
        if(res.ok){
            console.log("Compra realizada");
        }
        else{
            //window.location.href = "fallo_conexion.html";
        }
    }
});

//https://nn-almacenes-inteligentes.netlify.app/carrito-comprar
