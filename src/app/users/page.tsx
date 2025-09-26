import Link from "next/link";
import { User } from "./user.model";

export default async function Users({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const newParams = new URLSearchParams();

  if (Object.keys(sp).length > 0) {
    if (sp.username && typeof sp.username === "string") {
      newParams.set("username", sp.username);
    } else {
      throw new Error("Something went wrong!");
    }
  }

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?" + newParams.toString(),
    {
      cache: "no-store",
    }
  );

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
