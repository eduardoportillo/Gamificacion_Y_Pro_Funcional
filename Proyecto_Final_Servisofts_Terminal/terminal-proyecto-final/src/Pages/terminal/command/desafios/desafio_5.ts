import STerminal from 'servisofts-terminal';
import desafio from '../desafio';
import ANSI_COLORS from '../../../../utils/ANSI_COLORS';
import {SThread} from 'servisofts-component';
import electrumCli from '../electrumCli';
import DB from '../db';

export default class desafio_5 {
    private terminal: STerminal;
    run = true;
    limit = 1000 * 120;
    startTime = 0;
    endTime = 0;

    start() {
        this.run = true;
        this.startTime = new Date().getTime();
        this.endTime = 0;
        this.hilo();
    }

    stop() {
        this.run = false;
    }

    async hilo() {
        if (!this.run) return;
        new SThread(1000, 'desafio_5', true).start(() => {
            if (!this.run) return;
            this.hilo();
            const passTime = new Date().getTime() - this.startTime;
            if (passTime > this.limit) {
                this.run = false;
                this.endTime = new Date().getTime();
                // console.log("SE ACABAO EL TIEMPO", passTime);
                this.terminal.printr('Te quedan 0 secs\n');
                this.terminal.inp.newLine();
                this.terminal.println('Se acabo el tiempo');
                // this.terminal.fileSystem.getDir("/home/desafio_4")
            } else {
                this.terminal.printr(
                    `${ANSI_COLORS.ROJO} Te quedan ` +
                        Math.round((this.limit - passTime) / 1000) +
                        ` secs ${ANSI_COLORS.RESET} `
                );
            }
        });
    }

    constructor(terminal: STerminal) {
        this.terminal = terminal;
        this.startChallenge();
    }

    async startChallenge() {
        const user = this.terminal.state.user;
        let userData =
            new DB(this.terminal).find('desafios', a => a.user == user) ?? {};
        if (!userData['desafio_4']) {
            this.terminal.println('Debe completar el desafio 4');
            return '';
        }

        try {
            await this.terminal.execute('rm -r /home/desafio_5', false);
        } catch (error) {
            console.log(error);
        }

        this.terminal.fileSystem.createFromJson(
            {
                name: 'desafio_5',
                type: 'd',
                childrens: [
                    {
                        name: 'documentos',
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
            ` ${ANSI_COLORS.AZUL} El Juego creo el directorio documentos ${ANSI_COLORS.RESET}`
        );

        await this.terminal.execute('cd /home/desafio_5', true);

        this.terminal.println(
            ` ${ANSI_COLORS.AZUL} El juego te movió a la carpeta /home/desafio_5 ${ANSI_COLORS.RESET}`
        );

        this.start();
        this.terminal.println(
            `${ANSI_COLORS.VERDE_CLARO} Desafío 5 [Cuenta Regresiva][Fácil]. ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Descripción: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ¡Bienvenido al desafío de cuenta regresiva! Tendrás un tiempo limitado de 2 min para completar una serie de tareas en el sistema de archivos antes de que se agote el tiempo. Cada tarea requerirá el uso de comandos de terminal para realizar acciones específicas. ¡Prepárate y comienza la cuenta regresiva!`
        );

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Instrucción 1: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` lista el directorio actual.`);

        await desafio.readPrompRecursive(
            {
                spect: 'ls',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: `
        );

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Instrucción 2: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` Navega al directorio “documentos”`);
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'cd documentos',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: Navegaste hasta el directorio documentos`
        );

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Instrucción 3: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` crear un directorio llamado “informes”`);
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'mkdir informes',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: Navegaste hasta el directorio documentos`
        );

        this.terminal.execute('cd informes', false);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL} El Juego te lleva al directorio informes ${ANSI_COLORS.RESET}`
        );

        this.terminal.fileSystem.createFromJson(
            {
                name: 'informe_enero.txt',
                type: 'F',
                prop: this.terminal.state.user,
                group: 'guest',
                p: 'rwxr-xr-x',
            },
            {
                lvl: 1,
                parent: this.terminal.fileSystem.getDir(
                    '/home/desafio_5/documentos'
                ),
            }
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL} El Juego creo el archivo informe_enero.txt ${ANSI_COLORS.RESET}`
        );

        this.terminal.execute('mkdir enero', false);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL} El Juego creo el directorio enero ${ANSI_COLORS.RESET}`
        );

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Instrucción 4: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` Aqui mueve el archivo informe_enero.txt al directorio enero`
        );
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'mv informe_enero.txt enero',
                promp: 'Ingresa el comando % ',
            },
            this.terminal
        );

        this.terminal.fileSystem.createFromJson(
            {
                name: 'informe_herrado',
                type: 'F',
                prop: this.terminal.state.user,
                group: 'guest',
                p: 'rwxr-xr-x',
            },
            {
                lvl: 1,
                parent: this.terminal.fileSystem.getDir(
                    '/home/desafio_5/documentos'
                ),
            }
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL} El Juego creo el archivo informe_herrado.txt ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Instrucción 5: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` Ahora para concluir elimina el archivo informe_herrado.txt.`
        );
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'rm informe_herrado.txt',
                promp: 'Ingresa el comando % ',
            },
            this.terminal
        );

        this.stop();
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Desafío Completado Recompensa 10 LnX Coins. ${ANSI_COLORS.RESET}`
        );

        electrumCli.winLnx(this.terminal, 10);
        new DB(this.terminal).insertOrUpdate('desafios', a => a.user == user, {
            desafio_5: true,
        });
        return '';
    }
}
