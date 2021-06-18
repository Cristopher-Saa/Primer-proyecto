import OpcionesMenu from '../JavaScript/OpcionesMenu.js';

 const formulario=(titulo,labels)=>{
    var CajaFormulario=document.createElement('div');
    CajaFormulario.setAttribute('class','CajaFormulario');
    var Formularios=document.createElement('form');
    Formularios.setAttribute('class','formulario');
    var TituloForm=document.createElement('h1');
    TituloForm.setAttribute('class','TituloFormulario');
    var NombreTituloForm=document.createTextNode(titulo);
    TituloForm.appendChild(NombreTituloForm);
    var input=null,labelInfo=null,contenidolabel=null;
    labels.map((cd,i)=>{
        input=document.createElement('input');
        input.setAttribute('id',cd);
        input.setAttribute('placeholder',cd)
        input.setAttribute('key',i);
        labelInfo=document.createElement('label');
        labelInfo.setAttribute('for',cd);
        contenidolabel=document.createTextNode(cd);
        labelInfo.appendChild(contenidolabel);
        Formularios.appendChild(labelInfo);
        Formularios.appendChild(input);
        input=null,labelInfo=null;
    })
    CajaFormulario.appendChild(Formularios);
    return(CajaFormulario);
}
const CajasParrafos=(titulo,ContenidoParrafo)=>{
    var ElementoCajaDeParrafo=document.createElement('div');
            ElementoCajaDeParrafo.setAttribute('class','CajaParrafo');
            var ElementoTitulo=document.createElement('h1');// creamos un elemento
            ElementoTitulo.setAttribute('class','titulo');
            ElementoCajaDeParrafo.appendChild(ElementoTitulo);
            //var contenido=document.createTextNode('Se selecciono la opcion Ver alerta');// contenidos de los elementos
            var contenido=document.createTextNode(titulo);// contenidos de los elementos
            ElementoTitulo.appendChild(contenido);// agregar un elemento contenido dentro de dicha etiqueta
            var parrafo=document.createElement('p');// creamos un elemento
            parrafo.setAttribute('class','parrafo');
            var contenido2=document.createTextNode(ContenidoParrafo);
            parrafo.appendChild(contenido2);
            ElementoCajaDeParrafo.appendChild(parrafo);
            return(ElementoCajaDeParrafo);
}
const CajasImagenes=(rutaimagen,ContenidoDescripcion)=>{
    var ElementoCajaDeImagen=document.createElement('div');
            ElementoCajaDeImagen.setAttribute('class','CajaImagen');
            var Imagen=document.createElement('img');
            Imagen.setAttribute('src',rutaimagen);
            ElementoCajaDeImagen.appendChild(Imagen);
            var ParrafoDescripcion=document.createElement('p');
            ParrafoDescripcion.setAttribute('class','ParrafoDescripcion');
            var contenido3=document.createTextNode(ContenidoDescripcion);
            ParrafoDescripcion.appendChild(contenido3);
            ElementoCajaDeImagen.appendChild(ParrafoDescripcion);
            return(ElementoCajaDeImagen);

}
let ElementosMenu=OpcionesMenu.opciones;
const CrearMenu=()=>{
    var CajaMenu=document.querySelector('.panelMenu');
    var ElementoLista=document.createElement('ul');
    ElementoLista.setAttribute('id','lista');
    var length=Object.keys(ElementosMenu).length;
    console.log(length);
    for(let i=1;i<=length;i++){
        console.log(ElementosMenu[i]);
        var ElementoLi=document.createElement('li');
        var ElementoA=document.createElement('a');
        ElementoA.setAttribute('href',ElementosMenu[i].href);
        ElementoA.setAttribute('id',ElementosMenu[i].id);
        var NewTitulo=document.createTextNode(ElementosMenu[i].Titulo)
        ElementoA.appendChild(NewTitulo);
        ElementoLi.appendChild(ElementoA);      
        ElementoLista.appendChild(ElementoLi);

    }
    CajaMenu.appendChild(ElementoLista);

}
export default {formulario,CajasParrafos,CajasImagenes,CrearMenu};
