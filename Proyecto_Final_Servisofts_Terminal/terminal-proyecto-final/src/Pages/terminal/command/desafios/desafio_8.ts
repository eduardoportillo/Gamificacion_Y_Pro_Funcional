import STerminal from 'servisofts-terminal';
import desafio from '../desafio';

export default class desafio_8 {
    private terminal: STerminal;

    constructor(terminal: STerminal) {
        this.terminal = terminal;
        this.startChallenge();
    }

    async startChallenge() {
        this.terminal.println(`Desafío 8 [Cuenta Regresiva][Intermedio]:`);
        this.terminal.println(` `);

        this.terminal.println(` Descripción:`);
        this.terminal.println(
            ` ¡Bienvenido al desafío de cuenta regresiva! Tendrás un tiempo limitado de 4 min para completar una serie de tareas en el sistema de archivos antes de que se agote el tiempo. Cada tarea requerirá el uso de comandos de terminal para realizar acciones específicas. ¡Prepárate y comienza la cuenta regresiva!`
        );

        this.terminal.println(` Tarea 1:`);
        this.terminal.println(
            ` Crea un directorio llamado “Desafío_8”`
        );
        // La ruta es /pasillo/derecha/cuarto
        this.terminal.println(` `);

        this.terminal.println(` Tarea 2:`);
        this.terminal.println(
            ` Dentro del directorio "Desafío_8", crea un archivo vacío llamado "Desafío_8.txt"`
        );
        // La ruta es /pasillo/izquierda/cuarto
        this.terminal.println(` `);

        this.terminal.println(` Tarea 3:`);
        this.terminal.println(
            ` para pillar el tesoro tiene que ser muy observador, ya que la carpeta es oculta eso quiere decir que tenga un . por delante, cuando la pilles tendrás el tesoro en tus manos.`
        );
        // .tesoro pillado Desafío Terminado.
        this.terminal.println(` `);

        this.terminal.println(` Tarea 4:`);
        this.terminal.println(
            ` Copia el directorio "subdirectorio" a el directorio anterior .`
        );
        // .tesoro pillado Desafío Terminado.
        this.terminal.println(` `);

        this.terminal.println(` Tarea 5:`);
        this.terminal.println(
            ` elimina el directorio "subdirectorio" en la ruta actual`
        );
        // .tesoro pillado Desafío Terminado.
        this.terminal.println(` `);

        this.terminal.println(` Tarea 7:`);
        this.terminal.println(
            ` ahora ve a el directorio anterior.`
        );
        // .tesoro pillado Desafío Terminado.
        this.terminal.println(` `);

        this.terminal.println(` Tarea 8:`);
        this.terminal.println(
            ` mueve el directorio “subdirectorio” al directorio “Desafío_8” de en modo interactivo.`
        );
        // .tesoro pillado Desafío Terminado.
        this.terminal.println(` `);

        this.terminal.println(` ¡Has completado el desafío de cuenta regresiva! Si has logrado realizar todas las tareas antes de que se agotara el tiempo, felicitaciones por tu rápida habilidad en la terminal. Recuerda practicar y familiarizarte con los comandos de Linux para mejorar tus habilidades en el sistema de archivos.`);

        // Desafío Completado. Recompensa: 15 LnX Coins.

        return '';
    }
}
