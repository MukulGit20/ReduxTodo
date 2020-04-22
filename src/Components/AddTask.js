import React from 'react'
import {connect} from 'react-redux';

const AddTask = (props) => {
    const {firstValue, setFirstValue, todoList, addItem, deleteItem} = props;

    const handleFirstChange = (e) => {
        setFirstValue(e.target.value);
    }

    const handleAdd = () => {
        addItem(firstValue.toString());
    }

    const handleDelete = (index) =>{
        deleteItem(Number(index));
    }

    return (
        <div>
            <h1>To-Do App!</h1>
            <label>Add New To-Do</label>
            <input value={firstValue} onChange={handleFirstChange} onKeyUp={handleFirstChange}  /> 
            <button onClick={handleAdd}>Add</button>
            <div>
                <h2>Let's get some work done!</h2>
                {todoList.length > 0 && <ul>
                    {todoList.map((todo, index) => <li key={index}><button onClick={() => handleDelete(index)}>Delete</button><button>Complete</button>{todo.Title}</li>)}
                    </ul>}
            </div>
            
        </div>
    );
}


const mapStateToProps = (store) => {
    return {
        firstValue: store.add.firstValue,
        todoList: store.add.list,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFirstValue: (value) => dispatch({type: 'SET_FIRST_VALUE', payload: value}),
        addItem: (title) => dispatch({type: 'ADD_ITEM', payload: {Title: title}}),
        deleteItem: (index) => dispatch({type: 'DELETE_ITEM', payload:index})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
