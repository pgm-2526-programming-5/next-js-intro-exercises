import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function UsersLoading() {
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <table className="border-spacing-x-5 border-spacing-y-2.5 border-separate text-left border-2">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: number) => {
          return (
            <tr key={user}>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
