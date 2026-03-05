import { DndContext } from "@dnd-kit/core"
import TaskItem from "./TaskItem"
import { SortableContext } from "@dnd-kit/sortable"


export default function TaskList ({ tasks, onComplete, onDelete, onEdit, handleDragEnd}) {
    if(tasks.length === 0){
        return <p className="text-center text-muted">No Tasks yet</p>
    }

    return(
        <div>
            <DndContext onDragEnd={handleDragEnd}>
                <SortableContext items={tasks}>
                    {tasks.map(task => (
                        <div key={task.id}>
                            <TaskItem 
                                task={task} 
                                onComplete={onComplete} 
                                onDelete={onDelete}
                                onEdit={onEdit}
                            />
                        </div>
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    )
}