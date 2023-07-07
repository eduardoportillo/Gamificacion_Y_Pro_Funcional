import { SPage } from 'servisofts-component';

import root from './root';
import create from './create';
import edit from './edit';
import profile from './profile';

export const Parent = {
    name: "user",
    path: "/user"
}
export default SPage.combinePages(Parent.name, {
    "": root,
     create,
     edit,
     profile
});