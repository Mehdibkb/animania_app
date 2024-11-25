import { prisma } from "@/app/db/prisma";
 
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, password, role, postTitle, postContent, postSlug, commentContent } = req.body;
 
      // Créer un utilisateur avec un rôle et un post associé
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
          role,
          posts: {
            create: {
              title: postTitle,
              content: postContent,
              slug: postSlug,
            },
          },
        },
      });
 
      // Ajouter un commentaire associé au post et à l'utilisateur
      const postId = user.posts[0].id;
      const comment = await prisma.comment.create({
        data: {
          content: commentContent,
          authorId: user.id,
          postId: postId,
        },
      });
 
      res.status(200).json({ message: "Données insérées avec succès", user, comment });
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de l'insertion des données", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}