import { Action } from "redux";

export interface ICustomAction extends Action {
    payload: boolean;
}

export interface IContentAction extends Action {
    payload: string;
}

export interface IButtonAction extends Action {
    payload: string;
    context: string;
}