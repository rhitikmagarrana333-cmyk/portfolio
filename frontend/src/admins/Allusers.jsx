import { useAuth } from "../hook/Authcontext";

const AllUsers = () => {
  const { users, error, loading } = useAuth();


  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <p>{error?.message || error}</p>;
  }

  return (
   
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {users.map((user) => (
    <div
      key={user._id}
      className="bg-white rounded-2xl shadow-md p-6
                 border border-gray-100
                 hover:shadow-lg transition"
    >

      {/* Profile Image / Skeleton */}
      <div className="flex justify-center mb-5">

        {user.image ? (
          <img
            src={user.image}
            alt={user.username}
            className="w-24 h-24 rounded-full object-cover
                       border-4 border-gray-100"
          />
        ) : (
          <div
            className="w-24 h-24 rounded-full
                       bg-gray-200 animate-pulse
                       flex items-center justify-center"
          >
            <span className="text-gray-400 text-3xl">
              👤
            </span>
          </div>
        )}

      </div>

      {/* User Info */}
      <div className="text-center space-y-2">

        <h2 className="text-xl font-bold text-gray-800">
          {user.username}
        </h2>

        <p className="text-gray-500 text-sm">
          {user.email}
        </p>

        <span
          className={`inline-block px-4 py-1 rounded-full text-sm font-semibold
            ${
              user.role === "admin"
                ? "bg-red-100 text-red-600"
                : "bg-blue-100 text-blue-600"
            }`}
        >
          {user.role}
        </span>

      </div>

    </div>
  ))}

</div>


  );
};

export default AllUsers;