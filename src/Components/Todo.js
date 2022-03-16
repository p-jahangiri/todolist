import React , {useState} from "react";
import EditTodo from "./EditTodo";



function Todo (props) {

    const {item} = props;

    const [edit , setEdit] = useState(false);

    let editHandler = text => {
        props.edit(item.key,text);
        setEdit(false);
    }

    return (
       <> 
           {
              ! edit 
                  ? (
                        <div className="col-6 mb-">
                            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                <div>
                                {item.text}
                                </div>
                                <div>    
                                    <button type="button" className= "btn btn-success btn-sm " onClick={() => props.done(props.item.key)}>{props.item.done ? 'undone' : 'done'}</button>
                                    <button type="button" onClick={() => setEdit(true)} className="btn btn-info btn-sm ms-1">edit</button>
                                    <button type="button" className="btn btn-danger btn-sm ms-1" onClick={() => props.delete(props.item.key)} >delete</button>
                                </div>
                            </div>
                        </div>
                  )
                  : <EditTodo text= {item.text} edit={editHandler} />
           }
       </>
        
    )
}

export default Todo; 
