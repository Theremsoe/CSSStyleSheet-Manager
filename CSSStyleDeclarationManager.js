/*
* Funcion que permite manipular los estilos en linea de los nodos 
* del DOM.
*/
function CSSStyleManager( _target, _object, _extra ) {

	var
		// Lista de nodos
		_NodeListArray 		= [],

		// Variable de salida
		_FinalResult		= null,

		// Variable de ayuda
		_HelpVar 			= [];


	// Si el solamente un elemento
	if( _target instanceof Element )
		_NodeListArray.push( _target );

	else if( /HTML|NodeList/.test( _typeof( _target ) ) )
		_NodeListArray = _toArray( _target );

	else
		_NodeListArray.push( _target );

	/*
	* Basandonos en el numero de argumentos
	* sabremos que hacer
	*/
	switch( arguments.length ) {

		case 2:
			// Si el argumento _object es el tipo de objeto
			if( _typeof( _object ) === '[object Object]' )
				for( var _node in _NodeListArray )
					for( var _style in _object )
						_NodeListArray[ _node ].style.setProperty( _style, _object[ _style ] );

			// Si el argumento _object es una cadena
			else if( _typeof( _object ) === '[object String]' ) 
				_FinalResult = getComputedStyle( _NodeListArray[ 0 ], null ).getPropertyValue( _object );

			// Si el argumento _object es un array
			else if( _typeof( _object ) === '[object Array]' ) {

				// Convertimos la variable final a Array
				_FinalResult = [];

				for( var _node in _NodeListArray ) {

					// Reseteamos la variable
					_HelpVar = [];

					for( var _i = 0; _object[ _i ]; _i++ )
						_HelpVar.push( getComputedStyle( _NodeListArray[ _node ], null ).getPropertyValue( _object[ _i ] ) );

					// Agregamos la nueva coleccion
					_FinalResult.push( _HelpVar );
				}
			}
		break;

		case 3:
			// Actalizamos los indices
			for( var _node in _NodeListArray )
				_NodeListArray[ _node ].style.setProperty( _object, _extra );
		break;


		case 1:
		case 0:
		default:
			console.error( 'Error: Numero de argumentos no validos' );
		break;

	}

	// Retornamos el objeto
	return _FinalResult;



	/*
	* Funcion para obtener el tipo de elemento
	*/
	function _typeof( _data ) {
		return Object.prototype.toString.call( _data );
	};

	/*
	* Funcion para convertir cualquier coleccion a un array
	*/
	function _toArray( _object ) {
		return Array.prototype.slice.call( _object );
	};

}