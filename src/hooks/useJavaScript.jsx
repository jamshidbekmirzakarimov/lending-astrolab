function useJavaScript() {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };
  
    const scrollto = (el) => {
      let elementPos = select(el).offsetTop - 80;
      window.scrollTo({
        top: elementPos,
        behavior: "smooth",
      });
    };
  
    function onActive(e, link) {
        console.log(link,"bu this");
      if (select(link)) {
        e.preventDefault();
        scrollto(link);
      }
    }
    const navbarlinksActive = () => {
      let navbarlinks = select(".nav-title", true);
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink?.hash);
        if (!section) return;
        if (
          position >= section?.offsetTop &&
          position <= section?.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("nav-title-active");
        } else {
          navbarlink.classList.remove("nav-title-active");
        }
      });
    };
  
    return { select, scrollto, onActive, navbarlinksActive };
  }
  export default useJavaScript;