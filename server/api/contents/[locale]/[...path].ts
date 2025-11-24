export default defineEventHandler(async (event) => {
  const locale = getRouterParam(event, 'locale');
  const name = getRouterParam(event, 'path');
  console.log(locale);
  // const data = await useStorage('assets:contents').getItem(`/${locale}/${name}.md`);

  return locale;
});
