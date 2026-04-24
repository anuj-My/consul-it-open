import { RoadmapData } from "@/types/roadmap";

export const initialRoadmapData: RoadmapData = {
  sessions: [
    {
      id: "s1",
      title: "Build Basics",
      description: "You'll build a strong foundation in foundational math and science principles.",
      isLocked: false,
      tasks: [
        { 
          id: "t1", 
          title: "Units", 
          subject: "Test", 
          isStarted: false,
          isCompleted: false,
          subjectColor: "bg-[#EBEAFE] text-[#6366F1]" 
        },
        { 
          id: "t2", 
          title: "Practice Algebra Problems Daily", 
          subject: "Maths", 
          isStarted: false,
          isCompleted: false,
          subjectColor: "bg-[#E7F9EF] text-[#2D9B63]" 
        },
        { 
          id: "t3", 
          title: "Study Motion and Energy Concepts", 
          subject: "Science", 
          isStarted: true, // Example: User has started this!
          isCompleted: false,
          subjectColor: "bg-[#FFF4ED] text-[#EA580C]" 
        },
        { 
          id: "t4", 
          title: "Solve 20 Maths Question Daily", 
          subject: "Maths", 
          isStarted: true,
          isCompleted: true,
          subjectColor: "bg-[#E7F8F7] text-[#1a9ba1]",
          score: 98
        },
        { 
          id: "t5", 
          title: "Watch a Science Concept Video", 
          subject: "Video • 10 Mins", 
          isStarted: true,
          isCompleted: true,
          subjectColor: "bg-[#FDF2F8] text-[#DB2777]" 
        },
        { 
          id: "t6", 
          title: "Follow a Weekly Study Plan", 
          subject: "Habbit", 
          isStarted: true,
          isCompleted: true,
          subjectColor: "bg-[#FCEEF4] text-[#C44D7D]" 
        },
      ],
    },
    {
      id: "s2",
      title: "Strengthen Concepts",
      description: "Dive deeper into advanced topics to prepare for your board exams.",
      isLocked: true, 
      tasks: [
        { id: "t7", title: "Advanced Calculus", subject: "Maths", isStarted: false, isCompleted: false, subjectColor: "bg-[#E7F9EF] text-[#2D9B63]" },
        { id: "t8", title: "Physics: Thermodynamics", subject: "Science", isStarted: false, isCompleted: false, subjectColor: "bg-[#FFF4ED] text-[#EA580C]" },
      ],
    },
    {
      id: "s3",
      title: "Score in Boards",
      description: "Achieve target scores in preliminary and final board examinations.",
      isLocked: true,
      tasks: [
        { id: "t9", title: "Full Syllabus Mock Test", subject: "Board Prep", isStarted: false, isCompleted: false, subjectColor: "bg-[#EBEAFE] text-[#6366F1]" },
      ],
    },
    {
      id: "s4",
      title: "PCM Stream Selection",
      description: "Finalize stream choice based on aptitude and board results.",
      isLocked: true,
      tasks: [
        { id: "t10", title: "Aptitude Assessment", subject: "Counselling", isStarted: false, isCompleted: false, subjectColor: "bg-[#FCEEF4] text-[#C44D7D]" },
      ],
    }
  ],
};
