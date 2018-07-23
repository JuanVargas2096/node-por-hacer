const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de tareas por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}



const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea existente', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea existente', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}