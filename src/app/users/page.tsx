import Link from "next/link";
import { User } from "./user.model";

export default async function Users() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await response.json();

  return (
    <table className="border-spacing-x-5 border-spacing-y-2.5 border-separate text-left border-2">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User) => {
          return (
            <tr key={user.id}>
              <td>
                <Link className="table-link" href={`/users/${user.id}`}>
                  {user.name}
                </Link>
              </td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
