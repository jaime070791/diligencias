var load_deliveries = function(){
	var data = [
		['01/04/2017', 'A124527', '5 mins', 'En curso', '$15.000', '$15.000', '1', '3', '5 Km', 'Compensar', 'Alfonso Martinez'],
		['02/05/2017', 'E876901', '15 mins', 'En curso', '$25.000', '$25.000', '3', '4', '15 Km', 'Compensar', 'Daniel Ortega'],
		['03/06/2017', 'I762319', '10 mins', 'En curso', '$20.000', '$20.000', '4', '5', '10 Km', 'Compensar', 'Javier López'],
		['04/07/2017', 'O4T5261', '20 mins', 'En curso', '$50.000', '$50.000', '2', '4', '12 Km', 'Compensar', 'Andrea Suárez']
	];

	var table = $('#deliveries tbody');
	var num = 0;

	for(var i=0; i<5; i++){
		for(var j=0; j<data.length; j++){
			var content = "";
			for(var k=0; k<data[j][7]; k++){
				if(k < data[j][6] - 1){
					content += '<div class="item blue-container"></div>';
				}else if(k == data[j][6] - 1){
					content += '<div class="item red-container"></div>';
				}else{
					content += '<div class="item"></div>';
				}
			}

			table.append('<tr>' +
				'<td><input type="checkbox" class="filled-in" id="' + num + '"><label for="' + num + '"></label></td>' +
				'<td><a href="delivery.html">' + data[j][0] + '</a></td>' + 
				'<td><a href="delivery.html">' + data[j][1] + '</a></td>' + 
				'<td>' + data[j][2] + '</td>' + 
				'<td>' + data[j][3] + '</td>' + 
				'<td>' + data[j][4] + '</td>' + 
				'<td>' + data[j][5] + '</td>' + 
				'<td id="stepper_' + num + '"><div class="progress-segment">' + content + '</div></td>' + 
				'<td>' + data[j][8] + '</td>' + 
				'<td>' + data[j][9] + '</td>' + 
				'<td>' + data[j][10] + '</td>' + 
				'<td class="table-actions">' + 
					'<a href="delivery.html" class="blue-font"><i class="material-icons">search</i></a>' + 
					'<a href="#" class="blue-font dropdown-button" data-activates="delivery_menu"><i class="material-icons">more_vert</i></a>' + 
				'</td>' +
			'</tr>');

			num++;
		}
	}
}

var load_invoices = function(){
	var data = [
		['AB12356', 'Albeiro Pabón', '$15.000', 'Alfonso Martínez', '15 mins', '4.5', '5'],
		['AD73654', 'Paola García', '$25.000', 'Daniel Ortega', '5 mins', '4', '2'],
		['AE82176', 'Camilo Prieto', '$20.000', 'Javier López', '25 mins', '3.5', '5'],
		['AF72912', 'Fernando Torres', '$15.000', 'Andrea Suárez', '15 mins', '4.5', '4']
	];

	var gain = ['1763532', '2717321', '2293263', '1735242', '2519362', '1738264', '2193728', '2038362', '2145569', '1965256'];
	var last = ['1763532', '1717321', '2093263', '1735242', '1519362', '1938264', '2393728', '2138362', '1345569', '1912256'];
	var avg = ['90', '85', '92', '91', '95', '90', '110', '105', '93', '95'];
	var month = ['1963532', '1717321', '2293263', '2735242', '1519362', '1938264', '2193728', '2138362', '2145569', '1930730'];

	$("#gain").sparkline(gain, {type: 'bar', barWidth: 10, barColor: '#666666'});
	$("#last").sparkline(last, {type: 'bar', barWidth: 10, barColor: '#666666'});
	$("#avg").sparkline(avg, {type: 'bar', barWidth: 10, barColor: '#ffffff'});
	$("#month").sparkline(month, {type: 'bar', barWidth: 10, barColor: '#ffffff'});

	var table = $('#invoices tbody');
	var num = 0;

	for(var i=0; i<5; i++){
		for(var j=0; j<data.length; j++){
			var stars = data[j][5] / 0.5;
			var mod = stars % 2;
			var full = parseInt(stars / 2);
			var empty = parseInt(5 - (stars / 2));
			var icons = '';

			for(var k=0; k<full; k++){
				icons += '<i class="material-icons orange-text darken-2">star</i>';
			}
			if(mod == 1){
				icons += '<i class="material-icons orange-text darken-2">star_half</i>';
			}
			for(var m=0; m<empty; m++){
				icons += '<i class="material-icons orange-text darken-2">star_border</i>';
			}

			table.append('<tr>' +
				'<td><a href="service.html">' + data[j][0] + '</a></td>' +
				'<td>' + data[j][1] + '</td>' + 
				'<td>' + data[j][2] + '</td>' + 
				'<td>' + data[j][3] + '</td>' + 
				'<td>' + data[j][4] + '</td>' + 
				'<td>' + icons + '</td>' + 
				'<td>' + data[j][6] + '</td>' + 
				'<td class="table-actions">' + 
					'<a href="service.html" class="blue-font"><i class="material-icons">search</i></a>' + 
					'<a href="#" class="blue-font"><i class="material-icons">access_time</i></a>' + 
					'<a href="#" class="blue-font dropdown-button" data-activates="service_menu"><i class="material-icons">more_vert</i></a>' + 
				'</td>' +
			'</tr>');
		}
	}
}

