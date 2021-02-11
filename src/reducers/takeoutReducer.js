export const takeoutReducer = (state = {takeout:[{name:"kfc", score:2, comment: "Never Again", best_order:"Soda haha"}], loading: false}, action) => {
    switch (action.type){
        case "LOADING_TAKEOUTS":
            return {
                ...state,
                 loading:true
            }
            case "TAKEOUTS_LOADED":
              
                return {
                    ...state,
                    takeout: action.payload,
                    loading: false
                }
        case"ADDING_TAKEOUT":
        return{
            ...state,
            loading: true
             
        }
        case"TAKEOUT_ADDED":
        
        return{
            ...state,
            takeouts: [...state.takeouts, action.payload],
            loading: false
        }
        default: 
            return state
    }
}
