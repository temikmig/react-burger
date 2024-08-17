import { TIngredient } from "../../utils/types";

import {
    ADD_INGREDIENT,
    DEL_INGREDIENT,
    CLEAR_INGREDIENTS,
    MOVE_INGREDIENTS
} from "../constants/burger-constructor";

export interface IAddIngredientAction {
    readonly type: typeof ADD_INGREDIENT;
    readonly ingredient: TIngredient;
}

export interface IDelIngredientAction {
    readonly type: typeof DEL_INGREDIENT;
    readonly uid: string;
}

export interface IClearIngredientsAction {
    readonly type: typeof CLEAR_INGREDIENTS;
}

export interface IMoveIngredientsAction {
    readonly type: typeof MOVE_INGREDIENTS;
    readonly toIndex: number;
    readonly fromIndex: number;
}

export const addIngredient = (ingredient:TIngredient):IAddIngredientAction => ({
    type: ADD_INGREDIENT,
    ingredient
});

export const delIngredient = (uid:any):IDelIngredientAction => ({
    type: DEL_INGREDIENT,
    uid
});

export const clearIngredients = () => ({
    type: CLEAR_INGREDIENTS,
});

export const moveIngredients = (toIndex:number, fromIndex:number):IMoveIngredientsAction => ({
    type: MOVE_INGREDIENTS,
    toIndex, 
    fromIndex
});

export type TIngredientsActions =
  | IAddIngredientAction
  | IDelIngredientAction
  | IClearIngredientsAction
  | IMoveIngredientsAction;