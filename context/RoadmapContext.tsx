import { initialRoadmapData } from "@/data/data";
import { RoadmapData, Session, Task } from "@/types/roadmap";
import { createContext, useContext, useEffect, useState } from "react";

interface RoadmapContextType {
    data: RoadmapData;
    startTask: (sessionId: string, taskId: string) => void;
    completeTask: (sessionId: string, taskId: string) => void;
    getProgress: () => number;
}


const RoadmapContext = createContext<RoadmapContextType | undefined>(undefined);


const RoadmapProvider = ({children}:{children: React.ReactNode}) =>{
 const getDataFromStorage = () =>{
     if (typeof window === 'undefined') return initialRoadmapData;
        const data = localStorage.getItem('roadmapData')
        return data ? JSON.parse(data) : initialRoadmapData
    }

    const [data, setData] = useState<RoadmapData>(getDataFromStorage)


    const saveDataToStorage  = () =>{
        localStorage.setItem('roadmapData', JSON.stringify(data))
    }

    useEffect(()=>{
        saveDataToStorage()
    }, [data])

    const startTask = (sessionId: string, taskId: string) => {
        console.log('Starting task', taskId, 'in session', sessionId)

        setData(prev =>{
            const newData = JSON.parse(JSON.stringify(prev));
            const session = newData.sessions.find((s: Session) => s.id === sessionId)

            if(session){
                const task = session.tasks.find((t:Task) => t.id === taskId)

                if(task){
                    task.isStarted = true
                }
            }

            return newData
        })

    }

    const completeTask = (sessionId: string, taskId: string) => {
        console.log('complete task', taskId, 'in session', sessionId)

        setData(prev =>{
            const newData= JSON.parse(JSON.stringify(prev));

            const session = newData.sessions.find((s:Session) => s.id === sessionId)

            if(session){
                const task = session.tasks.find((t:Task) => t.id === taskId)

                if(task) task.isCompleted = !task.isCompleted
                if(task.isCompleted) task.isStarted = true
            }

            return newData
        })
    }

    const getProgress = () => {
     const allTasks = data.sessions.flatMap((s:Session) => s.tasks)

     if(allTasks.length === 0) return 0
     
     const completedTasks = allTasks.filter((t: Task) => t.isCompleted)
     return Math.round((completedTasks.length / allTasks.length) * 100) 
    }

    return <RoadmapContext.Provider value={{data, startTask, completeTask, getProgress}}>
        {children}
    </RoadmapContext.Provider>
}

export default RoadmapProvider;

export const useRoadmapContext = () =>{
    const context = useContext(RoadmapContext)

    if(!context){
        throw new Error('useRoadmapContext must be used within RoadmapProvider')
    }

    return context
}