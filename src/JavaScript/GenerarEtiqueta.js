 function formulario(titulo,labels){
    var CajaFormulario=document.createElement('div');
    CajaFormulario.setAttribute('class','CajaFormulario');
    var Formularios=document.createElement('form');
    Formularios.setAttribute('class','formulario');
    var TituloForm=createElement('h1');
    var TituloForm=setAttribute('class','TituloFormulario')
    var NombreTituloForm=document.createTextNode(titulo);
    TituloForm.appendChild(NombreTituloForm);
    var input=null,labelInfo=null;
    labels.map((cd,i)=>{
    input=document.createElement('input');
    input.setAttribute('id',cd);
    input.setAttribute('key',i);
    labelInfo=document.createElement('label');
    labelInfo.setAttribute('for',cd);
    Formularios.appendChild(input);
    Formularios.appendChild(labelInfo);
    input=null,labelInfo=null;
    })
    CajaFormulario.appendChild(Formularios);
    return(Formularios);
}
module.exports={formulario};
