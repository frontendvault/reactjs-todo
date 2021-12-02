import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

function App() {
    const [tasks,
        setTasks] = useState([
        {
            id: 1,
            text: 'Angular ivy',
            day: 'Nov 25th at 3am',
            reminder: true
        }, {
            id: 2,
            text: 'Reactjs',
            day: 'Nov 15th at 3am',
            reminder: false
        }, {
            id: 3,
            text: 'Threejs',
            day: 'Dec 15th at 3am',
            reminder: false
        }, {
            id: 4,
            text: 'Nodejs',
            day: 'Nov 15th at 7pm',
            reminder: true
        }
    ])

    const [showAddTask,
        setShowAddTask] = useState(false)
    const addTask = (task) => {

        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = {
            id,
            ...task
        }
        setTasks([
            ...tasks,
            newTask
        ])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map(task => task.id === id
            ? {
                ...task,
                reminder: !task.reminder
            }
            : task))
    }

    return (
        <div className="App container">
            <div className="row">
                <div className="col-md-4 offset-md-4 bg-light shadow rounded py-4">
                    
                    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
                    {showAddTask || <AddTask onAdd={addTask}/>}
                     {tasks.length > 0
                        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
                        : 'No tasks to show '}
                </div>
            </div>

        </div>
    )
}

export default App;
