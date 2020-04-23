const defaultState = {
    firstValue: '',
    list: []
}

const addReducer = (state=defaultState, action) => {
    switch(action.type)
    {
        case 'SET_FIRST_VALUE':
            return {...state, firstValue: action.payload};
        case 'ADD_ITEM': 
           const len = state.list.length;
           if(len!==0){
               const last=(state.list[len-1].IdCounter)+1;
               action.payload.IdCounter = last;
            }
            else{
                action.payload.IdCounter = 1;   
            }
            return {...state, list: state.list.concat(action.payload)};
        case 'DELETE_ITEM':
            const tempList = state.list.filter(item => item.IdCounter !== action.payload);
            return {...state, list: tempList};
        case 'SET_STATUS':            
            const temp1 = state.list.filter(item => item.IdCounter === action.payload)[0].IsComplete;
            
            if (temp1 === "Y") {
                state.list.filter(item => item.IdCounter === action.payload)[0].IsComplete = "N"
            }
            else{
                state.list.filter(item => item.IdCounter === action.payload)[0].IsComplete = "Y"
            }
            const temp_list = state.list.filter(item => item.IdCounter > 0)
             
            return {...state, list: temp_list}
        default:
            return state;
    }
}

export default addReducer;