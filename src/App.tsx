import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { IndexPage } from "~/pages/invoice"

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
