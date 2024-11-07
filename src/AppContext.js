import { createContext, useContext, useReducer } from "react";
import { ItemID, ItemType } from "./consts";

const UPDATE_CATEGORY = "UPDATE_CATEGORY";
const UPDATE_ITEM = "UPDATE_ITEM";

//最初の状態
const initialState = {
  selectedCategory: ItemType.Body,
  selectedItem: {
    [ItemType.Body]: ItemID.DefaultBody,
    [ItemType.Eyes]: ItemID.DefaultEyes,
    [ItemType.Mouth]: ItemID.HeartMouth,
  },
};

const AppContext = createContext(initialState)

const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_CATEGORY: {
      return {
        ...state,
        selectedCategory: payload,
      };
    }
    case UPDATE_ITEM: {
      const { categoryId, itemId } = payload;
      const { selectedItem } = state;
      return {
        ...state,
        selectedItem: {...selectedItem, [categoryId]: itemId},
      };
    }
    default: {
      return state;
    }
  }
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const value = {state, dispatch};
  return(
    <AppContext.Provider value= {value}>
      {children}
    </AppContext.Provider>
  )
}

const useSelectedItems = () => {
  const {state} = useContext(AppContext);
  if (state === undefined){
    throw new Error("エラー発生中")
  }
  const { selectedItem } = state;
  return selectedItem;
}

const useSelectedCategory = () => {
  const {state} = useContext(AppContext);
  if (state === undefined){
    throw new Error("エラー発生中")
  }
  const { selectedCategory } = state;
  return selectedCategory;
}


const useDispatch = () => {
  const { dispatch } = useContext(AppContext)
  if( dispatch === undefined){
    throw new Error("エラー発生中")
  }
  return dispatch;
}

const updateCategory = (categoryId) => {
  return{
    type: UPDATE_CATEGORY,
    payload: categoryId
  };
}

const updateItem = ({categoryId, itemId }) => {
  return {
    type: UPDATE_ITEM,
    payload: {
      categoryId,
      itemId,
    },
  };
}

export {
  AppProvider,
  useSelectedItems,
  useSelectedCategory,
  useDispatch,
  updateItem,
  updateCategory,
};