var load_drivers = function(){
	var data = [
		['AB12356', 'Albeiro', 'Pabón', '4131235', '4.5', '32', 'Moto', 'Activo'],
		['AD73654', 'Paola', 'García', '8264862', '4', '27', 'Moto', 'Activo'],
		['AE82176', 'Camilo', 'Prieto', '3108381', '3.5', '29', 'Automóvil', 'Activo'],
		['AF72912', 'Fernando', 'Torres', '8274871', '4.5', '30', 'Moto', 'Activo']
	];

	var last = ['5', '3', '3', '4', '4', '2', '6', '3', '5', '4'];
	var avg = ['90', '85', '92', '91', '95', '90', '110', '105', '93', '95'];
	var month = ['5', '3', '3', '4', '4', '2', '6', '4', '5', '5'];

	$("#last").sparkline(last, {type: 'bar', barWidth: 10, barColor: '#666666'});
	$("#avg").sparkline(avg, {type: 'bar', barWidth: 10, barColor: '#ffffff'});
	$("#month").sparkline(month, {type: 'bar', barWidth: 10, barColor: '#ffffff'});

	var table = $('#drivers tbody');
	var num = 0;

	for(var i=0; i<5; i++){
		for(var j=0; j<data.length; j++){
			var stars = data[j][4] / 0.5;
			var mod = stars % 2;
			var full = parseInt(stars / 2);
			var empty = parseInt(5 - (stars / 2));
			var icons = '';

			for(var k=0; k<full; k++){
				icons += '<i class="material-icons orange-text darken-2">star</i>';
			}
			if(mod == 1){
				icons += '<i class="material-icons orange-text darken-2">star_half</i>';
			}
			for(var m=0; m<empty; m++){
				icons += '<i class="material-icons orange-text darken-2">star_border</i>';
			}

			table.append('<tr>' +
				'<td><a href="driver.html">' + data[j][0] + '</a></td>' +
				'<td>' + data[j][1] + '</td>' + 
				'<td>' + data[j][2] + '</td>' + 
				'<td>' + data[j][3] + '</td>' + 
				'<td>' + icons + '</td>' + 
				'<td>' + data[j][5] + '</td>' + 
				'<td>' + data[j][6] + '</td>' + 
				'<td>' + data[j][7] + '</td>' + 
				'<td class="table-actions">' + 
					'<a href="driver.html" class="blue-font"><i class="material-icons">search</i></a>' + 
					'<a href="#" class="blue-font"><i class="material-icons">mode_edit</i></a>' + 
					'<a href="#" class="blue-font dropdown-button" data-activates="service_menu"><i class="material-icons">more_vert</i></a>' + 
				'</td>' +
			'</tr>');
		}
	}
}

