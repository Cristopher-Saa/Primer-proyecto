import OpcionesMenu from '../JavaScript/OpcionesMenu.js';

 const formulario=(titulo,labels,titulobtn)=>{
    var CajaFormulario=document.createElement('div');
    CajaFormulario.setAttribute('class','CajaFormulario');
    var Formularios=document.createElement('form');
    Formularios.setAttribute('class','Formulario');
    var TituloForm=document.createElement('h1');
    TituloForm.setAttribute('class','TituloFormulario');
    var NombreTituloForm=document.createTextNode(titulo);
    TituloForm.appendChild(NombreTituloForm);
    Formularios.appendChild(TituloForm);
    var input=null,labelInfo=null,contenidolabel=null,CajaInputs=null;
    labels.map((cd,i)=>{
        CajaInputs=document.createElement('div');
        CajaInputs.setAttribute('class','input-group');
        input=document.createElement('input');
        input.setAttribute('id',cd);
        //input.setAttribute('placeholder',cd)
        input.setAttribute('key',i);
        labelInfo=document.createElement('label');
        labelInfo.setAttribute('for',cd);
        contenidolabel=document.createTextNode(cd);
        labelInfo.appendChild(contenidolabel);
        CajaInputs.appendChild(labelInfo);
        CajaInputs.appendChild(input);
        Formularios.appendChild(CajaInputs);
        CrearEventosInputs(input,'focusin','focusout');
        input=null,labelInfo=null;
    })
    var NewButton=document.createElement('input');
    NewButton.setAttribute('type','button');
    NewButton.setAttribute('value',titulobtn);
    CrearEventoBtn(NewButton);
    Formularios.appendChild(NewButton);
    CajaFormulario.appendChild(Formularios);
    return(CajaFormulario);
}

function CrearEventosInputs(elemento,evento,evento2){
    elemento.addEventListener(evento,(e)=>{
        var Evlabel=document.querySelector('label[for='+e.target.id+']');
        Evlabel.setAttribute('class','active');
    });
    elemento.addEventListener(evento2,(e)=>{
        var Evlabel=document.querySelector('label[for='+e.target.id+']');
        if(elemento.value!=0){}
        else{Evlabel.classList.remove('active');
        }
    });

    }
function CrearEventoBtn(btn){
    btn.addEventListener('click',(e)=>{
        if(e.target.value=='Generar'){
            if(!document.querySelector('.CajaTabla')){

                var filas=document.getElementById('Filas').value;
            var columnas=document.getElementById('Columnas').value;
            var titulo=document.getElementById('TituloTabla').value;
            var newtabla=CrearTablas(filas,columnas,titulo);
          //  console.log(newtabla);
            const padre=document.querySelector('.contenedor');
            padre.appendChild(newtabla);

            }
            
        } 
    });

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
const CrearTablas=(filas,columnas,titulo)=>{
   // console.log(filas,+'------>'+columnas);
    var ElementoCajaTabla=document.createElement('div');
    ElementoCajaTabla.setAttribute('class','CajaTabla');
    var ElementoTituloTab=document.createElement('h1');
    ElementoTituloTab.setAttribute('class','TituloTabla');
    var contenidoTitulo=document.createTextNode(titulo);
    ElementoTituloTab.appendChild(contenidoTitulo);
    var ElementoTabla=document.createElement('table');
    ElementoTabla.setAttribute('class','tabla');
    var fil=[],col=[];
    for (let i=0; i<filas; i++){
        fil[i]=document.createElement('tr');
        fil[i].setAttribute('class','fila');
        ElementoTabla.appendChild(fil[i]);
    for(let j=0; j<columnas; j++){
        col[j]=document.createElement('td');
        col[j].setAttribute('class','columna');
        fil[i].appendChild(col[j]);
        
    }
    }
    ElementoCajaTabla.appendChild(ElementoTituloTab);
    ElementoCajaTabla.appendChild(ElementoTabla);
    return(ElementoCajaTabla);

}

    


export default {formulario,CajasParrafos,CajasImagenes,CrearMenu};
