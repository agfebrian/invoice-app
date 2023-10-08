import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <button
      className="rounded-md bg-gray-950 p-3 font-bold text-white hover:shadow-xl"
      onClick={() => setCount((count) => count + 1)}
    >
      count is {count}
    </button>
  )
}

export default App
