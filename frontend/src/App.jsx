import { RouterProvider } from "react-router"
import { router } from "./Routes/user.route"
import { AuthProvider } from "./context/Auth.Context"
const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
