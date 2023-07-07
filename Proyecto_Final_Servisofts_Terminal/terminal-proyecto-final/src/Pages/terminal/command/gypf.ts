import STerminal from 'servisofts-terminal';
import DB from './db';

export default class gypf extends STerminal.CommandAbstract {

    execute(props: any): String {
        if (!props[1]) {
            return 'Para ver los comandos del sistema corra gypf -help no olvides que cada comando tiene su atributo -help o -h para su documentación.';
        }
        switch (props[1]) {
            case '-help':
                return this.help(props);
            case '-h':
                return this.help(props);

            case 'challenges':
                return this.challenges(props);
            case '-c':
                return this.challenges(props);

            case 'start-challenge':
                return this.start_challenge(props);
            case '-s':
                return this.start_challenge(props);

            case 'store':
                return this.store(props);

            case 'collection':
                return this.collection(props);
        }
        return 'Error';
    }

    help(props) {
        this.terminal.println(
            ` #################### Gasificación y Programación Funcional ####################`
        );
        this.terminal.println(``);
        this.terminal.println(
            ` ############################## gypf [commands] ################################`
        );
        this.terminal.println(``);
        this.terminal.println(
            ` start-challenge   Inicia el desafió en el que te encuentras.`
        );
        this.terminal.println(
            ` challenges        Te muestra la ruta de los desafíos superados y por superar.`
        );
        this.terminal.println(
            ` store             Abre la tienda en donde podrás comprar items para tu terminal.`
        );
        this.terminal.println(
            ` collection        Para configurar tu items en la terminal y ver tu colección.`
        );
        this.terminal.println(``);
        this.terminal.println(
            ` ####################  Documentación Comandos Externos  ##############################`
        );
        this.terminal.println(``);
        this.terminal.println(` useradd          Te permite crear un usuario`);
        this.terminal.println(
            ` su               Te permite Iniciar Sesión con un usuario.`
        );
        this.terminal.println(
            ` exit             Te permite cerrar sesión al igual que cortar algunas ejecuciones.`
        );
        this.terminal.println(
            ` electrum-cli     Te permite ver el balance de tu billetera Crypto.`
        );
        this.terminal.println(``);
        return '';
    }

    getEstado(obj, name) {
        return obj[name] ? "COMPLETADO" : "PENDIENTE"
    }
    challenges(props) {
        const user = this.terminal.state.user;
        let json = new DB(this.terminal).find("desafios", a => a.user == user) ?? {};
        let stream = "";
        stream += `${"00".padStart(10, " ")}${"00"}\n`;
        stream += `003   1\n`;
        stream += `2100   10220\n`;
        this.terminal.println(stream)
        return ""
        // console.log(json);
        this.terminal.println(`Desafíos`);
        this.terminal.println(` .-> Desafío 1 [Aprendizaje][Fácil] ${this.getEstado(json, "desafio_1")}`);
        this.terminal.println(` |`);
        this.terminal.println(` .-> Desafío 2 [Aprendizaje][Intermedio] ${this.getEstado(json, "desafio_2")}`);
        this.terminal.println(` |`);
        this.terminal.println(` .-> Desafío 3 [Aprendizaje][Dificil] ${this.getEstado(json, "desafio_3")}`);
        this.terminal.println(` |`);
        this.terminal.println(` .-> Desafío 4 [Búsqueda del Tesoro][Fácil] ${this.getEstado(json, "desafio_4")}`);
        this.terminal.println(` |`);
        this.terminal.println(` .-> Desafío 5 [Cuenta Regresiva][Fácil]`);
        this.terminal.println(` |`);
        this.terminal.println(
            ` .-> Desafío 6 [Trivia][Fácil]         <-------------------------<<<<<< Te Encuentras Aquí.`
        );
        this.terminal.println(` |`);
        this.terminal.println(` .-> Ganaste el Escudo “Explorador de Comando`);
        this.terminal.println(``);

        this.terminal.println(` #############################################`);
        this.terminal.println(``);

        this.terminal.println(` |`);
        this.terminal.println(
            ` .-> Desafío 7 [Búsqueda del Tesoro][Intermedio]`
        );
        this.terminal.println(` |`);
        this.terminal.println(` .-> Desafío 8 [Cuenta Regresiva][Intermedio]`);
        this.terminal.println(` |`);
        this.terminal.println(` .-> Desafío 9 [Trivia][Intermedio]`);
        this.terminal.println(` |`);
        this.terminal.println(
            ` .-> Ganaste el Escudo  “Especialista en Comandos`
        );
        this.terminal.println(``);

        this.terminal.println(` #############################################`);
        this.terminal.println(``);

        this.terminal.println(` |`);
        this.terminal.println(` .-> Desafío 10 [Búsqueda del Tesoro][Difícil]`);
        this.terminal.println(` |`);
        this.terminal.println(` .-> Desafío 11 [Cuenta Regresiva][Difícil]`);
        this.terminal.println(` |`);
        this.terminal.println(` .-> Desafío 12 [Trivia][Difícil]`);
        this.terminal.println(` |`);
        this.terminal.println(` .-> Ganaste el Escudo  “Gurú de la Consola`);
        this.terminal.println(``);

        this.terminal.println(` #############################################`);

        return '';
    }

    start_challenge(props) {
        this.terminal.println(`start_challeng”`);
        return '';
    }



    store(props) {

        return '';
    }

    collection(props) {
        this.terminal.println(`collection`);
        return '';
    }

    static createUserFile(terminal) {
        // Estructura
        {
            user: {
                desafios: {
                    desafio_1: false;
                }

                items: {

                }
            }
        }

        let electrumCliFile = JSON.parse(
            terminal.fileSystem.getFile('/etc/electrumCli').value
        );

        if (electrumCliFile.user || electrumCliFile.length == 0) {
            electrumCliFile.push({
                user: terminal.state.user,
                total: {
                    // LnXCoin: LnXCoin,
                },
            });
        } else {
            electrumCliFile.filter(item => {
                if (item.user == terminal.state.user) {
                    // item.total.LnXCoin += LnXCoin;
                }
            });
        }

        terminal.fileSystem.getFile('/etc/electrumCli').value =
            JSON.stringify(electrumCliFile);

        terminal.execute('fs save');
        return '';
    }
}
