fetch("data.json")
    .then(resp => resp.json())
    .then(productos => {
        console.log(productos);
        productos.forEach(producto => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h2>${producto.nombre}</h2>
                <p>${producto.precio}</p>
                <p>codigo: ${producto.id}</p>
                <p>${producto.img}</p>
                <hr/>
            `;
            lista.append(li);
        });
    }).catch(error => console.log(error))
