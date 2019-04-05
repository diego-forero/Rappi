const fs=require('fs');
listaUsuarios=[];

// let obtenerPromedio=(nota_uno,nota_dos,nota_tres)=>(nota_uno+nota_dos+nota_tres)/3;

const crear=(usuario)=>{
    listar();
    let user={
        username:usuario.username,
        password:usuario.password
    };
    // let duplicado =listaUsuarios.find(nom=>nom.id==usuario.id);
    // if(!duplicado){
    listaUsuarios.push(user);
    // console.log(listaUsuarios)
    guardar();
    // } else {
    //     console.log('El usuario ya existe! Intente nuevamente')
    // }
    // return(duplicado)
}

const listar = ()=>{
    try{
        listaUsuarios=require('./../listado.json')  
        
    } catch(error){
        listaUsuarios=[];
    }
}

const guardar=()=>{
    let datos=JSON.stringify(listaUsuarios);
    fs.writeFile('listado.json',datos,(err)=>{
        if(err) throw (err);
        console.log('usuario creado con exito!!')
    })
}


module.exports={
    crear,
    listar,
    guardar
}
