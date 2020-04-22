import React from 'react'

const ToDoList = () => {
    // const task = [
    //     {

    //     }
    // ] 

    return(
        <div>
            <header className="major">
                <h2>Let's get some work done!</h2>
            </header>
            <div className="container">
                <div className="row">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button"  className="btn">Complete</button>
                        <button type="button"  className="btn">Delete</button>
                    </div>
                    <h3 style={{textDecoration :"line-through"}}>hi</h3>
                </div>
            </div>
        </div>
    )
}

export default ToDoList