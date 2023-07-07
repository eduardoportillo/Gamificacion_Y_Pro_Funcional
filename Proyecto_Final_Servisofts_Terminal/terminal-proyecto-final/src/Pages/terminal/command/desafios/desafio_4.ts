import STerminal from 'servisofts-terminal';
import desafio from '../desafio';
import ANSI_COLORS from '../../../../utils/ANSI_COLORS';
import {SThread} from 'servisofts-component';
import electrumCli from '../electrumCli';
import DB from '../db';

export default class desafio_4 {
    private terminal: STerminal;

    constructor(terminal: STerminal) {
        this.terminal = terminal;
        this.startChallenge();
    }

    async startChallenge() {

        // const user = this.terminal.state.user;
        // let userData = new DB(this.terminal).find("desafios", a => a.user == user) ?? {};
        // if (!userData["desafio_3"]) {
        //     this.terminal.println("Debe completar el desafio 3")
        //     return ""
        // }
        
        this.terminal.fileSystem.createFromJson(
            {
                name: 'desafio_4',
                type: 'd',
                childrens: [
                    {
                        name: 'sospechoso',
                        type: 'd',
                        childrens: [
                            ,
                            {
                                name: 'trampa_1.txt',
                                type: 'f',
                                value: 'hola eduardo',
                                prop: this.terminal.state.user,
                                group: 'guest',
                                p: 'rwx-----',
                            },
                            {
                                name: 'trampa_2.txt',
                                type: 'f',
                                value: 'hola eduardo',
                                prop: this.terminal.state.user,
                                group: 'guest',
                                p: 'rwx-----',
                            },
                            {
                                name: 'trampa_3.txt',
                                type: 'f',
                                value: 'hola eduardo',
                                prop: this.terminal.state.user,
                                group: 'guest',
                                p: 'rwx-----',
                            },
                        ],
                    },
                    {
                        name: 'cofre',
                        type: 'd',
                        childrens: [
                            {
                                name: 'tesoro.txt',
                                type: 'f',
                                value: 'pilaste el tesoro :D te ganaste 10 LnX Coins',
                                prop: this.terminal.state.user,
                                group: 'guest',
                                p: 'rwx-----',
                            },
                        ],
                        prop: this.terminal.state.user,
                        group: 'guest',
                        p: 'rwx-----',
                    },
                ],
            },
            {lvl: 1, parent: this.terminal.fileSystem.getDir('/home')}
        );

        this.terminal.execute('cd /home/desafio_4', false);

        this.terminal.println(
            `${ANSI_COLORS.VERDE_CLARO} Desafío 4 [Búsqueda del Tesoro][Fácil] ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Pista 1: ${ANSI_COLORS.RESET}`
        );

        this.terminal.println(
            ` Estás en una ubicación en el sistema completamente aleatoria, lo ideal es que sepas primero donde te encuentras.`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'pwd',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: `
        );

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Pista 2: ${ANSI_COLORS.RESET}`
        );

        this.terminal.println(
            `  ahora debes pillar un fichero sospechoso dentro de tu ruta actual, lo ideal es listar el directorio en el que te encuentras.`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'ls',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: `
        );

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Pista 3: ${ANSI_COLORS.RESET}`
        );

        this.terminal.println(`  dirígete a la carpeta "sospechoso"`);

        await desafio.readPrompRecursive(
            {
                spect: 'cd sospechoso',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: `
        );

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Pista 4: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` perfecto ahora que ya estás en el fichero sospechoso mueve el archivos trampa_1.txt a la carpeta basurero.`
        );
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'mv trampa_1.txt basurero',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: `
        );

        this.terminal.println(
            ` mueve el archivos trampa_2.txt a la carpeta basurero.`
        );
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'mv trampa_2.txt basurero',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: `
        );

        this.terminal.println(
            ` mueve el archivos trampa_2.txt a la carpeta basurero.`
        );
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'mv trampa_3.txt basurero',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: `
        );

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO}  Pistas 5: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ahora entra a la carpeta cofre ahi encontraras el tesoro`
        );
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'cd cofre',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: `
        );

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO}  Pistas 6: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` el tesoro lo tienes enfrente solo queda ver que tiene el archivo tesoro.txt`
        );
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'cat tesoro.txt',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            `Salida del comando: `
        );

        electrumCli.winLnx(this.terminal, 10);

        this.terminal.println(
            `${ANSI_COLORS.VERDE} Desafío Completado Recompensa 10 LnX Coins. ${ANSI_COLORS.RESET}`
        );
        
        electrumCli.winLnx(this.terminal, 10);
        new DB(this.terminal).insertOrUpdate('desafios', a => a.user == user, {
            desafio_4: true,
        });
        return '';
    }
}
