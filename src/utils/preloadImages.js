import { loadData } from './loadData';

export async function preloadAllImages() {
  const imagePaths = new Set();

  const pages = ['crew', 'destinations', 'technology'];
  pages.forEach(page => {
    try {
      const data = loadData(page);
      if (!data || !Array.isArray(data)) return;

      data.forEach(item => {
        if (item?.images) {
          Object.values(item.images).forEach(path => {
            if (path) imagePaths.add(path.startsWith('/') ? path : `/${path}`);
          });
        }
      });
    } catch (e) {
      console.log(`Failed to load data for ${page}`);
    }
  });

  const shared = [
    '/assets/images/shared/logo.svg',
    '/assets/images/shared/icon-hamburger.svg',
    '/assets/images/shared/icon-close.svg',
  ];
  shared.forEach(path => imagePaths.add(path));

  const backgrounds = getResponsiveBackgrounds();
  backgrounds.forEach(path => imagePaths.add(path));

  return Array.from(imagePaths);
}

function getResponsiveBackgrounds() {
  const width = window.innerWidth;
  const device = width < 640 ? 'mobile'
               : width < 1024 ? 'tablet'
               : 'desktop';

  const pages = ['home', 'destination', 'crew', 'technology'];

  return pages.map(name =>
    `/assets/images/${name}-bg/background-${name}-${device}.jpg`
  );
}