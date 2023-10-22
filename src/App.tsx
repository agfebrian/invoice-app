import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { IndexPage, DetailPage } from "~/pages/invoice"

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/invoice",
    element: <DetailPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
