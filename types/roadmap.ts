export interface Task {
  id: string;
  title: string;
  isStarted: boolean;
  isCompleted: boolean;
  subject: string;
  subjectColor: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  tasks: Task[];
  isLocked: boolean;
}

export interface RoadmapData {
  sessions: Session[];
}

export type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
  timeStamp: Date;
};
