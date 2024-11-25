import { prisma } from "@/app/db/prisma";

export default async function Home() {
 await prisma.user.create({
   data: {
     name: "m",
     email: "mlc@thtfhfthruc.com",
     posts: {
       create: {
         title: "My First Post",
       },
     },
   },
 });
 const allUsers = await prisma.user.findMany({
   select: { name: true },
 });
 return (
<div>
<ul>
       {allUsers.map((user) => (
<li>{user.name}</li>
       ))}
</ul>
</div>
 );
}