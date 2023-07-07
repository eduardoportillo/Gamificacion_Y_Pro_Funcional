import STerminal from 'servisofts-terminal';
import desafio from '../desafio';
import ANSI_COLORS from '../../../../utils/ANSI_COLORS';
import Trivia from '../../../../utils/Trivia';
import electrumCli from '../electrumCli';
import DB from '../db';

export default class desafio_3 {
    private terminal: STerminal;

    constructor(terminal: STerminal) {
        this.terminal = terminal;
        this.startChallenge();
    }

    async startChallenge() {
        const user = this.terminal.state.user;
        // let userData = new DB(this.terminal).find("desafios", a => a.user == user) ?? {};
        // if (!userData["desafio_2"]) {
        //     this.terminal.println("Debe completar el desafio 2")
        //     return ""
        // }

        try {
            await this.terminal.execute('rm -r /home/desafio_3', false);
        } catch (error) {
            console.log(error);
        }

        this.terminal.fileSystem.createFromJson(
            {
                name: 'desafio_3',
                type: 'd',
                childrens: [
                    {
                        name: 'carpeta_permisos',
                        type: 'd',
                        prop: this.terminal.state.user,
                        group: 'guest',
                        p: 'rwx-----',
                    },
                ],
                prop: this.terminal.state.user,
                group: 'guest',
                p: 'rwxr-xr-x',
            },
            {lvl: 1, parent: this.terminal.fileSystem.getDir('/home')}
        );

        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego creo la carpeta carpeta_permisos con permisos "---------" ${ANSI_COLORS.RESET}`
        );

        await this.terminal.execute('cd /home/desafio_3', true);

        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego te movió a la carpeta /home/desafio_3 ${ANSI_COLORS.RESET}`
        );

        this.terminal.println(
            `${ANSI_COLORS.VERDE} Desafío 3 [Aprendizaje][Difícil]: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.CYAN_CLARO} Introducción: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} El comando chmod en Linux se utiliza para cambiar los permisos de acceso de archivos y directorios. Su nombre proviene de “change mode”, lo que significa cambiar el modo de acceso de un archivo o directorio. Permite al usuario controlar quién puede leer, escribir y ejecutar un archivo o directorio... ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `     Sintaxis chmod [parámetro] modo archivo(s)`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` Modo: Representa los permisos que deseas establecer para el archivo o directorio.  El modo puede especificarse de diferentes maneras de representar al modo:`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.PURPURA} Notación simbólica: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(`         `);
        this.terminal.println(`     u: Usuario (propietario del archivo)`);
        this.terminal.println(`     g: Grupo`);
        this.terminal.println(
            `     o: Otros usuarios (usuarios que no son el propietario ni pertenecen al grupo)`
        );
        this.terminal.println(`     a: Todos los usuarios (equivalente a ugo)`);
        this.terminal.println(` `);
        this.terminal.println(
            `   A continuación, se enumeran los diferentes símbolos utilizados para establecer los permisos:`
        );
        this.terminal.println(`     +: Agrega el permiso especificado`);
        this.terminal.println(`     -: Elimina el permiso especificado`);
        this.terminal.println(
            `     =: Establece el permiso especificado y desactiva cualquier otro permiso`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` Estos símbolos se utilizan junto con las siguientes letras para especificar los permisos:`
        );
        this.terminal.println(`     r: Permiso de lectura`);
        this.terminal.println(`     w: Permiso de escritura`);
        this.terminal.println(`     x: Permiso de ejecución`);
        this.terminal.println(` `);

        this.terminal.println(` `);

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Ejecuta el comando ls -l  para ver el permiso actual${ANSI_COLORS.RESET}`
        );
        await desafio.readPrompRecursive(
            {
                spect: 'ls -l',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ''
        );

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Ejecuta el comando chmod +g rwx carpeta_permisos${ANSI_COLORS.RESET}`
        );

        await Trivia.optionTriviaRecursive(
            {
                spect: 'chmod +g rwx carpeta_permisos',
                promp: 'Ingresa el comando % ',
            },
            this.terminal
        );

        this.terminal.execute(
            'chmod 770 /home/desafio_3/carpeta_permisos',
            false
        );

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Ejecuta el comando ls -l  para ver el permiso actual${ANSI_COLORS.RESET}`
        );
        await desafio.readPrompRecursive(
            {
                spect: 'ls -l',
                promp: 'Ingresa el comando % ',
            },
            this.terminal
        );

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.PURPURA} Notación octal:  ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(`     0: Ningún permiso (---)`);
        this.terminal.println(`     1: Ejecución (--x)`);
        this.terminal.println(`     2: Escritura (-w-)`);
        this.terminal.println(`     3: Escritura y ejecución (-wx)`);
        this.terminal.println(`     4: Lectura (r--)`);
        this.terminal.println(`     5: Lectura y ejecución (r-x)`);
        this.terminal.println(`     6: Lectura y escritura (rw-)`);
        this.terminal.println(`     7: Lectura, escritura y ejecución (rwx)`);
        this.terminal.println(` `);
        this.terminal.println(
            ` Estos números octales se utilizan para establecer los permisos del propietario, grupo y otros usuarios y se representan en el comando de forma secuencial Ej: 777.`
        );

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Ejecuta el comando chmod 777 carpeta_permisos ${ANSI_COLORS.RESET}`
        );
        await desafio.readPrompRecursive(
            {
                spect: 'chmod 777 carpeta_permisos',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
        );

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Ejecuta el comando ls -l  para ver el permiso actual${ANSI_COLORS.RESET}`
        );
        await desafio.readPrompRecursive(
            {
                spect: 'ls -l',
                promp: 'Ingresa el comando % ',
            },
            this.terminal
        );


        // this.terminal.println(` `);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     `   [parámetro]: -R Esta opción se utiliza para cambiar los permisos de forma recursiva en un directorio y todos sus subdirectorios y archivos. 	`
        // );

 

        this.terminal.println(` ${ANSI_COLORS.VERDE} Desafío Completado Recompensa 20 LnX Coins. ${ANSI_COLORS.RESET}`);
 
        electrumCli.winLnx(this.terminal, 20);

        new DB(this.terminal).insertOrUpdate('desafios', a => a.user == user, {
            desafio_3: true,
        });
        return '';
    }
}
