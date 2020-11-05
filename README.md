![header](doc/header.png)

# Projecto de DAW

### README del Proyecto Final la asignatura de Desarrollo de Aplicaciones Web.
### Carrera de Especialización en Internet de las Cosas (CEIoT)
### Facultad de Ingeniería
### UNIVERSIDAD DE BUENOS AIRES

Autor:

* Federico Montes de Oca


# Introducción

El repositorio describe un modelo de aplicación web para la gestión de dispositivos IoT de una casa inteligente.
La aplicación permite prender, apagar, cambiar el nombre, la descripción y definir el tipo  de hasta seis  dispositivos conectados a internet.


# Contenido

Se estructura en base a un backend y un frontend. El último fue escrito en lenguaje TypeScript. También se utilizó NodeJS junto con ExpressJS para establecer una comunicación entre el backend y el frontend. Adicionalmente, se instaló MySQL y PHP MyAdmin para la administración de las bases de datos.
Estas herramientas se encuentran disponibles encapsuladas en contenedores Docker, que interoperan a través del uso de Docker Compose. Es posible acceder a las imagenes de Docker utilizadas en este repositorio y otras dependencias como se detalla a continuación.


# Instalación

Para la ejecución de esta aplicación se deberán instalar Docker y Docker Compose. Para instalarlos en Ubuntu, se deberán ejectutar los siguientes comandos: 
Importante reemplazar user por el nombre de usuario.
apt install docker docker-compose
usermod -aG docker user

Luego reiniciar el sistema.


# Correr la aplicación

1. Realizar fork de este repositorio.
2. Clone el repositorio a su ordenador utilizando git clone.
3. Ejecutar docker-compose up en el directorio clonado.
Nota: puede que sea necesario detener los servicios de Docker  y volver a ejecutarlos la primera vez que se ejecuta la aplicación.
Para detener estos servicios, presiona CTRL+C.


# Prueba de los servicios
Para acceder al dashboard con los dipsoitivos que NodeJS sirve ingrese a http://localhost:8000/ con docker-compose corriendo en el background.
Para acceder al adiministrador de bases de datos PHP MyAdmin ingrese a http://localhost:8001/ también con docker-composecorriendo en el background. El usuario y la contraseña necesarios se encuentran en el archivo docker-compose.yml .


# Licencia
Este proyecto es publicado bajo licencia GPLV3+.


![footer](doc/footer.png)

