import { dateFormat } from "~/helpers/dateFormat.js";

export async function getAsyncOneFileData({ $content, params, dir }) {
  const article = await $content(dir, params.slug).fetch();
  article.date = dateFormat(article.date);
  return {
    article,
  };
}

export async function getAsyncDirectoryData({ $content, dir, limit = 0 }) {
  const data = await $content(dir)
    .sortBy("date", "desc")
    .limit(limit)
    .fetch();

  data.forEach((el, index, arr) => (arr[index].date = dateFormat(el.date)));
  return data;
}

export async function getAsyncByTagData({ $content, params}) {
  const slug = params.slug;
  let data = await getAsyncDirectoryData({$content, dir: 'povidky'});
  const povidky = data.filter(el => el.tags && el.tags.includes(slug));
  data = await getAsyncDirectoryData({$content, dir: 'basnicky'});
  const basnicky = data.filter(el => el.tags && el.tags.includes(slug));
  data = await getAsyncDirectoryData({$content, dir: 'textiky'});
  const textiky = data.filter(el => el.tags && el.tags.includes(slug));
  data = await getAsyncDirectoryData({$content, dir: 'blog'});
  const blog = data.filter(el => el.tags && el.tags.includes(slug));
  return { povidky, basnicky, textiky, blog };
}