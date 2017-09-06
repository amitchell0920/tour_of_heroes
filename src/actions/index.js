import * as types from "../constants";

export const saveHero = (id, name) => ({ type: types.SAVE_HERO, id, name });
