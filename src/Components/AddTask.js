import React from 'react'
import {connect} from 'react-redux';

const AddTask = (props) => {
    const {firstValue, setFirstValue, todoList, addItem, deleteItem, setTaskStatus, idCounter = 0} = props;

// useEffect(() => {

// },[todoList]);

    const handleFirstChange = (e) => {
        setFirstValue(e.target.value);
    }

    const handleAdd = () => {
        if (firstValue !== "") {
            addItem(firstValue.toString(),"Y",idCounter);    
        }
    }

    const handleDelete = (id) => {
        deleteItem(Number(id));
    }

    const handleComplete = (id) => {
        setTaskStatus(Number(id));
    }

    return (
        <div className="container">
            <div className="bg-primary col-xs-12">
                <h1 className="header" >To-Do App!</h1>
            </div>
            <div className="bg-primary col-xs-12 subheader">
                <label>Add New To-Do</label>
            </div>
            <div className="bg-primary col-xs-12 Padding">
                <input className="form-control lg" placeholder="Enter new task" pattern="[a-zA-Z0-9\s]+" value={firstValue} onChange={handleFirstChange} onKeyUp={handleFirstChange}  /> 
            </div>
            <div className="bg-primary col-xs-12 subheader">
                <button className="btn btn-primary btn-lg" onClick={handleAdd}>Add</button>
            </div>
            <div className="col-xs-12">
                <h2>Let's get some work done!</h2>
            </div>
            {/* <div className="col-xs-12">
                {todoList.length > 0 && <ul className="list-group">
                    {todoList.map((todo, index) => <li className="list-group-item" key={index}><button onClick={() => handleDelete(index)}>Delete</button><button>Complete</button>{todo.Title}</li>)}
                    </ul>}
            </div> */}
            <div className="col-xs-12">
                {
                    todoList.length > 0 && 
                    <table className="col-xs-12">
                        {
                            todoList.map((todo) => <tr key={todo.IdCounter}>
                                    
                            <td className="tdBtn">
                                <button className="btn-default btn-lg" onClick={() => handleComplete(todo.IdCounter)}>{todo.IsComplete === "Y" ? "Complete" : "Undo"}</button>
                                <button className="btn-default btn-lg" onClick={() => handleDelete(todo.IdCounter)}>Delete</button>
                            </td>
                                
                            <td className="tdTxt" style={{textDecoration: todo.IsComplete === "N" ? "line-through" : "none"}}>{todo.Title}</td>
                            </tr>)
                        }
                    </table>
                }
            </div>
        </div>
    );
}


const mapStateToProps = (store) => {
    return {
        firstValue: store.add.firstValue,
        todoList: store.add.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFirstValue: (value) => dispatch({type: 'SET_FIRST_VALUE', payload: value}),
        addItem: (title,isComplete, idCounter) => dispatch({type: 'ADD_ITEM', payload: {Title: title , IsComplete: isComplete , IdCounter: idCounter}}),
        deleteItem: (id) => dispatch({type: 'DELETE_ITEM', payload:id}),
        setTaskStatus: (id) => dispatch({type: 'SET_STATUS', payload: id})
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
