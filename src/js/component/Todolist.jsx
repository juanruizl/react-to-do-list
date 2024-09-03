import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask.trim()]);
            setNewTask("");
        }
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="container mt-5 p-4 rounded bg-light shadow-sm">
            <h1 className="text-center mb-4">Lista de Tareas</h1>

            <div className="d-flex justify-content-between mb-3">
                <span><strong>Pendientes:</strong> {tasks.length}</span>
            </div>

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="¿Qué hay que hacer?"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button variant="primary" onClick={handleAddTask}>
                    Agregar
                </Button>
            </InputGroup>
            <ListGroup>
                {tasks.length === 0 ? (
                    <ListGroup.Item className="text-center text-muted">
                        No hay tareas, añadir tareas
                    </ListGroup.Item>
                ) : (
                    tasks.map((task, index) => (
                        <ListGroup.Item
                            key={index}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <span>{task}</span>
                            <div>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => handleDeleteTask(index)}
                                >
                                    <FaTrashAlt />
                                </Button>
                            </div>
                        </ListGroup.Item>
                    ))
                )}
            </ListGroup>
        </div>
    );
};

export default TodoList;
