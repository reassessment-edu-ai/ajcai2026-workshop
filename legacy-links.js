// Preserve bookmarks to sections from the former single-page website.
(() => {
  const pages = {
    themes: "themes.html",
    questions: "questions.html",
    program: "program.html",
    speakers: "speakers.html",
    audience: "audience.html",
    organisers: "organisers.html",
    contact: "contact.html"
  };
  function redirectLegacySection() {
    const section = window.location.hash.slice(1);
    if (Object.prototype.hasOwnProperty.call(pages, section)) {
      const destination = new URL(pages[section], window.location.href);
      destination.hash = section;
      window.location.replace(destination.href);
    }
  }
  redirectLegacySection();
  window.addEventListener("hashchange", redirectLegacySection);
})();
