import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function Layout() {
  const location = useLocation()
  const noHeaderRoutes = ["/login", "/signup"]

  return (
    <main className="flex min-h-screen w-screen flex-col">
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
