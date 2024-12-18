import { useAppUsers } from "../hooks/useAppUsers";

export const UsersTable = ({ appId }: { appId: string }) => {
  const { data: appUsers, isPending } = useAppUsers({ appId: appId });

  const users = appUsers?.users;

  if (isPending) {
    return <span className="loading loading-spinner loading-md" />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="flex items-center">
                  <img
                    src={user.pic}
                    alt={user.name ?? ""}
                    loading="lazy"
                    className="h-6 rounded-full"
                  />
                  <span className="ml-2">{user.name}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
