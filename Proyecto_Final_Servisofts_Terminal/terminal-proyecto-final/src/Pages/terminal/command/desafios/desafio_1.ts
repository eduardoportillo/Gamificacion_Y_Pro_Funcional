import STerminal from 'servisofts-terminal';
import desafio from '../desafio';
import ANSI_COLORS from '../../../../utils/ANSI_COLORS';
import electrumCli from '../electrumCli';
import DB from '../db';

export default class desafio_1 {
    private terminal: STerminal;

    constructor(terminal: STerminal) {
        this.terminal = terminal;
        this.startChallenge();
        // desafio.deleteFSEstructureChallenge(this.terminal, 'desafio_1');
    }

    async startChallenge() {
        const user = this.terminal.state.user;

        try {
            await this.terminal.execute('rm -r /home/desafio_1', false);
        } catch (error) {
            console.log(error);
        }

        this.terminal.fileSystem.createFromJson(
            {
                name: 'desafio_1',
                type: 'd',
                prop: this.terminal.state.user,
                group: 'guest',
                p: 'rwxr-xr-x',
            },
            {
                lvl: 1,
                parent: this.terminal.fileSystem.getDir('/home'),
            }
        );

        await this.terminal.execute('cd /home/desafio_1', false);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego te movió a la carpeta /home/desafio_1 ${ANSI_COLORS.RESET}`
        );

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Desafío 1 [Aprendizaje][Fácil] ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   el comando pwd se utiliza para saber en la ruta en la que te encuentras actualmente en el sistema de archivos.`
        );

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando pwd ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'pwd',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: `
        );
            
        this.terminal.execute("mkdir ejemplo")
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   el comando mkdir se usa para crear ficheros en el sistema de archivos. La forma para crear un fichero es “mkdir nombre_fichero”.`
        );

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando mkdir ejemplo ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'mkdir ejemplo',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            'Salida del comando mkdir: se creo el directorio ejemplo "Nota: El comando mkdir no muestra salida."'
        );

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   el comando ls se utiliza para listar el contenido del fichero de la ruta en la que te encuentras.`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando ls ${ANSI_COLORS.RESET}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'ls',
                promp: 'Ingresa el comando % ',
            },
            this.terminal
        );

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   El comando mv se utiliza para mover o renombrar archivos y directorios, se renombra si en segundo atributo envés de una ruta tiene un nombre de archivo o carpeta.`
        );
        this.terminal.println(`   en esta ocasión moveremos un directorio.`);
        
        
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando mv ejemplo carpeta_final ${ANSI_COLORS.RESET}`
        );
        
        this.terminal.execute("mkdir ejemplo");
        this.terminal.execute("mkdir carpeta_final");

        await desafio.readPrompRecursive(
            {
                spect: 'mv ejemplo carpeta_final',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            'El archivo se movió a carpeta_final'
        );

        //-------------------------Estructura FS--------------------------------
        await this.terminal.execute('cd carpeta_final', false);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego te movió a la carpeta /carpeta_final ${ANSI_COLORS.RESET}`
        );

        await this.terminal.execute('mkdir subcarpeta', false);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego creo el directorio subcarpeta ${ANSI_COLORS.RESET}`
        );

        //----------------------------------------------------------------------

        // this.terminal.println(` Ahora con mv toca renombrar el fichero.`);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando mv subcarpeta nuevo_nombre ${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'mv subcarpeta nuevo_nombre',
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        //     'Salida: El archivo se renombró a nuevo_nombre'
        // );

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   el comando cd se utiliza para navegar entre ficheros, notarás que cuando te desplaces al fichero deseado tu ruta abra cambiado.`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando cd nuevo_nombre ${ANSI_COLORS.RESET} `
        );

        await desafio.readPrompRecursive(
            {
                spect: 'cd nuevo_nombre',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ` Salida del comando cd: te desplazaste al fichero ejemplo "Nota: El comando cd no muestra salida."`
        );

        // -------------------------Estructura FS--------------------------------
        await this.terminal.execute('cd /home/desafio_1', false);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego te movió a la carpeta /home/desafio_1 ${ANSI_COLORS.RESET}`
        );

        this.terminal.fileSystem.createFromJson(
            {
                name: 'ejemplo.txt',
                type: 'f',
                prop: this.terminal.state.user,
                group: 'guest',
                p: 'rwxr-xr-x',
            },
            {lvl: 1, parent: this.terminal.fileSystem.getDir('/home/desafio_1')}
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego creo el archivo ejemplo.txt ${ANSI_COLORS.RESET}`
        );

        this.terminal.fileSystem.createFromJson(
            {
                name: 'copy',
                type: 'd',
                prop: this.terminal.state.user,
                group: 'guest',
                p: 'rwxr-xr-x',
            },
            {lvl: 1, parent: this.terminal.fileSystem.getDir('/home/desafio_1')}
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego creo la carpeta copy ${ANSI_COLORS.RESET}`
        );
        //----------------------------------------------------------------------

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   El comando cp se utiliza para copiar archivos y directorios en el sistema de archivos. Puedes utilizarlo para crear copias de seguridad de archivos importantes o para duplicar archivos en diferentes ubicaciones.`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando cp ejemplo.txt copy${ANSI_COLORS.RESET}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'cp ejemplo.txt copy',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ' Salida: El archivo se copio en la ubicación especificada.'
        );

        // -------------------------Estructura FS--------------------------------
        await this.terminal.execute('cd copy', false);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego te movió a la carpeta copy ${ANSI_COLORS.RESET}`
        );
        // ---------------------------------------------------------------------

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   El comando rm se utiliza para eliminar archivos o directorios en el sistema de archivos.`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando rm ejemplo.txt ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.ROJO} Ten en cuenta que una vez que se elimina un archivo, no se puede recuperar, así que asegúrate de estar seguro antes de ejecutar el comando ${ANSI_COLORS.RESET}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'rm ejemplo.txt',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ' Salida: El se elimino el ejemplo.txt archivo "Nota: El comando mkdir no muestra salida."'
        );

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `  El comando cat se utiliza para mostrar el contenido de un archivo de texto en la terminal. Puede mostrar el contenido completo del archivo o parte de él según cómo se utilice.`
        );

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.CYAN} Sintaxis cat nombre_archivo.txt (reemplaza "nombre_archivo.txt" por el nombre real del archivo) en la terminal. ${ANSI_COLORS.RESET} `
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` También el comando cat sirven para crear archivos.`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.CYAN} Sintaxis cat > nombre_archivo.txt  (reemplaza "nombre_archivo.txt" por el nombre real del archivo) en la terminal. ${ANSI_COLORS.RESET} `
        );

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando cat > prueba.txt${ANSI_COLORS.RESET}`
        );

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Se te abrirá un mini editor para crear el contenido del archivo pon lo que quieras y apreté enter.${ANSI_COLORS.RESET}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'cat > prueba.txt',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ' Salida: El contenido del archivo se mostrará en la terminal.'
        );

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Desafío Completado Recompensa 10 LnX Coins. ${ANSI_COLORS.RESET}`
        );

        electrumCli.winLnx(this.terminal, 10);

        new DB(this.terminal).insertOrUpdate('desafios', a => a.user == user, {
            desafio_1: true,
        });

        return '';
    }
}
