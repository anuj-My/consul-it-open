export const MOCK_AI_RESPONSES = {
  career: {
    pcm: "PCM (Physics, Chemistry, Mathematics) stream is excellent for students interested in engineering, technology, and research. It provides a strong foundation in quantitative and analytical skills. Many top careers like software engineering, mechanical engineering, data science, and AI development require PCM background. The stream is ideal if you enjoy problem-solving and want to pursue STEM fields.",
    pcb: "PCB (Physics, Chemistry, Biology) stream is perfect for students aspiring to become doctors, nurses, or work in medical research. It provides in-depth knowledge of biological systems and medical sciences. This stream opens doors to NEET, medical colleges, and healthcare careers. It's ideal if you have a passion for biology and helping others.",
    commerce:
      "Commerce stream is ideal for students interested in business, finance, and economics. It prepares you for careers in chartered accountancy, investment banking, entrepreneurship, and business administration. You'll learn about financial management, business law, and economics which are crucial in today's business world.",
    benefits:
      "Choosing the right stream has long-term benefits: It aligns with your career goals, improves your academic performance, and opens specific career opportunities. The earlier you choose the right stream, the better you can prepare for entrance exams and build relevant skills.",
  },

  study: {
    focus:
      "To maintain focus during studies: 1) Create a dedicated study space 2) Use the Pomodoro technique (25 min study + 5 min break) 3) Remove distractions (phone, social media) 4) Take care of sleep and nutrition 5) Set specific, achievable goals 6) Track your progress regularly. Remember, consistency is more important than long study hours.",
    balance:
      "Balancing board exams and competitive exams requires: 1) Create a comprehensive study schedule covering both syllabi 2) Prioritize topics that appear in both exams 3) Practice mock tests for both exams regularly 4) Don't neglect board exam preparation for competitive exams 5) Allocate 70% time to board syllabus and 30% to additional competitive exam topics 6) Stay healthy and manage stress through meditation or exercise.",
    tips: "Effective study tips: 1) Use active recall - test yourself frequently 2) Spaced repetition - revise topics at intervals 3) Create mind maps and summaries 4) Group study with friends for concepts you find difficult 5) Teach concepts to others - it deepens understanding 6) Practice previous year papers to understand exam patterns 7) Take breaks to avoid burnout.",
    memory:
      "To improve memory retention: 1) Use mnemonics and memory techniques 2) Connect new concepts with existing knowledge 3) Create stories or associations with information 4) Review material within 24 hours of learning 5) Use the Feynman Technique - explain concepts simply 6) Get adequate sleep as memory consolidation happens during sleep 7) Regular exercise improves cognitive function.",
    anxiety:
      "Managing exam anxiety: 1) Practice deep breathing exercises 2) Regular meditation and mindfulness 3) Exercise daily for stress relief 4) Get 7-8 hours of sleep 5) Limit caffeine intake before exams 6) Practice visualization - imagine yourself doing well 7) Talk to friends, family, or counselors 8) Remember that some anxiety is normal and can improve performance.",
  },

  subjects: {
    mathematics:
      "Mathematics in PCM focuses on advanced calculus, algebra, and geometry. Key topics include: derivatives, integrals, vectors, 3D geometry, and differential equations. Tips: Practice problems daily, understand concepts before memorizing formulas, use graphs to visualize problems, and solve previous year papers to understand question patterns.",
    physics:
      "Physics covers mechanics, electricity, magnetism, optics, and modern physics. It's about understanding how the universe works. Tips: Focus on understanding concepts rather than memorization, solve numerical problems regularly, use diagrams and free body diagrams, conduct experiments to understand phenomena better.",
    chemistry:
      "Chemistry includes organic, inorganic, and physical chemistry. Focus on reactions, bonding, and equations. Tips: Balance chemical equations daily, understand reaction mechanisms, memorize periodic table, and practice balancing equations. Chemistry requires both conceptual understanding and practical knowledge.",
    biology:
      "Biology covers human physiology, ecology, genetics, and botany. It's essential for medical aspirants. Tips: Use diagrams and models to understand complex structures, group related topics, revise regularly, and watch educational videos for better visualization of biological processes.",
  },

  exams: {
    board:
      "Board exams are comprehensive assessments of your class knowledge. They evaluate your understanding of the entire year's curriculum. Tips: Start preparation 3-4 months in advance, create a study schedule, practice previous year papers, understand exam pattern and marking scheme, manage time effectively during the exam, and revise regularly. Board exams are important but not the end - focus on learning rather than just marks.",
    neet: "NEET (National Eligibility cum Entrance Test) is the medical entrance exam in India. It's highly competitive with millions of applicants. Preparation needs to start 1-2 years in advance. Tips: Master the entire biology, chemistry, and physics syllabus, practice MCQs extensively, take regular mock tests, maintain consistent study schedule, and don't neglect board preparation.",
    jee: "JEE (Joint Entrance Examination) is for engineering admission. JEE Main is easier than JEE Advanced. Tips: Start preparation from class 10, focus on conceptual clarity, solve challenging problems, practice mock tests regularly, learn time management, and maintain consistency. JEE success requires dedication and smart preparation.",
    revision:
      "Effective revision strategies: 1) Review notes within 24 hours of class 2) Create concise summaries 3) Use active recall flashcards 4) Group related topics 5) Practice problems repeatedly 6) Take mock tests under timed conditions 7) Identify weak areas and focus on them 8) Sleep well before revision sessions.",
  },

  wellness: {
    sleep:
      "Sleep is crucial for memory consolidation and exam performance. Recommended sleep: 7-8 hours daily. Tips: Maintain consistent sleep schedule, avoid screens 1 hour before sleep, keep bedroom cool and dark, avoid caffeine after 3 PM, exercise daily (but not close to bedtime). Poor sleep impacts memory, focus, and emotional regulation.",
    exercise:
      "Exercise improves cognitive function and reduces stress. Recommended: 30-45 minutes daily of any physical activity. Benefits: Better focus, improved memory, stress relief, better sleep quality, improved mood. Include both cardio and strength training for overall fitness.",
    nutrition:
      "Nutrition affects brain performance. Include: omega-3 fatty acids (fish, nuts), antioxidants (berries, dark chocolate), protein (eggs, legumes), whole grains, hydration. Avoid: excess sugar, fried foods, caffeine overdose. Eat balanced meals and stay hydrated - aim for 2-3 liters of water daily.",
    meditation:
      "Meditation reduces anxiety and improves focus. Start with 5-10 minutes daily. Benefits: Reduced stress, better concentration, improved emotional regulation, better sleep. Apps like Calm or Headspace can guide you. Even simple breathing exercises can help during stressful moments.",
  },

  default:
    "I'm ConsulTOpen AI, your personal career and study assistant! I'm here to help you with: career guidance (PCM, PCB, Commerce), study tips and techniques, exam preparation (Boards, NEET, JEE), subject-specific help, and wellness advice. Ask me anything about your academic journey!",
};

