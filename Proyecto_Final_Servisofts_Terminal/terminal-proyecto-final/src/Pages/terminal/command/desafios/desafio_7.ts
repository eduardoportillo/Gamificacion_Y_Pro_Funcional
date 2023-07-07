import STerminal from 'servisofts-terminal';
import desafio from '../desafio';

export default class desafio_7 {
    private terminal: STerminal;

    constructor(terminal: STerminal) {
        this.terminal = terminal;
        this.startChallenge();
    }

    async startChallenge() {
        this.terminal.println(`Desafío 7 [Búsqueda del Tesoro][Intermedio]:`);
        this.terminal.println(` `);

        this.terminal.println(` Descripción:`);
        this.terminal.println(
            ` ¡Bienvenido al desafío de búsqueda del tesoro intermedio! Te encontrarás en una aventura por el sistema de archivos, donde tendrás que seguir una serie de pistas para encontrar el tesoro oculto. Cada pista te llevará a un directorio diferente y deberás utilizar comandos de terminal para avanzar. ¡Buena suerte!`
        );

        this.terminal.println(` Pista 1:`);
        this.terminal.println(
            ` Apareces en la ruta home, ahí pillará 3 archivos llamado posible_pista_1.txt, posible_pista_2.txt, posible_pista_3.txt la pista estar en el archivo más pesado de los tres, ahí pillarás la ruta a la que te tienes que dirigir.`
        );
        // La ruta es /pasillo/derecha/cuarto
        this.terminal.println(` `);

        this.terminal.println(` Pista 2:`);
        this.terminal.println(
            ` Ahí pillarás 2 carpetas piedra y trampilla las cual desbloquea una carpeta llamada puerta.
            Mueve la carpeta piedra dentro de la carpeta trampilla. Ahí podrás entrar dentro de la carpeta puerta ahí pillará una carpeta llamada trampas ahí tendrás que eliminar la carpeta par poder seguir avanzando y acceder a la carpeta final_pasillo, al ingresar encontrarás un archivo llamado siguiente_pistas.txt
            `
        );
        // La ruta es /pasillo/izquierda/cuarto
        this.terminal.println(` `);

        this.terminal.println(` Pista 3:`);
        this.terminal.println(
            ` para pillar el tesoro tiene que ser muy observador, ya que la carpeta es oculta eso quiere decir que tenga un . por delante, cuando la pilles tendrás el tesoro en tus manos.`
        );
        // .tesoro pillado Desafío Terminado.
        this.terminal.println(` `);

        // Desafío Completado. Recompensa: 15 LnX Coins.

        return '';
    }
}
