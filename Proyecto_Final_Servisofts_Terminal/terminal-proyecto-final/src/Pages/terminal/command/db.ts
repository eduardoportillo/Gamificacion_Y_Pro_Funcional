import STerminal from 'servisofts-terminal';

export default class DB {
    terminal: STerminal
    constructor(terminal: STerminal) {
        this.terminal = terminal;
    }
    getNode(db_name) {
        let node = this.terminal.fileSystem.getFile("/etc/" + db_name);
        if (!node) node = this.createFile(db_name);
        return node;
    }
    get(db_name) {
        let node = this.getNode(db_name);
        return JSON.parse(node.value);
    }
    set(db_name, value) {
        let node = this.getNode(db_name);
        node.value = JSON.stringify(value)
        this.terminal.fileSystem.save();
    }
    push(db_name, value) {
        let arr = this.get(db_name);
        arr.push(value);
        this.set(db_name, arr);
    }
    find(db_name, func) {
        let arr = this.get(db_name)
        return arr.find(a => func(a))
    }
    update(db_name, func, values) {
        let arr = this.get(db_name)
        arr.filter(a => func(a)).map((a) => { a = { ...a, ...values } })
        this.set(db_name, arr)
    }
    insertOrUpdate(db_name, func, values) {
        let arr = this.get(db_name)
        const fil = arr.filter(a => func(a))
        if (fil.length <= 0) {
            arr.push({ ...values })
        } else {
            arr.map((obj, i) => {
                if (!func(obj)) return;
                arr[i] = { ...obj, ...values }
            })
            // fil.map((a) => { a = { ...a, ...values } })
        }
        this.set(db_name, arr)
    }
    // getBy(db_name, props) {
    //     let node = this.getNode(db_name);
    //     node.value = value
    // }

    createFile(db_name) {
        const etc = this.terminal.fileSystem.getDir("/etc");
        const node = new STerminal.FileSystem.File({ name: db_name, group: "root", prop: "root", p: "r-xr-xr-x", parent: etc })
        node.setValue(JSON.stringify([]));
        return node;
    }
}