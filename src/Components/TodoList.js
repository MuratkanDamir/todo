import { useState } from "react";
import styles from "./TodoList.module.css";

function TodoList(){
    const [tasks, setTask] = useState([{text: "Example", isChecked: true}]); 
    const [inputText, setText] = useState("");

    function changeText(e){
        setText(e.target.value)
    }

    function deleteTask(i){
        let newList = tasks.filter((t,index) => index !== i);
        setTask(newList);
        console.log("newList",newList)
    }

    function switchCheck(i){
        let n = tasks.map((t,index) =>index === i? { ...t, isChecked: !t.isChecked }: t);
        setTask( n );
    }

    function addTask(){
        if(inputText !== ""){
            setTask([...tasks, {index: tasks.length ,text: inputText, isChecked: false}]);
            setText("");
        }
    }

    let list = tasks.map((task, index )=> 
        <div className={styles.task}>
            <div className={styles.values}>
                {task.isChecked? <del>{task.text}</del>: `${task.text}`}
            </div>
            <div className={styles.buttons}>
                <input type="checkbox" checked = {task.isChecked} onChange = {() => switchCheck(index)} ></input>
                <button onClick={() => deleteTask(index)}></button> 
            </div>
        </div>
        );
    return(
        <div className={styles.main}>
            <h2> To do List</h2>
            <div className={styles.input}>
                <input 
                    type="text"
                    value={inputText}
                    onChange={changeText}
                />
                <button onClick={addTask}>Add</button>
            </div>
            {list}
        </div>
    )
}


export default TodoList;