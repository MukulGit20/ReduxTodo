const defaultState = {
    firstValue: '',
    list: []
}

const addReducer = (state=defaultState, action) => {
    switch(action.type){
        case 'SET_FIRST_VALUE':
            return {...state, firstValue: action.payload};
        case 'ADD_ITEM': 
            return {...state, list: state.list.concat(action.payload)};
        case 'DELETE_ITEM':
            const l = state.list
            l.splice(action.payload,1)
            return {...state, list: l};
        default:
            return state;
    }
}

export default addReducer;