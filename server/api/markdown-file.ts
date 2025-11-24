export default defineEventHandler(async (event) => {
  const data = await useStorage('assets:contents').getItem('/vi/about-me.md');

  return data;
});
