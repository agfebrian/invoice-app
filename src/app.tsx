import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { ThemeProvider, DrawerProvider } from "./context"
// pages
import {
  IndexPage,
  indexLoader,
  DetailPage,
  detailLoader,
} from "~/pages/invoice"
// layouts
import { RootLayout, ErrorPageLayout } from "./layouts"
// components
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPageLayout />}>
      <Route index element={<IndexPage />} loader={indexLoader} />
      <Route
        path="/invoice/:id"
        element={<DetailPage />}
        loader={detailLoader}
      />
    </Route>,
  ),
)

function App() {
  return (
    <ThemeProvider>
      <DrawerProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </DrawerProvider>
    </ThemeProvider>
  )
}

export default App
