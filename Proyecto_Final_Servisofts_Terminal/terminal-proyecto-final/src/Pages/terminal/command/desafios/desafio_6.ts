import STerminal from 'servisofts-terminal';
import desafio from '../desafio';
import ANSI_COLORS from '../../../../utils/ANSI_COLORS';
import Trivia from '../../../../utils/Trivia';
import electrumCli from '../electrumCli';
import DB from '../db';

export default class desafio_6 {
    private terminal: STerminal;
    private promp = '>>>';

    constructor(terminal: STerminal) {
        this.terminal = terminal;
        this.startChallenge();
    }

    async startChallenge() {
        const user = this.terminal.state.user;
        let userData =
            new DB(this.terminal).find('desafios', a => a.user == user) ?? {};
        if (!userData['desafio_5']) {
            this.terminal.println('Debe completar el desafio 5');
            return '';
        }

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Desafío 6 [Trivia][Fácil] ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Descripción: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` En este desafío de trivia, se te presentarán preguntas relacionadas con comandos de terminal y deberás seleccionar la respuesta correcta de una lista de opciones. Demuestra tu conocimiento y elige sabiamente para completar el desafío.
            `
        );

        this.terminal.println(
            ` ${ANSI_COLORS.PURPURA} Pregunta 1: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   ${ANSI_COLORS.AMARILLO} ¿Qué comando se utiliza para listar el contenido de un directorio? ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` a) cd`);
        this.terminal.println(` b) ls`);
        this.terminal.println(` c) mkdir`);
        this.terminal.println(` d) rm`);
        this.terminal.println(` `);

        await Trivia.optionTriviaRecursive(
            {spect: 'a', promp: this.promp},
            this.terminal
        );

        this.terminal.println(
            ` ${ANSI_COLORS.PURPURA} Pregunta 2: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} ¿Cuál es el comando utilizado para crear un nuevo directorio? ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` a) pwd`);
        this.terminal.println(` b) cat`);
        this.terminal.println(` c) rm`);
        this.terminal.println(` d) mkdir`);
        this.terminal.println(` `);

        await Trivia.optionTriviaRecursive(
            {spect: 'd', promp: this.promp},
            this.terminal
        );

        this.terminal.println(
            ` ${ANSI_COLORS.PURPURA} Pregunta 3: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} ¿Qué comando se utiliza para mostrar el contenido de un archivo de texto en la terminal? ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` a) ls`);
        this.terminal.println(` b) pwd`);
        this.terminal.println(` c) cat`);
        this.terminal.println(` d) rm`);
        this.terminal.println(` `);

        await Trivia.optionTriviaRecursive(
            {spect: 'c', promp: this.promp},
            this.terminal
        );

        this.terminal.println(
            ` ${ANSI_COLORS.PURPURA} Pregunta 4: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} ¿Cuál es el comando utilizado para eliminar un archivo o directorio? ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` a) cp`);
        this.terminal.println(` b) mv`);
        this.terminal.println(` c) rm`);
        this.terminal.println(` d) chmod`);
        this.terminal.println(` `);

        await Trivia.optionTriviaRecursive(
            {spect: 'c', promp: this.promp},
            this.terminal
        );

        this.terminal.println(
            ` ${ANSI_COLORS.PURPURA} Pregunta 5: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} ¿Cuál es el comando utilizado para mover o renombrar archivos y directorios? ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` a) ls`);
        this.terminal.println(` b) cd`);
        this.terminal.println(` c) mv`);
        this.terminal.println(` d) cp`);
        this.terminal.println(` `);

        await Trivia.optionTriviaRecursive(
            {spect: 'c', promp: this.promp},
            this.terminal
        );

        this.terminal.println(
            ` ${ANSI_COLORS.PURPURA} Pregunta 6: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} ¿Qué comando se utiliza para copiar archivos y directorios? ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` a) ls`);
        this.terminal.println(` b) cd`);
        this.terminal.println(` c) mv`);
        this.terminal.println(` d) cp`);
        this.terminal.println(` `);

        await Trivia.optionTriviaRecursive(
            {spect: 'd', promp: this.promp},
            this.terminal
        );

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Desafío Completado Recompensa 10 LnX Coins. ${ANSI_COLORS.RESET}`
        );

        electrumCli.winLnx(this.terminal, 10);

        new DB(this.terminal).insertOrUpdate('desafios', a => a.user == user, {
            desafio_6: true,
        });
        return '';
    }
}