export function getMockAIResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  if (message.includes("pcm")) return MOCK_AI_RESPONSES.career.pcm;
  if (message.includes("pcb")) return MOCK_AI_RESPONSES.career.pcb;
  if (message.includes("commerce")) return MOCK_AI_RESPONSES.career.commerce;
  if (message.includes("career") || message.includes("stream"))
    return MOCK_AI_RESPONSES.career.benefits;

  if (message.includes("focus") || message.includes("concentrate"))
    return MOCK_AI_RESPONSES.study.focus;
  if (message.includes("balance") || message.includes("competitive"))
    return MOCK_AI_RESPONSES.study.balance;
  if (message.includes("memory") || message.includes("remember"))
    return MOCK_AI_RESPONSES.study.memory;
  if (
    message.includes("anxiety") ||
    message.includes("nervous") ||
    message.includes("stress")
  )
    return MOCK_AI_RESPONSES.study.anxiety;
  if (message.includes("study tips") || message.includes("how to study"))
    return MOCK_AI_RESPONSES.study.tips;

  if (message.includes("mathematics") || message.includes("math"))
    return MOCK_AI_RESPONSES.subjects.mathematics;
  if (message.includes("physics")) return MOCK_AI_RESPONSES.subjects.physics;
  if (message.includes("chemistry"))
    return MOCK_AI_RESPONSES.subjects.chemistry;
  if (message.includes("biology")) return MOCK_AI_RESPONSES.subjects.biology;

  if (message.includes("board")) return MOCK_AI_RESPONSES.exams.board;
  if (message.includes("neet")) return MOCK_AI_RESPONSES.exams.neet;
  if (message.includes("jee")) return MOCK_AI_RESPONSES.exams.jee;
  if (message.includes("revision") || message.includes("revise"))
    return MOCK_AI_RESPONSES.exams.revision;

  if (message.includes("sleep") || message.includes("sleep"))
    return MOCK_AI_RESPONSES.wellness.sleep;
  if (
    message.includes("exercise") ||
    message.includes("fitness") ||
    message.includes("workout")
  )
    return MOCK_AI_RESPONSES.wellness.exercise;
  if (
    message.includes("nutrition") ||
    message.includes("diet") ||
    message.includes("food")
  )
    return MOCK_AI_RESPONSES.wellness.nutrition;
  if (message.includes("meditation") || message.includes("mindfulness"))
    return MOCK_AI_RESPONSES.wellness.meditation;

  // Default response if no match found
  return MOCK_AI_RESPONSES.default;
}

export const QUICK_PROMPTS = [
  "What are the benefits of choosing PCM?",
  "How do I balance board exams and competitive exams?",
  "What are effective study tips for board exams?",
  "How can I manage exam anxiety?",
  "What's the best strategy to prepare for NEET?",
];
