import STerminal from 'servisofts-terminal';
import desafio from '../desafio';
import ANSI_COLORS from '../../../../utils/ANSI_COLORS';
import electrumCli from '../electrumCli';
import DB from '../db';

export default class desafio_2 {
    private terminal: STerminal;

    constructor(terminal: STerminal) {
        this.terminal = terminal;
        this.startChallenge();
    }

    async startChallenge() {


        const user = this.terminal.state.user;
        // let userData = new DB(this.terminal).find("desafios", a => a.user == user) ?? {};
        // if (!userData["desafio_1"]) {
        //     this.terminal.println("Debe completar el desafio 1")
        //     return ""
        // }


        try {
            await this.terminal.execute('rm -r /home/desafio_2', false);
        } catch (error) {
            console.log(error);
        }
        this.terminal.fileSystem.createFromJson(
            {
                name: 'desafio_2',
                type: 'd',
                childrens: [
                    {
                        name: '.carpeta_oculta',
                        type: 'd',
                        prop: this.terminal.state.user,
                        group: 'guest',
                        p: 'rwxr-xr-x',
                    },
                    {
                        name: 'carpeta_1',
                        type: 'd',
                        prop: this.terminal.state.user,
                        group: 'guest',
                        p: 'rwxr-xr-x',
                    },
                    {
                        name: 'carpeta_2',
                        type: 'd',
                        prop: this.terminal.state.user,
                        group: 'guest',
                        p: 'rwxr-xr-x',
                    },
                    {
                        name: 'carpeta_3',
                        type: 'd',
                        prop: this.terminal.state.user,
                        group: 'guest',
                        p: 'rwxr-xr-x',
                    },
                    {
                        name: 'readme.txt',
                        type: 'f',
                        value: 'hola mundo \\n Proyecto de Gamificación y programación funcional\\n',
                        prop: this.terminal.state.user,
                        group: 'guest',
                        p: 'rwxr-xr-x',
                    },
                ],
                prop: this.terminal.state.user,
                group: 'guest',
                p: 'rwxr-xr-x',
            },
            { lvl: 1, parent: this.terminal.fileSystem.getDir('/home') }
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego creo la carpeta desafio_2 ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego creo la carpeta .carpeta_oculta ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego creo la carpeta carpeta_1 ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego creo la carpeta carpeta_2 ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego creo la carpeta carpeta_3 ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego creo el archivo readme.txt ${ANSI_COLORS.RESET}`
        );

        await this.terminal.execute('cd /home/desafio_2', true);

        this.terminal.println(
            ` ${ANSI_COLORS.AZUL_CLARO} El juego te movió a la carpeta /home/desafio_2 ${ANSI_COLORS.RESET}`
        );

        this.terminal.println(
            `${ANSI_COLORS.VERDE} Desafío 2 [Aprendizaje][Intermedio]: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Introducción: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` la mayoría de comandos tienen algo denominado atributos, los atributos son opciones o configuraciones adicionales que se utilizan junto con el comando principal para modificar su comportamiento o ampliar sus funcionalidades.`
        );

        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Título: el comando ls y sus atributos. ${ANSI_COLORS.AMARILLO}`
        );
        this.terminal.println(` `);

        // ls -l
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   atributo -l:   lista todos los objetos en formato largo (o detallado).`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE}Ejecuta el comando ls -l ${ANSI_COLORS.RESET}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'ls -l',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
        );

        // ls -a
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` -a todos los archivos, incluso los que comienzan con punto (.). `
        );
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Ejecuta el comando ls -al ${ANSI_COLORS.AMARILLO}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'ls -al', // TODO falta comando l -a
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
        );

        // TODO ls -h
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(` -h indicará el tamaño en KB, MB, etc.`);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE} Ejecuta el comando ls -h   ${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'ls -h', // TODO falta comando l -h
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        // );

        // TODO ls -S
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     ` -S clasifica los contenidos de los directorios por tamaños, con los ficheros más grandes en primer lugar.`
        // );
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE} Ejecuta el comando ls -S ${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'ls -S', // TODO falta comando l -S
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        // );

        // ls -r
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` -r invierte el orden de la salida.`);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Ejecuta el comando ls -rl ${ANSI_COLORS.RESET}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'ls -rl',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
        );

        // TODO ls -t
        // this.terminal.println(` -t ordenar por fecha de última modificación.`);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE} Ejecuta el comando ls -t ${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'ls -t', // TODO falta comando l -t
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        // );

        // TODO ls -u
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(` -u ordenar por fecha de último acceso.`);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE} Ejecuta el comando ls -u ${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'ls -u', // TODO falta comando l -u
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        // );

        // ls -F
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     ` -F indica tipo: / directorio, * ejecutable, @ enlace simbólico.`
        // );
        // this.terminal.println(` ${ANSI_COLORS.VERDE} Ejecuta el comando ls -F ${ANSI_COLORS.RESET}`);

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'ls -F', // TODO falta comando l -F
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        // );

        // this.terminal.println(` `);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE} Título: el comando mv y sus atributos. ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(` `);



        // TODO mv -u no medio tiempo
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     `  -u (o --update): Este atributo solo mueve archivos cuando el archivo de origen es más reciente o tiene un tamaño diferente que el archivo de destino. Se utiliza para evitar movimientos innecesarios cuando los archivos ya existen en el destino y no han cambiado.`
        // );
        // this.terminal.println(` `);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Ejecuta el comando mv -u ${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'mv -u',
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        //     ' Salida: '
        // );
        // this.terminal.println(` `);

        // TODO mv - v; no medio tiempo

        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     ` -v (o --verbose): Este atributo muestra un mensaje detallado para cada archivo o directorio movido, indicando la ruta de origen y destino`
        // );
        // this.terminal.println(` `);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando mv -v carpeta_4 carpeta_3 ${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'mv -v carpeta_4 carpeta_3',
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        //     ' Salida: '
        // );
        // this.terminal.println(` `);

        // TODO mv -b no me dio tiempo
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación:${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     ` -b (o --backup): Este atributo crea una copia de respaldo de cualquier archivo existente en el destino antes de realizar el movimiento. El archivo de respaldo tendrá un sufijo agregado al nombre original.`
        // );
        // this.terminal.println(` `);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando mv -b ${ANSI_COLORS.RESET}`
        // );
        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'mv -b',
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        //     ' Salida: '
        // );
        // this.terminal.println(` `);

        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE} Título: el comando cp y sus atributos. ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(` `);

        // cp -r
        await this.terminal.execute('mkdir copy', true);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL} El juego creo carpeta /copy ${ANSI_COLORS.RESET}`
        );

        await this.terminal.execute('mkdir copy_recursivo', true);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL} El juego creo carpeta /copy_recursivo ${ANSI_COLORS.RESET}`
        );

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   -r Este atributo permite copiar directorios de forma recursiva. Cuando utilizas cp -r, cp copiará no solo el directorio especificado, sino también todos los archivos y subdirectorios que se encuentren dentro de él, manteniendo la estructura de directorios original.`
        );
        this.terminal.println(` `);
        this.terminal.println(` Sintaxis cp -r [directorio] [directorio]`);
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando cp -r copy_recursivo copy ${ANSI_COLORS.RESET}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'cp -r copy_recursivo copy', // TODO falta co    mando cp -r
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ' Salida: se copio el directorio /copy_recursivo en /copy'
        );
        this.terminal.println(` `);

        // TODO cp -i no me dio tiempo
        // await this.terminal.execute('mkdir carpeta_cp-i', true);

        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     `  -i Este atributo hace que cp te pregunte antes de sobrescribir un archivo existente. Si estás copiando un archivo y ya existe un archivo con el mismo nombre en el destino, cp te pedirá confirmación antes de reemplazarlo.`
        // );
        // this.terminal.println(` `);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando cp -i carpeta_cp-i carpeta_cp-i_copy ${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'cp -i carpeta_cp-i carpeta_cp-i_copy',
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        //     ' Salida: '
        // );
        // this.terminal.println(` `);

        // TODO cp -n no me dio tiempo
        // await this.terminal.execute('mkdir carpeta_no_repetir', true);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AZUL} El juego creo carpeta  carpeta_no_repetir${ANSI_COLORS.RESET}`
        // );

        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     `  -n Con este atributo, cp no sobrescribirá archivos existentes. Si intentas copiar un archivo y ya hay un archivo con el mismo nombre en el destino, cp simplemente omitirá ese archivo y continuará con el siguiente.`
        // );
        // this.terminal.println(` `);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE_CLARO}Ejecuta el comando cp -n carpeta_no_repetir copy ${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'cp -n carpeta_no_repetir copy',
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        //     ' Salida: '
        // );
        // this.terminal.println(` `);

        // TODO cp -b no me dio tiempo
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     `  -b Al utilizar este atributo, cp creará una copia de seguridad del archivo original antes de sobrescribirlo. La copia de seguridad tendrá un sufijo agregado al nombre del archivo original, como por ejemplo, archivo.txt.`
        // );
        // this.terminal.println(` `);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando cp -b ${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'cp -b',
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        //     ' Salida: '
        // );
        // this.terminal.println(` `);

        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE} Título: el comando rm y sus atributos. ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(` `);

        // rm -r
        this.terminal.execute('mkdir carpeta_por_eliminar', true);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL} El Juego Creo /carpeta_por_eliminar ${ANSI_COLORS.RESET}`
        );

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   -r (o --recursive): Este atributo se utiliza para eliminar directorios y su contenido de forma recursiva. Sin este atributo, el comando rm solo puede eliminar archivos individuales y no puede eliminar directorios.`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.ROJO} Ten en cuenta que una vez que se elimina un archivo, no se puede recuperar, así que asegúrate de estar seguro antes de ejecutar el comando ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando rm -r carpeta_por_eliminar${ANSI_COLORS.RESET}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'rm -r carpeta_por_eliminar',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ' Salida: se elimino el directoiro carpeta_por_eliminar "Nota: El comando mkdir no muestra salida."'
        );
        this.terminal.println(` `);

        // TODO rm -i Corta ejecución de desafio por menu interactivo 
        // this.terminal.execute('mkdir carpeta_por_eliminar', true);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AZUL} El Juego Creo /carpeta_por_eliminar ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     `   -i (o --interactive): Este atributo activa el modo interactivo, lo que significa que el comando rm solicitará confirmación antes de eliminar cada archivo o directorio. Se te pedirá que confirmes o niegues la eliminación.`
        // );
        // this.terminal.println(` `);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando rm -i carpeta_por_eliminar${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'rm -i carpeta_por_eliminar', //TODO falta comando rm -i
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        //     ' Salida: '
        // );
        // this.terminal.println(` `);

        // TODO rm -f no me dio tiempo
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     `   -f (o --force): Este atributo permite eliminar archivos y directorios sin solicitar confirmación, incluso si son de solo lectura o protegidos contra escritura. El comando rm se ejecutará sin mostrar mensajes de advertencia o errores.`
        // );
        // this.terminal.println(` `);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando rm -f ${ANSI_COLORS.RESET}`
        // );

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'rm -r',
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        //     ' Salida: '
        // );
        // this.terminal.println(` `);

        // rm -v
        this.terminal.execute('mkdir carpeta_por_eliminar', true);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL} El Juego Creo /carpeta_por_eliminar ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(``);

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   -v (o --verbose): Este atributo muestra un mensaje detallado para cada archivo o directorio eliminado, indicando su nombre y confirmación de eliminación.`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Ejecuta el comando rm -v carpeta_por_eliminar${ANSI_COLORS.RESET}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'rm -v carpeta_por_eliminar', //TODO falta comando rm -v
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ' Salida: '
        );
        this.terminal.println(` `);

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Título: el comando cat y sus atributos. ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);

        // cat -n
        this.terminal.println(
            `  ${ANSI_COLORS.VERDE_CLARO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   -n (o --number): Este atributo muestra el contenido del archivo junto con los números de línea. Cada línea se numerará secuencialmente.`
        );
        this.terminal.println(`Sintaxis: cat nombre_archivo -n`);
        this.terminal.println(
            `  ${ANSI_COLORS.AMARILLO} Ejecuta el comando cat -n readme.txt  ${ANSI_COLORS.RESET}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'cat -n readme.txt',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ' Salida: '
        );
        this.terminal.println(` `);

        // cat -s
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   -s (o --squeeze-blank): Este atributo comprime las líneas en blanco consecutivas en una sola línea en la salida. Si hay varias líneas en blanco seguidas, se mostrará solo una línea en blanco.`
        );
        this.terminal.println(`Sintaxis: cat nombre_archivo -s`);
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Ejecuta el comando cat -s readme.txt ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'cat -s readme.txt',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ' Salida: '
        );
        this.terminal.println(` `);

        // cat -E
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO}  Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            `   -E (o --show-ends): Este atributo muestra un carácter $ al final de cada línea en la salida. Es útil para visualizar los finales de línea`
        );
        this.terminal.println(`Sintaxis: cat -E nombre_archivo `);
        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Ejecuta el comando cat -E readme.txt  ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(` `);

        await desafio.readPrompRecursive(
            {
                spect: 'cat -E readme.txt',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ' Salida: '
        );
        this.terminal.println(` `);

        // cat -T NO Por que inútil
        // this.terminal.println(
        //     ` ${ANSI_COLORS.VERDE_CLARO} Explicación: ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(
        //     `   -T (o --show-tabs): Este atributo muestra los caracteres de tabulación como ^I en la salida. Es útil para visualizar los caracteres de tabulación en un archivo.`
        // );
        // this.terminal.println(`Sintaxis: cat -T nombre_archivo `);
        // this.terminal.println(
        //     ` ${ANSI_COLORS.AMARILLO} Ejecuta el comando cat -T prueba  ${ANSI_COLORS.RESET}`
        // );
        // this.terminal.println(` `);

        // await desafio.readPrompRecursive(
        //     {
        //         spect: 'cat -T prueba ',
        //         promp: 'Ingresa el comando % ',
        //     },
        //     this.terminal,
        //     ' Salida: '
        // );
        // this.terminal.println(` `);

        this.terminal.println(
            ` ${ANSI_COLORS.VERDE} Desafío Completado Recompensa 15 LnX Coins. ${ANSI_COLORS.RESET}`
        );
        electrumCli.winLnx(this.terminal, 15);
        // mv -i
        this.terminal.execute('mkdir /carpeta_1/carpeta_2', false);
        this.terminal.println(
            ` ${ANSI_COLORS.AZUL} el jueo creo directorio /carpeta_1/carpeta_2 ${ANSI_COLORS.RESET}`
        );

        this.terminal.println(
            ` ${ANSI_COLORS.AMARILLO} Explicación: ${ANSI_COLORS.RESET}`
        );
        this.terminal.println(
            ` -i (o --interactive): Este atributo activa el modo interactivo, lo que significa que el comando mv solicitará confirmación antes de sobrescribir archivos existentes en el destino. Si el archivo de destino ya existe, se te preguntará si deseas sobrescribirlo.`
        );
        this.terminal.println(
            ` Sintaxis: mv -i [archivo/directorio] [directorio]`
        );
        this.terminal.println(` `);
        this.terminal.println(
            ` ${ANSI_COLORS.VERDE_CLARO}Ejecuta el comando mv -i carpeta_2 carpeta_1 ${ANSI_COLORS.RESET}`
        );

        this.terminal.println(
            ` ${ANSI_COLORS.ROJO} Se pone al final por que corta flujo de desafio por confirmación ${ANSI_COLORS.RESET}`
        );

        await desafio.readPrompRecursive(
            {
                spect: 'mv -i carpeta_2 carpeta_1',
                promp: 'Ingresa el comando % ',
            },
            this.terminal,
            ' Salida: '
        );
        this.terminal.println(` `);

        new DB(this.terminal).insertOrUpdate('desafios', a => a.user == user, {
            desafio_2: true,
        });

        return '';
    }
}
