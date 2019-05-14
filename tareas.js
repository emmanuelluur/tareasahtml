
/**
 *  `texto ${var}` = interpolacion de cadena
 */
let tareas = [
    { Tarea: "Ejemplo" }
];

let totalTareas = 0;
/**
 * Muestra listas en pantalla
 * vistas
 */
const Listar = () => {
    console.log(tareas)
    let lista = "";
    tareas.forEach((el, id) => {
        lista += `${id + 1} - ${el.Tarea} <button type = 'button' id = "edita" tareaId = ${id}>Editar</button>  <button type = 'button' id = "terminar" tareaId = ${id}>Terminar</button><hr><br>`;
    });
    document.getElementById("list").innerHTML = 
    lista +
        `<p>
            <button type="button" id='nueva'>Nueva tarea</button>
        </p>`;
}

/**
 * Muestra formularo para agregar tarea
 */

const NuevaTarea = () => {
    let form = `
        <p>Tarea: <input type = 'text' id = "tareaDesc" placeholder = 'tarea'></p>
        <p><button id = "guardar" type = "button">Guardar</button> <button id = "atras" type = "button">Regresar</button></p>
     `;
    document.getElementById("list").innerHTML = form;
}

const EditaTarea = (id) => {
    let valor = tareas[id].Tarea
    let form = `
     
        <p>Tarea: <input type = 'text' id = "tareaDesc" placeholder = 'tarea' value = '${valor}'></p>
        <p>
        <button id = "guardarTarea" tareaId = '${id}' type = "button">Guardar</button> 
        <button id = "atras" type = "button">Regresar</button>
        </p>
    
     `;
    document.getElementById("list").innerHTML = form;
}
/**
 * Guarda nueva tarea
 * controller
 */

const Guarda = (tarea) => {
    tareas.push({ Tarea: tarea })
    Listar();
    TotalTareas();
}

/**
 * Termina tarea
 */

const Terminar = (id) => {
    tareas.splice(id, 1);
    Listar();
    TotalTareas();
}

/**
 * Edita tarea
 */

const Editar = (id, valor) => {
    tareas.splice(id, 1, { Tarea: valor });
    Listar();
    TotalTareas();
}

const TotalTareas = () => {
    totalTareas = tareas.length;
    document.getElementById("contador").innerHTML = totalTareas;
    console.log(totalTareas)
}