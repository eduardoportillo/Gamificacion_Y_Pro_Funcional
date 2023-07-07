import { SPage, SPageListProps } from 'servisofts-component';

import root from './root';

import user from './user';
import terminal from './terminal/index';
import test from './test';
export default SPage.combinePages("/", {
    // "": root
    "":terminal,
    test,
    ...user,
    terminal
});