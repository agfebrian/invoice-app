import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./context"
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
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
