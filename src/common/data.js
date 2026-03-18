const getTheme = () => {

  const prefersColorScheme = window.matchMedia('(prefers-color-scheme:dark)');
  if (prefersColorScheme.matches)
    return "dark";
  else
    return "light"
};

const getScrollPosition = () => {

  const scrollPosition = localStorage.getItem('last-scroll-position') || 0;
  return scrollPosition;
};

const saveScrollPosition = (position) => {

  localStorage.setItem('last-scroll-position', position);
};