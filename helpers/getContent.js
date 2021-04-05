import { dateFormat } from "~/helpers/dateFormat.js";
import { CREATIONS_LIMIT } from "~/helpers/config.js";

export async function getAsyncOneFileData({ $content, params, dir }) {
  const article = await $content(dir, params.slug).fetch();
  article.date = dateFormat(article.date);
  return {
    article,
  };
}

export async function getAsyncDirectoryData({
  $content,
  dir,
  limit = CREATIONS_LIMIT,
}) {
  const data = await $content(dir)
    .sortBy("date", "desc")
    .limit(limit)
    .fetch();

  data.forEach((el, index, arr) => (arr[index].date = dateFormat(el.date)));
  return data;
}