var load_history = function(){
	var data = [
		['A124527', '01/04/2017', 'Albeiro Pabón', '$15.000', 'Alfonso Martinez', '15 min', '3.5', '5'],
		['E876901', '02/05/2017', 'Daniel Torres', '$25.000', 'Alfonso Martinez', '75 min', '4.5', '4'],
		['I762319', '03/06/2017', 'Gabriela López', '$20.000', 'Alfonso Martinez', '45 min', '5', '5'],
		['O4T5261', '04/07/2017', 'Ana María Guzmán', '$50.000', 'Alfonso Martinez', '12 min', '4', '4']
	];

	var table = $('#deliveries tbody');
	var num = 0;

	for(var i=0; i<3; i++){
		for(var j=0; j<data.length; j++){
			var stars = data[j][6] / 0.5;
			var mod = stars % 2;
			var full = parseInt(stars / 2);
			var empty = parseInt(5 - (stars / 2));
			var icons = '';

			for(var k=0; k<full; k++){
				icons += '<i class="material-icons orange-text darken-2">star</i>';
			}
			if(mod == 1){
				icons += '<i class="material-icons orange-text darken-2">star_half</i>';
			}
			for(var m=0; m<empty; m++){
				icons += '<i class="material-icons orange-text darken-2">star_border</i>';
			}

			table.append('<tr>' +
				'<td><a href="delivery.html">' + data[j][0] + '</a></td>' + 
				'<td><a href="delivery.html">' + data[j][1] + '</a></td>' + 
				'<td>' + data[j][2] + '</td>' + 
				'<td>' + data[j][3] + '</td>' + 
				'<td>' + data[j][4] + '</td>' + 
				'<td>' + data[j][5] + '</td>' + 
				'<td>' + icons + '</td>' + 
				'<td>' + data[j][7] + '</td>' + 
				'<td class="table-actions">' + 
					'<a href="delivery.html" class="blue-font"><i class="material-icons">search</i></a>' + 
					'<a href="#" class="blue-font"><i class="material-icons">access_time</i></a>' + 
					'<a href="#" class="blue-font dropdown-button" data-activates="delivery_menu"><i class="material-icons">more_vert</i></a>' + 
				'</td>' +
			'</tr>');

			num++;
		}
	}
}

var load_users = function(){
	var data = [
		['A124527', 'Alfonso Martinez', '3124867564', 'alfonso.martinez@diligencias.com', '$15.000', '12'],
		['E876901', 'Daniel Ortega', '3176455215', 'daniel.ortega@diligencias.com', '$25.000', '23'],
		['I762319', 'Javier López', '3008287122', 'javier.lopez@diligencias.com', '$20.000', '14'],
		['O4T5261', 'Andrea Suárez', '3108760873', 'andrea.suarez@diligencias.com', '$50.000', '20']
	];

	var table = $('#users tbody');
	var num = 0;

	for(var i=0; i<5; i++){
		for(var j=0; j<data.length; j++){
			var content = "";
			for(var k=0; k<data[j][7]; k++){
				if(k < data[j][6] - 1){
					content += '<div class="item blue-container"></div>';
				}else if(k == data[j][6] - 1){
					content += '<div class="item red-container"></div>';
				}else{
					content += '<div class="item"></div>';
				}
			}

			table.append('<tr>' +
				'<td><input type="checkbox" class="filled-in" id="' + num + '"><label for="' + num + '"></label></td>' +
				'<td><a href="user.html">' + data[j][0] + '</a></td>' + 
				'<td><a href="user.html">' + data[j][1] + '</a></td>' + 
				'<td>' + data[j][2] + '</td>' + 
				'<td>' + data[j][3] + '</td>' + 
				'<td>' + data[j][4] + '</td>' + 
				'<td>' + data[j][5] + '</td>' + 
				'<td class="table-actions">' + 
					'<a href="user.html" class="blue-font"><i class="material-icons">search</i></a>' + 
					'<a href="#" class="blue-font"><i class="material-icons">mode_edit</i></a>' + 
					'<a href="#" class="blue-font dropdown-button" data-activates="delivery_menu"><i class="material-icons">more_vert</i></a>' + 
				'</td>' +
			'</tr>');

			num++;
		}
	}
}

