export interface Task {
  id: string;
  title: string;
  isStarted: boolean;
  isCompleted: boolean;
  subject: string;
  subjectColor: string;
  score?: number;
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
