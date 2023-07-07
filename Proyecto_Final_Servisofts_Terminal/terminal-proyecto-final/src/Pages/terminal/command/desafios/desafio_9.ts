import STerminal from 'servisofts-terminal';
import desafio from '../desafio';

export default class desafio_9 {
    private terminal: STerminal;

    constructor(terminal: STerminal) {
        this.terminal = terminal;
        this.startChallenge();
    }

    async startChallenge() {
        this.terminal.println(`Desafío 6 [Trivia][Intermedio]`);
        this.terminal.println(` `);

        this.terminal.println(` Descripción:`);
        this.terminal.println(
            ` En este desafío de trivia, se te presentarán preguntas relacionadas con comandos de terminal y deberás seleccionar la respuesta correcta de una lista de opciones. Demuestra tu conocimiento y elige sabiamente para completar el desafío.
            `
        );

        this.terminal.println(` Pregunta 1:`);
        this.terminal.println(
            ` ¿Cuál es el atributo del comando ls que lista todos los objetos en formato largo (o detallado)?`
        );
        this.terminal.println(` a) -l`);
        this.terminal.println(` b) -a`);
        this.terminal.println(` c) -h`);
        this.terminal.println(` d) -S`);
        this.terminal.println(` `);

        this.terminal.println(` Pregunta 2:`);
        this.terminal.println(
            ` ¿Qué atributo del comando ls muestra todos los archivos, incluso los que comienzan con un punto?`
        );
        this.terminal.println(` a) -l`);
        this.terminal.println(` b) -a`);
        this.terminal.println(` c) -h`);
        this.terminal.println(` d) -S`);
        this.terminal.println(` `);

        this.terminal.println(` Pregunta 3:`);
        this.terminal.println(
            ` ¿Cuál es el atributo del comando ls que clasifica los contenidos de los directorios por tamaños, con los ficheros más grandes en primer lugar?`
        );
        this.terminal.println(` a) -l`);
        this.terminal.println(` b) -a`);
        this.terminal.println(` c) -h`);
        this.terminal.println(` d) -S`);
        this.terminal.println(` `);

        this.terminal.println(` Pregunta 4:`);
        this.terminal.println(
            ` ¿Qué atributo del comando mv activa el modo interactivo y solicita confirmación antes de sobrescribir archivos existentes en el destino?`
        );
        this.terminal.println(` a) -i`);
        this.terminal.println(` b) -u`);
        this.terminal.println(` c) -v`);
        this.terminal.println(` d) -b`);
        this.terminal.println(` `);

        this.terminal.println(` Pregunta 5:`);
        this.terminal.println(
            ` ¿Cuál es el atributo del comando mv que muestra un mensaje detallado para cada archivo o directorio movido, indicando la ruta de origen y destino?`
        );
        this.terminal.println(` a) -i`);
        this.terminal.println(` b) -u`);
        this.terminal.println(` c) -v`);
        this.terminal.println(` d) -b`);
        this.terminal.println(` `);

        this.terminal.println(` Pregunta 6:`);
        this.terminal.println(
            ` ¿Qué atributo del comando cp pregunta antes de sobrescribir un archivo existente?`
        );
        this.terminal.println(` a) -i`);
        this.terminal.println(` b) -n`);
        this.terminal.println(` c) -b`);
        this.terminal.println(` d) -r`);
        this.terminal.println(` `);

        this.terminal.println(` Pregunta 7:`);
        this.terminal.println(
            ` ¿Cuál es el atributo del comando cp que crea una copia de respaldo del archivo original antes de sobrescribirlo?`
        );
        this.terminal.println(` a) -i`);
        this.terminal.println(` b) -n`);
        this.terminal.println(` c) -b`);
        this.terminal.println(` d) -r`);
        this.terminal.println(` `);

        this.terminal.println(` Pregunta 8:`);
        this.terminal.println(
            ` ¿Qué atributo del comando rm activa el modo interactivo y solicita confirmación antes de eliminar cada archivo o directorio?`
        );
        this.terminal.println(` a) -i`);
        this.terminal.println(` b) -r`);
        this.terminal.println(` c) -f`);
        this.terminal.println(` d) -v`);
        this.terminal.println(` `);

        this.terminal.println(` Pregunta 9:`);
        this.terminal.println(
            ` ¿Cuál es el atributo del comando rm que se utiliza para eliminar directorios y su contenido de forma recursiva?`
        );
        this.terminal.println(` a) -i`);
        this.terminal.println(` b) -r`);
        this.terminal.println(` c) -f`);
        this.terminal.println(` d) -v`);
        this.terminal.println(` `);

        // La opción correcta es B) `-r`.

        this.terminal.println(` Pregunta 10:`);
        this.terminal.println(
            ` ¿Qué atributo del comando cat muestra el contenido del archivo junto con los números de línea?`
        );
        this.terminal.println(` a) -n`);
        this.terminal.println(` b) -s`);
        this.terminal.println(` c) -E`);
        this.terminal.println(` d) -T`);
        this.terminal.println(` `);

        return '';
    }
}
