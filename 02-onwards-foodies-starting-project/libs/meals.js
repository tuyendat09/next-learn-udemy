import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { error } from "node:console";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * from meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * from meals where slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const fileName = meal.image.name;

  const steam = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  steam.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error(error);
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
  insert into meals (title,summary,instructions,creator,creator_email,image,slug)
  values (@title,@summary,@instructions,@creator,@creator_email,@image,@slug)
  `
  ).run(meal);
}
