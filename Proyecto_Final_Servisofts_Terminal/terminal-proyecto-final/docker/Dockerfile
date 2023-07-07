# Usar la imagen base de Ubuntu 20.04
FROM ubuntu:20.04

# Evitar preguntas durante la instalación del paquete
ENV DEBIAN_FRONTEND=noninteractive

# Actualizar la lista de paquetes e instalar el servidor SSH
RUN apt-get update && apt-get install -y openssh-server

# Crear el directorio para el servidor SSH
RUN mkdir /var/run/sshd

# Establecer la contraseña para el usuario root (modifica 'YOUR_PASSWORD' por tu contraseña)
RUN echo 'root:root' | chpasswd

# Configurar SSH para permitir el acceso por root
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# Exponer el puerto para SSH
EXPOSE 22

# Iniciar el servidor SSH
CMD ["/usr/sbin/sshd", "-D"]
