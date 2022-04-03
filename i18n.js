module.exports = {
    // providing the locales supported by your application
  locales: ["en", "he"],
  //  default locale used when the non-locale paths are visited
  defaultLocale: "en",
  pages: {
    "*": ["common"],
    "/": ["home"],
  },
  loadLocaleFrom: (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
}