import STerminal from 'servisofts-terminal';
import ANSI_COLORS from '../../../utils/ANSI_COLORS';

export default class electrumCli extends STerminal.CommandAbstract {
    execute(props: any): String {
        switch (props[1]) {
            case 'getbalance':
                return this.getbalance(props);
            case 'test':
                return electrumCli.winLnx(this.terminal, 10);
        }
        return 'Error';
    }

    getbalance(props) {
        let electrumCliFile = JSON.parse(
            this.terminal.fileSystem.getFile('/etc/electrumCli').value
        );
        console.log(electrumCliFile);
        let result = electrumCliFile.filter(
            item => item.user == this.terminal.state.user
        );

        this.terminal.println(
            `${ANSI_COLORS.VERDE} ${JSON.stringify(result)} ${ANSI_COLORS.RESET
            }`
        );
        return '';
    }

    static winLnx(terminal: STerminal, LnXCoin: number) {
        let array_electrum: [any] = JSON.parse(
            terminal.fileSystem.getFile('/etc/electrumCli').value
        );

        console.log(array_electrum.length)

        let user = array_electrum.find(item => {
            return item.user == terminal.state.user
        });

        if (!user) {
            array_electrum.push({
                user: terminal.state.user,
                total: {
                    LnXCoin: LnXCoin,
                },
            });
        } else {

            if (user.total) {
                user.total.LnXCoin += LnXCoin;
            }
        }

        terminal.fileSystem.getFile('/etc/electrumCli').value = JSON.stringify(array_electrum);
        terminal.fileSystem.save();
        return '';
    }
}
