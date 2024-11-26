<<<<<<< HEAD
import { prisma } from "@/app/db/prisma";
=======
import { prisma } from "./db/prisma";
>>>>>>> 8ddd8aab5d7e124c1fb534f33b1b541b40c8d47d

export default async function Home() {
  const allUsers = await prisma.user.findMany({
    select: { name: true },
  });
  return (
    <div>
      <ul>
        {allUsers.map((user: { name: string }) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
