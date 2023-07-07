import STerminal from 'servisofts-terminal';
import desafio_1 from './desafios/desafio_1';
import desafio_2 from './desafios/desafio_2';
import desafio_3 from './desafios/desafio_3';
import desafio_6 from './desafios/desafio_6';
import desafio_4 from './desafios/desafio_4';
import desafio_5 from './desafios/desafio_5';
import ANSI_COLORS from '../../../utils/ANSI_COLORS';

export default class desafio extends STerminal.CommandAbstract {
    execute(props: any): String {
        switch (props[1]) {
            case '1':
                new desafio_1(this.terminal);
                return;
            case '2':
                new desafio_2(this.terminal);
                return;
            case '3':
                new desafio_3(this.terminal);
                return;

            case '4':
                new desafio_4(this.terminal);
                return;

            case '5':
                new desafio_5(this.terminal);
                return;
            case '6':
                new desafio_6(this.terminal);
                return;
            // case '7':
            //     return this.desafio_7(props);
            // case '8':
            //     return this.desafio_8(props);
            // case '9':
            //     return this.desafio_9(props);
            // case '10':
            //     return this.desafio_10(props);
            // case '11':
            //     return this.desafio_11(props);
            // case '12':
            //     return this.desafio_12(props);
            default:
                return 'Error';
        }
    }

    static async readPrompRecursive(
        { spect, promp },
        terminal: STerminal,
        outputMenssage?: string
    ) {
        let resp: string = await terminal.read({ promp: promp }).then();

        terminal.println(promp + resp);

        if (resp != spect) {
            terminal.println(
                `${ANSI_COLORS.ROJO} Error, comando no esperado. ${ANSI_COLORS.RESET}`
            );
            return await desafio.readPrompRecursive(
                { spect: spect, promp: promp },
                terminal,
                outputMenssage
            );
        } else {
            terminal.println(``);
            try {
                if (outputMenssage == undefined) {
                    outputMenssage = '';
                }

                terminal.println(
                    ` ${ANSI_COLORS.PURPURA
                    }${outputMenssage} ${await terminal
                        .execute(resp, false)
                        .then()}
                     ${ANSI_COLORS.RESET}`
                );
            } catch (error) {
                terminal.println(error);
            }
        }

        return resp;
    }

    static deleteFSEstructureChallenge(terminal, directory: string) {
        terminal.execute(`rm -r /home/${directory}`);
    }


}
