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
        <div className="container">
            <div className="bg-primary col-xs-12">
                <h1 className="header" >To-Do App!</h1>
            </div>
            <div className="bg-primary col-xs-12 subheader">
                <label>Add New To-Do</label>
            </div>
            <div className="bg-primary col-xs-12 Padding">
                <input className="form-control" value={firstValue} onChange={handleFirstChange} onKeyUp={handleFirstChange}  /> 
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
                            todoList.map((todo, index) => <tr key={index}>
                                <td className="tdBtn">
                                    <button className="btn-default btn-lg">Complete</button>&nbsp;
                                    <button className="btn-default btn-lg" onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                                <td className="tdTxt">{todo.Title}</td>
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