var load_companies = function(){
	var data = [
		['A124527', 'Compensar', '5', 'Cuenta de cobro', '$15.000', 'Facturando', '47'],
		['E876901', 'Bookink', '4', 'Cuenta de cobro', '$25.000', 'Facturando', '49'],
		['I762319', 'Prindel', '6', 'Cuenta de cobro', '$20.000', 'Facturando', '52']
	];

	var table = $('#companies tbody');
	var num = 0;

	for(var i=0; i<5; i++){
		for(var j=0; j<data.length; j++){
			table.append('<tr>' +
				'<td><input type="checkbox" class="filled-in" id="' + num + '"><label for="' + num + '"></label></td>' +
				'<td><a href="company.html">' + data[j][0] + '</a></td>' + 
				'<td><a href="company.html">' + data[j][1] + '</a></td>' + 
				'<td>' + data[j][2] + '</td>' + 
				'<td>' + data[j][3] + '</td>' + 
				'<td>' + data[j][4] + '</td>' + 
				'<td>' + data[j][5] + '</td>' + 
				'<td>' + data[j][6] + '</td>' + 
				'<td class="table-actions">' + 
					'<a href="user.html" class="blue-font"><i class="material-icons">search</i></a>' + 
					'<a href="#" class="blue-font"><i class="material-icons">mode_edit</i></a>' + 
					'<a href="#" class="blue-font dropdown-button" data-activates="delivery_menu"><i class="material-icons">more_vert</i></a>' + 
				'</td>' +
			'</tr>');

			num++;
		}
	}
}

var send_password = function(){
	swal({
		title: '¡Lo lograste!',
		type: 'success',
		html: 'Las instrucciones para recuperar tu contraseña han sido enviadas a tu correo electrónico',
		confirmButtonText: 'Aceptar',
		confirmButtonColor: '#cc3333'
	});
}

var next = function(){
	setTimeout(function(){ $('.stepper').nextStep(); }, 1500);
}

var save_filter = function(){
	var type = $('#filter-type option:selected').text();
	var filter = $('#filter-field').val();

	var data = 'Filtrado por ' + type + ': ' + filter;
	$('#all-filters').append('<div class="chip">' + data + '<i class="close material-icons">close</i></div>')
}



jQuery(function($){

	/*
	==============================================
	Scripts animacion submenu lateral
	==============================================
	*/
	if ( $( '.side-nav' ).length ) {

		$( '.side-nav > li' ).on( 'click', function( event ){
			// event.preventDefault();

			// Desactivamos itemes
			$( '.side-nav > li' ).removeClass( 'active' );

			// Agregamos clase
			$( this ).addClass( 'active' );

			// Activamos submenu
			$( '.side-nav > li ul.side-nav-down' ).css( 'display', 'none' );

			$( this ).find( '.side-nav-down' ).css( 'opacity', 0 )
				.slideDown( 800 )
				.animate(
					{ opacity: 1 },
					{ queue: false, duration: 800 }
				);

		} );

	}


	/*
	==============================================
	Scripts ocultar/ver menu lateral
	==============================================
	*/

	if ( $( '.botonMenu' ).length ) {

		$( '.botonMenu' ).on( 'click', function( event ){
			event.preventDefault();

			// Aplicamos estilos a menu
			$( '.side-nav' ).toggleClass( 'whidth-menu' );

			// Aplicamos estilos a boton del menu
			$( this ).toggleClass( 'whidth-menu-btn' );

			// Aplicamos estilos al contenedor principal
			$( '.main-content' ).toggleClass( 'whidth-main-content' );
			
		} );

	}

});