import { SPromise, SThread } from "servisofts-component";
import { ModelType } from ".";
import Http from "../../Http";
import { getStore } from "..";

export default class Action {
    static create(data: ModelType) {
        return Http.POST("/user/create", data);
    }
    static getAll(): ModelType[] {
        const reducer = getStore().getState();
        return reducer.usuario.data
    }
} 