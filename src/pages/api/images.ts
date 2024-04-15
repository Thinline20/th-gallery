import type { APIRoute } from "astro";
import { db } from "~/server/db";

export const GET: APIRoute = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  if (images.length === 0) {
    return new Response("No images found", {
      status: 404,
    });
  }

  return new Response(JSON.stringify(images), { status: 200 });
};
