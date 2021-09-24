import OpcionesMenu from '../JavaScript/OpcionesMenu.js';
import Pintar from '../JavaScript/PintarTabla.js';
import Eventos from '../JavaScript/procesos.js';
import Modal from '../JavaScript/Modales.js'
let opcionTabla='';
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
    var Nombres=['Pintar Tablas','Rellenar Tablas'];
    var opc=CrearRadioButton(Nombres,'Seleccion');
    CrearEventoRadio(opc); 
    Formularios.appendChild(opc);
    var input=null,labelInfo=null,contenidolabel=null,CajaInputs=null;
    labels.map((cd,i)=>{
        CajaInputs=document.createElement('div');
        CajaInputs.setAttribute('class','input-group');
        input=document.createElement('input');
        input.setAttribute('class','inputform');
        input.setAttribute('id',cd);
        //input.setAttribute('placeholder',cd)
        input.setAttribute('key',i);
        labelInfo=document.createElement('label');
        labelInfo.setAttribute('class','labelform');
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
    CrearEventoRadio('form'); 
    return(CajaFormulario);
}

function CrearEventosInputs(elemento,evento,evento2){
    elemento.addEventListener(evento,(e)=>{
        var Evlabel=document.querySelector('label[for='+e.target.id+']');
        //Evlabel.setAttribute('class','active');
        Evlabel.className+=' active';
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
        if(e.target.value=='X'){
            var padre=document.querySelector('.contenedor');
            padre.removeChild(document.querySelector('.CajaTabla'));
        }
        if(e.target.id=='btnagregar'){
            //alert('Desplegar el Modal');
            var modalform=formulariomodal(['Nombre','Nota-1','Nota-2','Nota-3','Nota-4','Nota-5']);
            Modal.NewModal('Registro Alumnos',modalform);
            mostrarmodal('activo');
        }
    });
        
}

function mostrarmodal(estado) {
    var modalcontainer=document.querySelector('.modalcontainer');
    if(estado=='activo'){
        modalcontainer.style.visibility='visible';
        modalcontainer.style.opacity='1';
    }
    else{
        modalcontainer.style.visibility='hidden';
        modalcontainer.style.opacity='0';
    }
    
}

function formulariomodal(labels) {
    var CajaFormulario=document.createElement('div');
    CajaFormulario.setAttribute('class','CajaFormulario');
    var Formularios=document.createElement('form');
    Formularios.setAttribute('class','Formulario');
    Formularios.setAttribute('id','formModal');
    var input=null,labelInfo=null,contenidolabel=null,CajaInputs=null;
    labels.map((cd,i)=>{
        CajaInputs=document.createElement('div');
        CajaInputs.setAttribute('class','input-group');
        input=document.createElement('input');
        input.setAttribute('class','inputform');
        input.setAttribute('id',cd);
        //input.setAttribute('placeholder',cd)
        input.setAttribute('key',i);
        labelInfo=document.createElement('label');
        labelInfo.setAttribute('class','labelform');
        labelInfo.setAttribute('for',cd);
        contenidolabel=document.createTextNode(cd);
        labelInfo.appendChild(contenidolabel);
        CajaInputs.appendChild(labelInfo);
        CajaInputs.appendChild(input);
        Formularios.appendChild(CajaInputs);
        CrearEventosInputs(input,'focusin','focusout');
        input=null,labelInfo=null;
    })
    
    CajaFormulario.appendChild(Formularios);
    CrearEventoRadio('form'); 
    return(CajaFormulario);
}
function CrearEventoRadio(ListOpcion){
    //var ListOpcion='';
    var opcion='';
    if(ListOpcion.id==='CajaRadioPintar'){
        //ListOpcion= document.getElementById('CajaRadioPintar');
        ListOpcion.addEventListener('mousedown',(e)=>{
        opcion=e.target.id;
        if(opcion!=''){
            CrearEventoTabla(opcion);
        }
    });
    }
    else if(ListOpcion.id==='CajaRadioSeleccion'){
        
        console.log('Viene -->'+ListOpcion.id);
        ListOpcion.addEventListener('mousedown',(e)=>{
            opcion=e.target.id;
            if(opcion==='OpcionSeleccion0'){
                opcionTabla='Pintar';
                
            }else if(opcion==='OpcionSeleccion1'){
                opcionTabla='Seleccion';
                let InputFilas=document.getElementById('Columnas');
                InputFilas.setAttribute('value','5');
            }
        });
    }
    
}
function CrearEventoTabla(opcion){
    var NTabla=document.querySelector('.tabla');
    var filas=NTabla.rows.length;
    var columnas=NTabla.rows[0].cells.length;

    NTabla.addEventListener('mouseover',(e)=>{
        var Nf=e.target.classList[1];
        var Nc=e.target.classList[2];
        if(opcion=='OpcionPintar0'){
            Pintar.PintarFila(filas,columnas,Nf,NTabla);
        }
        if(opcion=='OpcionPintar1'){
            Pintar.PintarColumna(filas,columnas,Nc,NTabla);
        }
        if(opcion=='OpcionPintar2'){
            Pintar.PintarCruz(filas,columnas,Nf,Nc,NTabla);
        }
        if(opcion=='OpcionPintar3'){
            Pintar.PintarX(filas,columnas,Nf,Nc,NTabla);
        }
        if(opcion=='OpcionPintar4'){
            Pintar.PintarAsterisco(filas,columnas,Nf,Nc,NTabla);
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
    var Nombres=['Pintar Filas','Pintar Columnas','Pintar Cruz','Pintar X','Pintar Asterisco'];
    var opc=CrearRadioButton(Nombres,'Pintar');
    CrearEventoRadio(opc); 
    var ElementoTabla=document.createElement('table');
    ElementoTabla.setAttribute('class','tabla');
    var fil=[],col=[],valor='';
    for (let i=0; i<filas; i++){
        fil[i]=document.createElement('tr');
        fil[i].setAttribute('class','fila');
        ElementoTabla.appendChild(fil[i]);
    for(let j=0; j<columnas; j++){
        if(opcionTabla==='Pintar'){
            
            col[j]=document.createElement('td');
            valor=document.createTextNode(i+','+j);

        }else if(opcionTabla==='Seleccion'){
            if(i===0){
                col[j]=document.createElement('th');
                if(j<4){
                    valor=document.createTextNode('Nota '+(j+1));
                }else{valor=document.createTextNode('PROMEDIO');
            }
                
                
            }else{
                col[j]=document.createElement('td');
                if(j<4){
                    valor=document.createElement('input');
                    valor.setAttribute('id','campo'+i+j);
                    valor.setAttribute('type','number');
                    valor.setAttribute('min','0');
                    valor.setAttribute('max','100');
                    Eventos.eventoInput(valor,i,columnas);
                    Eventos.eventoPromedio(valor,i);
                }else{
                    valor=document.createElement('label');
                    valor.appendChild(document.createTextNode('0'));
                    valor.setAttribute('id','Promedio'+i);
                }
                
            }
            

        }
        col[j].setAttribute('class','columna fil-'+i+' col-'+j);
        col[j].appendChild(valor);
        fil[i].appendChild(col[j]);
        
    }
    }
    var CajaBtnCerrar=document.createElement('div');
    CajaBtnCerrar.setAttribute('class','CajaBtnCerrar');
    var ElementoBtn=document.createElement('input');
    ElementoBtn.setAttribute('type','button');
    ElementoBtn.setAttribute('class','BtnCerrarTabla');
    ElementoBtn.setAttribute('value','X');
    CrearEventoBtn(ElementoBtn);
    CajaBtnCerrar.appendChild(ElementoBtn);
    ElementoCajaTabla.appendChild(CajaBtnCerrar);
    ElementoCajaTabla.appendChild(ElementoTituloTab);
    ElementoCajaTabla.appendChild(opc);
    ElementoCajaTabla.appendChild(ElementoTabla);
    return(ElementoCajaTabla);

}

//El contenedor de la pantalla registro
function CrearRegistro(Titulo){

    var ElementoCajaTabla=document.createElement('div');
    ElementoCajaTabla.setAttribute('class','CajaTabla');
    var ElementoTituloTab=document.createElement('h1');
    ElementoTituloTab.setAttribute('class','TituloTabla');
    var contenidoTitulo=document.createTextNode(Titulo);
    ElementoTituloTab.appendChild(contenidoTitulo);
    var ElementoSubMenu=document.createElement('div');
    ElementoSubMenu.setAttribute('class','Csubmenu');
    var CajaBoton=document.createElement('div');
    CajaBoton.setAttribute('class','btns');
    var btnmenu=document.createElement('button');
    btnmenu.setAttribute('class','btnmenu');
    btnmenu.setAttribute('id','btnagregar');
    //btnmenu.setAttribute('type','button');
    //btnmenu.setAttribute('value','Agregar');
    var icon=document.createElement('i');
    icon.setAttribute('class','fas fa-plus-square');
    icon.setAttribute('id','btnagregar');
    btnmenu.appendChild(icon);
    CajaBoton.appendChild(btnmenu);
    ElementoSubMenu.appendChild(CajaBoton);
    CrearEventoBtn(btnmenu);
    var ElementoTabla=document.createElement('table');
    ElementoTabla.setAttribute('class','tabla');
    ElementoTabla.setAttribute('id','tablaRegistros');
    var fil=[],col=[],valor='';
    let filas=1,columnas=7;
    for (let i=0; i<filas; i++){
        fil[i]=document.createElement('tr');
        fil[i].setAttribute('class','fila');
        ElementoTabla.appendChild(fil[i]);
    for(let j=0; j<columnas; j++){
           if(i===0){
                col[j]=document.createElement('th');
                if(j>0 && j<6){
                    valor=document.createTextNode('Nota '+(j));
                }else if(j===0){
                    valor=document.createTextNode('NOMBRE');
                }else{valor=document.createTextNode('PROMEDIO');
            }}
            else{
                col[j]=document.createElement('td');
                if(j>0 && j<6){
                    valor=document.createElement('input');
                    valor.setAttribute('id','campo'+i+j);
                    valor.setAttribute('type','number');
                    valor.setAttribute('min','0');
                    valor.setAttribute('max','100');
                    Eventos.eventoInput(valor,i,columnas);
                    Eventos.eventoPromedio(valor,i);
                }else if(j===0){
                    valor=document.createElement('label');
                    valor.setAttribute('id','Promedio'+i);
                }else{
                    valor=document.createElement('label');
                    valor.appendChild(document.createTextNode('0'));
                    valor.setAttribute('id','Promedio'+i);
                }
                
            }
            

        
        col[j].setAttribute('class','columna fil-'+i+' col-'+j);
        col[j].appendChild(valor);
        fil[i].appendChild(col[j]);
        
    }
    }
    ElementoCajaTabla.appendChild(ElementoTituloTab);
    ElementoCajaTabla.appendChild(ElementoSubMenu);
    ElementoCajaTabla.appendChild(ElementoTabla);
    return ElementoCajaTabla;
}


function CrearRadioButton(Nombres,id){
    var ElementoCajaRad=document.createElement('div');
    ElementoCajaRad.setAttribute('class','CajaRadio');
    ElementoCajaRad.setAttribute('id','CajaRadio'+id);
    for(let i=0;i<Nombres.length;i++){
        var newInput=document.createElement('input');
        var newLabel=document.createElement('label');
        newInput.setAttribute('type','radio');
        newInput.setAttribute('id','Opcion'+id+[i]);
        newInput.setAttribute('name','Group');
        var name=document.createTextNode(Nombres[i]);
        newLabel.appendChild(newInput);
        newLabel.appendChild(name);
        ElementoCajaRad.appendChild(newLabel);

    }
    return ElementoCajaRad;
}
function CuadroEstadistica() {
    var CajaEstadistica=document.createElement('div');
    CajaEstadistica.setAttribute('class','CEstadistica');
    var tarjeta1=tarjeta('Promedio excelencia','PromedioE','0','0','excelencia');
    var tarjeta2=tarjeta('Promedio Merito','PromedioM','0','0','merito');
    var tarjeta3=tarjeta('Promedio Reprobados','PromedioR','0','0','reprobado');
    CajaEstadistica.appendChild(tarjeta1);
    CajaEstadistica.appendChild(tarjeta2);
    CajaEstadistica.appendChild(tarjeta3);
    return CajaEstadistica;
}

function tarjeta(titulo,color,cantidad,Promedio,id) {
    var CajaTarjeta=document.createElement('div');
    CajaTarjeta.setAttribute('class','Tarjeta');
    var TituloTarjeta=document.createElement('h1');
    TituloTarjeta.setAttribute('class','TituloTarjeta '+color);
    var contenidoTitulo=document.createTextNode(titulo);
    TituloTarjeta.appendChild(contenidoTitulo);
    var CajaNA=document.createElement('div');
    CajaNA.setAttribute('class','CajaA');
    var CajaPA=document.createElement('div');
    CajaPA.setAttribute('class','CajaA');
    var NumeroAlumnos=document.createElement('h2');
    NumeroAlumnos.setAttribute('class','N-Alumnos');
    NumeroAlumnos.setAttribute('id','Nid'+id);
    var contenidoNA=document.createTextNode(cantidad);
    NumeroAlumnos.appendChild(contenidoNA);
    var PromedioAlumnos=document.createElement('h2');
    PromedioAlumnos.setAttribute('class','P-Alumnos');
    PromedioAlumnos.setAttribute('id','Pid'+id);
    var contenidoPA=document.createTextNode(Promedio);
    PromedioAlumnos.appendChild(contenidoPA);
    var icono=document.createElement('i');
    icono.setAttribute('class','fas');
    icono.setAttribute('id','Iid'+id);
    var LabelNumero=document.createElement('label');
    LabelNumero.setAttribute('class','Label-Numero');
    var contenidoLN=document.createTextNode('N° Alumnos');
    LabelNumero.appendChild(contenidoLN);
    CajaNA.appendChild(NumeroAlumnos);
    CajaNA.appendChild(LabelNumero);
    var LabelPromedio=document.createElement('label');
    LabelPromedio.setAttribute('class','Label-Promedio');
    var contenidoPN=document.createTextNode('Promedio');
    LabelPromedio.appendChild(contenidoPN);
    CajaPA.appendChild(PromedioAlumnos);
    CajaPA.appendChild(LabelPromedio);
    CajaPA.appendChild(icono);
    CajaTarjeta.appendChild(TituloTarjeta);
    CajaTarjeta.appendChild(CajaNA);
    CajaTarjeta.appendChild(CajaPA);
    return CajaTarjeta;
}

    


export default {formulario,CajasParrafos,CajasImagenes,CrearMenu,CrearRegistro, mostrarmodal,CuadroEstadistica};
