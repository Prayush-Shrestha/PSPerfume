import { currentUser } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const user = await currentUser();

  return (
    <div>
      <h1>{user?.firstName}</h1>
      <p>{user?.emailAddresses[0].emailAddress}</p>
    </div>
  );
}