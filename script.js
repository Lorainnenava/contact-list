let lista = ["Lorena Ferrer", "Sofia Martes", "Daniel Padilla"];

function añadir(lista) {
    lista = lista.push("Rafael Pineda");
}
añadir(lista);

function borrar(lista){
    lista=lista.splice(1,1);
}
borrar(lista);

function imprimir(lista){
    return lista;
}

console.log(lista);
