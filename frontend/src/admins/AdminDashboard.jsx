import { Link, Outlet } from "react-router";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-gray-800 text-white p-6">

        <h1 className="text-2xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <nav className="space-y-4">

          <Link
            to="/admindashboard/dashboard"
            className="block p-3 rounded hover:bg-gray-700"
          >
            🏠 Home
          </Link>

          <Link
            to="/admindashboard/allusers"
            className="block p-3 rounded hover:bg-gray-700"
          >
            👥 All Users
          </Link>

          <Link
            to="/admindashboard/createproduct"
            className="block p-3 rounded hover:bg-gray-700"
          >
            📦 Create Product
          </Link>

          <Link
            to="/admindashboard/products"
            className="block p-3 rounded hover:bg-gray-700"
          >
            🛒 Products
          </Link>

          <Link
            to="/login"
            className="block p-3 rounded hover:bg-red-600"
          >
            🚪 Login
          </Link>

        </nav>
      </aside>

      {/* Right side content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminDashboard;