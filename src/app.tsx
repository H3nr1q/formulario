import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { CreateClient } from "./pages/create-clients"

const router = createBrowserRouter([
  {
    path: "/clients",
    element: <CreateClient />
  }
])

export function App() {
  return <RouterProvider router={router} />
}
