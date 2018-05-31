//jQuery validate plugin date format: date interferes with dateITA

function validate_newjob() {
$('#newjob').validate({
        rules: {
            DueDate: {
                required: true,
                dateITA: true 
            }
        },
        messages: {
            DueDate: {
                required: "* Required",
                dateITA: "Date format dd/mm/yyyy"
            }
        },
		submitHandler: function() {
			console.log("Pulsado login");
			$.post('consultas/loginRegistro.php',$('#formulario_login').serialize(),
				function(datos){
					console.log(datos);
					if (datos==='autorizado'){
						window.open('rejillaBootStrap.php','_self');
					}else{
						//si no existe le mando otra vez a la portada
						$('body').load('login.php');
						alert('dni o contraseña incorrecta');
					}
			}).error(function(){
				console.log("error login");
			});
		},
        highlight: function(element) {
				$(element).css({ backgroundColor: 'Red' });
		},
		unhighlight: function(element) {
				$(element).css({ backgroundColor: '#FF9' });
		},
		errorClass: "formerror",
        errorElement: "span",
        errorPlacement: function(error, element) {
            $(element).next().after(error);
        }
    });
}
