import { useAuth } from "../hook/Authcontext";

const Profile = () => {
  const { profiles, loading } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Your profile information
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 animate-pulse">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">

              <div className="w-40 h-40 rounded-full bg-gray-200 shrink-0" />

              <div className="flex-1 w-full space-y-5">
                <div className="h-8 bg-gray-200 rounded-lg w-48" />

                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                </div>

                <div className="h-10 bg-gray-200 rounded-xl w-32" />
              </div>

            </div>
          </div>
        ) : profiles?.length > 0 ? (

          profiles.map((profile) => (
            <div
              key={profile._id}
              className="bg-white rounded-3xl shadow-md border border-gray-100 p-8"
            >

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">

                {/* Profile Image */}
                <div className="relative shrink-0">

                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-gray-100">
                    <img
                      src={profile.image}
                      alt={profile.username}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Online dot */}
                  <span className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 border-4 border-white rounded-full" />

                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center sm:text-left pt-2">

                  <p className="text-sm text-gray-400 font-medium mb-1">
                    PROFILE
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900">
                    {profile.username}
                  </h2>

                  <p className="text-gray-500 mt-4 leading-relaxed max-w-xl">
                    {profile.bio}
                  </p>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6">

                    <button
                      className="px-6 py-2.5 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition"
                    >
                      Edit Profile
                    </button>

                    <button
                      className="px-6 py-2.5 bg-gray-100 text-gray-800 rounded-xl font-medium hover:bg-gray-200 transition"
                    >
                      Settings
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))

        ) : (

          /* No Profile */
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 text-center">

            <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-4xl">
              👤
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-6">
              No Profile Found
            </h2>

            <p className="text-gray-500 mt-2">
              You haven't created your profile yet.
            </p>

            <button
              className="mt-6 px-7 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition"
            >
              Create Profile
            </button>

          </div>

        )}

      </div>
    </div>
  );
};

export default Profile;