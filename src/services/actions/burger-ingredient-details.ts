import { TIngredient } from "../../utils/types";

import {
    ADD_INGREDIENT_DETAILS_MODAL,
    DEL_INGREDIENT_DETAILS_MODAL
} from "../constants/burger-ingredient-details";

export interface IAddIngredientDetailsAction {
    readonly type: typeof ADD_INGREDIENT_DETAILS_MODAL;
    readonly ingredient: TIngredient;
}

export interface IDelIngredientDetailsAction {
    readonly type: typeof DEL_INGREDIENT_DETAILS_MODAL;
    _id: string;
}

export const addIngredientDetailsModal = (ingredient:TIngredient):IAddIngredientDetailsAction => ({
    type: ADD_INGREDIENT_DETAILS_MODAL,
    ingredient
});

export const delIngredientDetailsModal = (_id:string):IDelIngredientDetailsAction => ({
    type: DEL_INGREDIENT_DETAILS_MODAL,
    _id
});

export type TIngredientDetailsActions =
  | IAddIngredientDetailsAction
  | IDelIngredientDetailsAction;