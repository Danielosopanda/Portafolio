const   btn = document.querySelector("#btn"),
        seccionProyectos = document.querySelector("#proyectos"),
        imagenes = document.querySelectorAll(".imgProyecto"),
        titulosProyectos =  document.querySelectorAll(".proyecto h2"),
        textosProyectos = document.querySelectorAll(".proyecto p"),
        proyectos = document.querySelectorAll(".proyecto");

var proyectosAbierto = false;

imagenes.forEach(img => {
    img.style.opacity = "0";
});
proyectos.forEach((proyecto) => {
    proyecto.style.border = "none";
});


btn.addEventListener("click", (e) => {

    //Al abrirse
    if(!proyectosAbierto){
        seccionProyectos.style.height = "850px";
        seccionProyectos.style.padding = "10px 20px";
        seccionProyectos.style.marginBottom = "20px";

        proyectos.forEach((proyecto) => {
            proyecto.style.borderBottom = "1px solid var(--colorDivisiones)";
        });
        
        titulosProyectos.forEach((titulo) => {
            setTimeout(() => {
                titulo.style.opacity = "1";
            }, 150);
        });

        textosProyectos.forEach((parrafo) => {
            setTimeout(() => {
                parrafo.style.opacity = "1";
            }, 150);
        });
        
        imagenes.forEach(img => {
            setTimeout(() => {
                img.style.opacity = "1";
            }, 120);
            
        });
        /* seccionProyectos.style.display = "block"; */
        proyectosAbierto = true;


    //Al cerrarse
    } else {

        proyectos.forEach((proyecto) => {
            proyecto.style.border = "none";
        });

        titulosProyectos.forEach((titulo) => {
            titulo.style.opacity = "0";
        });

        textosProyectos.forEach((parrafo) => {
            parrafo.style.opacity = "0";
        });

        imagenes.forEach(img => {
            img.style.opacity = "0";
        })
        proyectosAbierto = false;

        setTimeout(() => {
            seccionProyectos.style.height = "0px";
            /* seccionProyectos.style.display = "none"; */
            seccionProyectos.style.padding = "0";
        }, 200);
    }
    
});