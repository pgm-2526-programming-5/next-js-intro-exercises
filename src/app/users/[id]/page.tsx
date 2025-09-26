import { User } from "../user.model";

export default async function UserDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const p = await params;
  const id = p.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user: User = await response.json();

  return (
    <div>
      <ul>
        <li>Name: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Phone: {user.phone}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  );
}
