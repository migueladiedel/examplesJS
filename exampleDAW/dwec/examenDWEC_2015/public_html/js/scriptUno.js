/**
 * @author  Miguel  Ángel Diez Delgado
 */
window.onload = iniciar;

function iniciar() {

//Objeto Biblioteca
function Biblioteca(nombre, max) {
        var plantas = ["Astronomía", "Geografía", "Fútbol", "Historia", "Tecnología", "Ciencias", "Lengua"];
        this.nombre = nombre;
        this.maxlibrosplanta = max;
        this.libros = new Array;
        for (var i = 0; i < plantas.length; i++){
            this.libros[plantas[i]] = new Array;
        }    

        //Planta llena
        this.plantallena = function (planta) {
            return planta.length === this.maxlibrosplanta;
        };

        //Agregar libro
        this.agregarlibro = function (planta, libro) {
            var mensaje;
            if (!this.plantallena(planta)){
                var posición = this.estalibro(planta, libro);
                if (posición === -1){
                    planta.push(libro);
                    mensaje = planta.length - 1;
                } else{
                    mensaje = -1;
                }
            } else{
                mensaje = -2;
            }
            return mensaje;
        };


        //Si está el elibro
        this.estalibro = function (planta, libro){
            return planta.indexOf(libro);
        };


        //Libros por planta
        this.consulta = function (planta){
            var todos = "";
            for (var i = 0; i < planta.length; i++)
                todos += planta[i] + " ";
            return todos;
        };

    };
    // Fin objeto


    var biblio = new Biblioteca('Cultura para todos', 50);
    var bib = document.getElementById("Biblioteca");
    bib.innerHTML = '<b>' + biblio.nombre + '</b>';
    var imagen = document.getElementById("imagen");
    imagen.src = 'img/biblioteca.jpg';
    ver('Empezando el proceso');
    insertar.addEventListener('click', agrega, false);
    nombre.addEventListener('blur', mayusculas, false);
    nombreplanta.addEventListener('click', listado, false);
    book.addEventListener('click', titulo, false);
    codigo.addEventListener('click', codi, false);



    function ver(mensaje){
        texto.innerHTML = mensaje;
    }

    function codi()
    {
        imagen.src = 'img/codigo.jpg';
        var plant = document.getElementById("planta");
        var mensaje;
        if (nombre.value !== "")
        {
            var a = biblio.estalibro(biblio.libros[plant.value], nombre.value);
            if (a === -1)
                mensaje = "El libro no está en la planta"
            else
                mensaje = "El código es " + plant.value + a;
        } else
            mensaje = "El nombre de libro está vacío";
        ver(mensaje);
    }

    function titulo()
    {
        imagen.src = 'img/buscar.jpg';
        var plant = document.getElementById("planta");
        var mensaje;
        if (numero.value !== "" && numero.value > -1 && numero.value < biblio.libros[plant.value].length)
            mensaje = biblio.libros[plant.value][numero.value];
        else
            mensaje = "Código incorrecto";
        ver(mensaje);
    }

    function agrega(){
        imagen.src = 'img/agregar.jpg';
        var mensaje;
        var plant = document.getElementById("planta");
        var libro = document.getElementById("nombre");
        if (nombre.value !== ""){
            var mensa = biblio.agregarlibro(biblio.libros[plant.value], libro.value);
            if (mensa === -1){
                mensaje = "El libro ya está en la planta";
            }else{
                if (mensa === -2){
                    mensaje = "La planta está llena";
                }else{
                    mensaje = "Código libro: " + plant.value + mensa;
                }
            }
        }else{
            mensaje = "El nombre de libro está vacío";
            ver(mensaje);
        }
    }


    function listado(){
        imagen.src = 'img/listado.jpg';
        var plant = document.getElementById("planta");
        var variable = biblio.consulta(biblio.libros[plant.value]);
        var mensaje = "";
        if (variable === ""){
            mensaje = "Planta Vacía";
        }else{
            mensaje = variable;
            ver(mensaje);
        }
    }

    function mayusculas(){
        this.value = this.value.toUpperCase();
    }
}