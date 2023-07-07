import React from 'react';
import { SComponentContainer, SNavigation } from 'servisofts-component';
import Config from "./Config";
import Assets from './Assets';
import Pages from './Pages';
import Redux from './Redux';
const App = (props) => {
    return <SComponentContainer
        // debug
        assets={Assets}
        inputs={Config.inputs}
        theme={{ themes: Config.theme, initialTheme: "default" }}
    >
        <Redux>
            <SNavigation props={{ title: 'Terminal', pages: Pages }} />
        </Redux>
    </SComponentContainer>
}
export default App;
