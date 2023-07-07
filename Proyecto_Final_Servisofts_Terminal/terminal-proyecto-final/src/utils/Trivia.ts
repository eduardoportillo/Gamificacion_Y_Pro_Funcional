import STerminal from "servisofts-terminal";
import ANSI_COLORS from "./ANSI_COLORS";

export default class Trivia {
    static async optionTriviaRecursive(
        {spect, promp},
        terminal: STerminal,
        outputMenssage?: string
    ) {
        return terminal.read({promp: promp}).then(resp => {
            if (resp != spect) {
                terminal.println('Opción Incorrecta.');
                return Trivia.optionTriviaRecursive({spect:spect, promp:promp},terminal);
            } else {
                terminal.println(``);
                terminal.println(`${ANSI_COLORS.VERDE} Seleccionó la Opción Correcta. ${ANSI_COLORS.RESET}`);
                return;
            }
        });
    }
}
