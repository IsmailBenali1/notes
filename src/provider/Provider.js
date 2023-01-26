//  2ÈME ÉTAPE
import { useReducer, useEffect } from "react";
// On récupère le contexte crée qui va nous fournir le Provider (Objet du context API)
// qui pourra ensuite passer en props le reducer aux composants enfants

import { initialState, reducer } from "../reducer/reducer";
import NotesContext from "../context/NotesContext";

// En props "children" pour passer les datas aux enfants
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // Ici on récupère le context pour passer les datas aux composants enfants
    // grâce au Provider fournit du context api
    <NotesContext.Provider value={[state, dispatch]}>
      {children}
    </NotesContext.Provider>
  );
};

export default Provider;
