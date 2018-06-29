export const NAME_SCENE = 'NAME_SCENE';
export const NEW_SCENE = 'NEW_SCENE';
export const LOAD_SCENE = 'LOAD_SCENE';
export const TOGGLE_COORD_SKY = 'TOGGLE_COORD_SKY';
export const CHANGE_SKY_COLOR = 'CHANGE_SKY_COLO';
export const CHANGE_CAM_MODE  = 'CHANGE_CAM_MODE';
export const SET_CAMERA = 'SET_CAMERA';
export const CHANGE_PERSPECTIVE = 'CHANGE_PERSPECTIVE';

/**
* @summary - This function registers the scene's name with Redux
* 
* @param {string} name - the name is givn by the user or when a scene is loarded
* 
* @returns - a reducer action with type:NAME_SCENE
*/
export function nameScene(name){
  return {type: NAME_SCENE, name};
}

/**
* @summary - This function registers the scene's id with Redux
* 
* @param {string} id - the id of the loaded scene
* 
* @returns - a reducer action with type:LOAD_SCENE
*/
export function loadScene(id){
  return {type: LOAD_SCENE, id };
}

export function toggleCoordSky(){
  return {type: TOGGLE_COORD_SKY };
}

export function changeSkyColor(color){
  return {type: CHANGE_SKY_COLOR, color };
}

export function changeCamMode(config){
  return {type: CHANGE_CAM_MODE, config};
}

export function setCamera(x,y,z){
  return {type: SET_CAMERA, x, y, z};
}

export function changePerspective(){
  return {type: CHANGE_PERSPECTIVE };
}