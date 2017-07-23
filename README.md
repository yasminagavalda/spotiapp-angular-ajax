# SpotiApp

App realizada en la tercera semana del Bootcamp en Skylab Coders Academy.

Buscador de artistas. Mediante peticiones AJAX a la API de Spotify se obtienen resultados de albums, canciones y una preview de la canción seleccionada de 30 segundos.

AVISO: Spotify ha añadido un acces token para utilizar su API. El token caduca cada hora, por lo que se debe solicitar un nuevo acces token una vez ha caducado para poder realizar las peticiones AJAX. 
Para poder utilizar la app se debe modificar el el valor de la variable 'token' en el archivo factory.js
