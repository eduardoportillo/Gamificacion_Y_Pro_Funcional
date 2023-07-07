import React, { Component } from 'react';
import STerminal from 'servisofts-terminal'

// Commands
import gypf from './command/gypf';
import electrumCli from './command/electrumCli';
import desafio from './command/desafio';


const startScript = `
gypf
help
`

export default class index extends Component {
    render() {
        return <STerminal
            host={"asus"}
            startCommand={startScript}
            commands={{
                gypf,
                "electrum-cli": electrumCli,
                desafio
            }}
        />
    }
}
