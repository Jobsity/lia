import { SET_CURRENT_LANGUAGE } from './types';

export function setCurrentLanguage(language) {
  return {
    type: SET_CURRENT_LANGUAGE,
    payload: { language }
  };
}
