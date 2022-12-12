import { CATEGORIES } from "../../data/categories";
import { SELECTED_CATEGORY } from "../actions/category.action";

const inicialState = {
    categories: CATEGORIES,
    selected: null
}

const CategoryReducer = (state = inicialState, action) => {
    switch(action.type){
        case SELECTED_CATEGORY: 
            const IndexCategory = state.categories.findIndex(cat => cat.id === action.categoryID)
            if(IndexCategory === -1){
                return state
            } else {
                return {...state, selected: state.categories[IndexCategory]}
            }
            
        
        default: return state
    }
}

export default CategoryReducer