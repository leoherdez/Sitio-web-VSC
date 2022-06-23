    function comprobarDatos(nombre){
				var expReg = /[\s\S]{3}/;				
				if(!expReg.test(nombre)){
					return false;
				}else{
					return true;
				}
			}

            function validacionDatosForm1(){
				var formularios = document.forms;
				var comprobacion = false;
                var telefono = document.getElementById("telefono").value;
                var indice = document.getElementById("tarjeta").selectedIndex;
                var email =document.getElementById("email").value;
                var pass1 = document.getElementById("contraseña").value;
                var pass2 = document.getElementById("verificar").value;
				var msg='';
				for(var i = 0; i<formularios[0].elements.length; i++){
					if(formularios[0].elements[i].type == 'text'){
						comprobacion = comprobarDatos(formularios[0].elements[i].value);
						if(!comprobacion){
							msg += 'El campo ' + formularioUsuario[i].name + ' no puede tener menos de tres letras.\n';
						}
					}	
				}
                
                if( isNaN(telefono) ) {
                    alert("El campo " + formularioUsuario[3].name + " debe ser numerico");
                    return false;
                }
                
                if( indice == null || indice == 0 ) {
                    return false;
                }
                
                if( !(/^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,4}$/.test(email)) ) {
                    alert("El campo " + formularioUsuario[4].name + " debe contener una direccion de correo valida");
                    return false;
                }

                if (pass1 != pass2) {
                    alert("Las contraseñas no coinciden")
                    return false;
                }
				if(msg!=''){
						alert(msg);
						return false;
				}
			}