import ContenidoMenu from '../JavaScript/ContenidoMenu.js';
import GenerarEtiqueta from '../JavaScript/GenerarEtiqueta.js';
var ElementosContenido=ContenidoMenu.opciones;
const padre=document.querySelector('.contenedor');
let clase='titulo';
class visualizador{
    constructor(){
        this.NombreTitulo=null;    
        this.ContenidoParrafo=null;
        this.rutaimagen=null;
        this.ContenidoDescripcion=null;
        this.NombreLabel=[];
        this.NombreTituloForm=null;
        this.NombreBoton='';
    }
    setPantalla1(etiqueta){
        this.Limpiar();
       var length=Object.keys(ElementosContenido).length;
       for(let i=1;i<=length;i++){
           if(etiqueta===ElementosContenido[i].id){
               this.NombreTitulo=ElementosContenido[i].NombreTitulo;
               this.ContenidoParrafo=ElementosContenido[i].ContenidoParrafo;
               this.rutaimagen=ElementosContenido[i].rutaimagen;
               this.ContenidoDescripcion=ElementosContenido[i].ContenidoDescripcion;
               this.NombreTituloForm=ElementosContenido[i].NombreTituloForm;
               this.NombreLabel=ElementosContenido[i].NombreLabel;
               this.NombreBoton=ElementosContenido[i].NameBoton;
            }

       }
       var NewFormulario=GenerarEtiqueta.formulario(this.NombreTituloForm,this.NombreLabel,this.NombreBoton);
       var NewParrafo=GenerarEtiqueta.CajasParrafos(this.NombreTitulo,this.ContenidoParrafo);
       var NewImagen=GenerarEtiqueta.CajasImagenes(this.rutaimagen,this.ContenidoDescripcion);
       
       padre.appendChild(NewParrafo);
        //padre.appendChild(ElementoCajaDeImagen);
        padre.appendChild(NewImagen);
        padre.appendChild(NewFormulario);

   }
   setPantalla2(etiqueta){
        this.Limpiar();
       var length=Object.keys(ElementosContenido).length;
       for(let i=1;i<=length;i++){
           if(etiqueta===ElementosContenido[i].id){
               this.NombreTitulo=ElementosContenido[i].NombreTitulo;
               this.ContenidoParrafo=ElementosContenido[i].ContenidoParrafo;
               this.rutaimagen=ElementosContenido[i].rutaimagen;
               this.ContenidoDescripcion=ElementosContenido[i].ContenidoDescripcion;
               this.NombreTituloForm=ElementosContenido[i].NombreTituloForm;
               this.NombreLabel=ElementosContenido[i].NombreLabel;
           }

       }
       var NewFormulario=GenerarEtiqueta.formulario(this.NombreTituloForm,this.NombreLabel);
       var NewParrafo=GenerarEtiqueta.CajasParrafos(this.NombreTitulo,this.ContenidoParrafo);
       var NewImagen=GenerarEtiqueta.CajasImagenes(this.rutaimagen,this.ContenidoDescripcion);
       
       padre.appendChild(NewFormulario);
       padre.appendChild(NewParrafo);
        //padre.appendChild(ElementoCajaDeImagen);
        padre.appendChild(NewImagen);
        
   }

   setPantalla3(etiqueta){
    this.Limpiar();
    var length=Object.keys(ElementosContenido).length;
    for(let i=1;i<=length;i++){
       if(etiqueta===ElementosContenido[i].id){
           this.NombreTitulo=ElementosContenido[i].NombreTitulo;
           this.ContenidoParrafo=ElementosContenido[i].ContenidoParrafo;
           this.rutaimagen=ElementosContenido[i].rutaimagen;
           this.ContenidoDescripcion=ElementosContenido[i].ContenidoDescripcion;
           this.NombreTituloForm=ElementosContenido[i].NombreTituloForm;
           this.NombreLabel=ElementosContenido[i].NombreLabel;
       }

   }
   var NewFormulario=GenerarEtiqueta.formulario(this.NombreTituloForm,this.NombreLabel);
   var NewParrafo=GenerarEtiqueta.CajasParrafos(this.NombreTitulo,this.ContenidoParrafo);
   var NewImagen=GenerarEtiqueta.CajasImagenes(this.rutaimagen,this.ContenidoDescripcion);
   
   padre.appendChild(NewFormulario);
   padre.appendChild(NewImagen);
   padre.appendChild(NewParrafo);
    //padre.appendChild(ElementoCajaDeImagen);
}

    setPantallaTabla(etiqueta){
        this.Limpiar();
        var length=Object.keys(ElementosContenido).length;
        for(let i=1;i<=length;i++){
           if(etiqueta===ElementosContenido[i].id){
             //  this.NombreTitulo=ElementosContenido[i].NombreTitulo;
              // this.ContenidoParrafo=ElementosContenido[i].ContenidoParrafo;
              // this.rutaimagen=ElementosContenido[i].rutaimagen;
             //  this.ContenidoDescripcion=ElementosContenido[i].ContenidoDescripcion;
               this.NombreTituloForm=ElementosContenido[i].NombreTituloForm;
               this.NombreLabel=ElementosContenido[i].NombreLabel;
               this.NombreBoton=ElementosContenido[i].NameBoton;
            }
    
       }
       var NewFormulario=GenerarEtiqueta.formulario(this.NombreTituloForm,this.NombreLabel,this.NombreBoton);
      // var NewParrafo=GenerarEtiqueta.CajasParrafos(this.NombreTitulo,this.ContenidoParrafo);
      // var NewImagen=GenerarEtiqueta.CajasImagenes(this.rutaimagen,this.ContenidoDescripcion);
       
       padre.appendChild(NewFormulario);
     //  padre.appendChild(NewImagen);
     //  padre.appendChild(NewParrafo);
        //padre.appendChild(ElementoCajaDeImagen);
    }

    setPantallaRegistros(etiqueta){
        this.Limpiar();
        var length=Object.keys(ElementosContenido).length;
        for(let i=1;i<=length;i++){
           if(etiqueta===ElementosContenido[i].id){
               this.NombreTitulo=ElementosContenido[i].Titulo;
               
            }
    
       }
       console.log(this.NombreTitulo);
       var NewTabRegistro=GenerarEtiqueta.CrearRegistro(this.NombreTitulo);
       var NewCajaEstadistica=GenerarEtiqueta.CuadroEstadistica();
       padre.appendChild(NewTabRegistro);
       padre.appendChild(NewCajaEstadistica);
    }

   Limpiar(){
   /* if(document.querySelector('.'+clase) || clase==!null){
        // padre.removeChild(document.querySelector('.titulo'));
       // padre.removeChild(document.querySelector('.'+clase));
       // padre.removeChild(document.querySelector('.parrafo'));
        padre.removeChild(document.querySelector('.CajaImagen'));
        padre.removeChild(document.querySelector('.CajaParrafo'));
        padre.removeChild(document.querySelector('.CajaFormulario'));

     }*/
     while (padre.firstChild){
         padre.removeChild(padre.firstChild);
     }
   }
}
export default visualizador;