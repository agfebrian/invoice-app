import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { ThemeProvider } from "./context"
// pages
import {
  IndexPage,
  indexLoader,
  DetailPage,
  detailLoader,
} from "~/pages/invoice"
// layouts
import { RootLayout, ErrorPageLayout } from "./layouts"

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
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
