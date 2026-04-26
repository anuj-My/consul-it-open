# ConsulTOpen AI

---

## 🔗 Links

- GitHub: https://github.com/anuj-My/consul-it-open
- Live: https://consul-it-open.vercel.app/

---

## What this project does

There are 2 main parts:

### 1. Roadmap system

- The roadmap is divided into sessions
- Each session has multiple tasks
- Tasks are **locked in sequence**
- You can’t move ahead until you complete the previous tasks

---

### 2. AI Chat

- User can type a question or click suggestion chips
- It shows a mock response
- I added loading state to make it feel like a real API
- Also handled errors and disabled input while loading

---

## How I handled state

I used **React Context API** to manage global state.

Main things I store:

- `data` → sessions and tasks
- `messages` → chat messages
- `isLoading` → when AI is responding

---

## Data Flow (simple)

### Task Flow

```text id="e8a2t1"
User clicks complete
    ↓
completeTask()
    ↓
Update state
    ↓
Check if all tasks are done
    ↓
Unlock next session
```

---

### Chat Flow

```text id="7j3ksl"
User sends message / clicks suggestion
    ↓
sendMessage()
    ↓
Add user message
    ↓
Call getAiResponse (with delay)
    ↓
Add AI message
```

---

## ⚙️ Some implementation details

- Used `useState` + Context for global state
- Used `useEffect` to save roadmap data in localStorage
- Chat auto-scrolls to latest message
- Disabled buttons when AI is loading
