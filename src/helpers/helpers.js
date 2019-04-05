const hbs=require('hbs');

hbs.registerHelper('resultadoDeCreacion',()=>{
    const funciones=require('./../funciones')
    if(!funciones.crear){
        resultado='usuario creado con éxito!'
    } else {
        resultado='usuario ya existe!'+'<br> Intente nuevamente'
    }
    return(resultado)
})

hbs.registerHelper('listar',()=>{
    listaCursos=require('./../../listado.json')
    let texto = "<table class='table table-striped table-hover'> \
        <thead class='thead-dark'> \
            <th scope='col'>Id</th> \
            <th scope='col'>Nombre</th> \
            <th scope='col'>Password</th> \
        </thead> \
    <tbody>";


    listaCursos.forEach(usuario => {texto=
        texto+
         "<tr> "+
        '<td>'+usuario.id+'</td>'+
        '<td>'+usuario.username+'</td>'+
        '<td>'+usuario.password+'</td>'+
        '</tr>';
    })
    texto=texto+'</tbody></table>';

    return texto;
})