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
  const paths = [];
  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

  const bgMap = {
    home: {
      mobile: '/assets/images/home-bg/background-home-mobile.jpg',
      tablet: '/assets/images/home-bg/background-home-tablet.jpg',
      desktop: '/assets/images/home-bg/background-home-desktop.jpg'
    },
    destination: {
      mobile: '/assets/images/destination-bg/background-destination-mobile.jpg',
      tablet: '/assets/images/destination-bg/background-destination-tablet.jpg',
      desktop: '/assets/images/destination-bg/background-destination-desktop.jpg'
    },
    crew: {
      mobile: '/assets/images/crew-bg/background-crew-mobile.jpg',
      tablet: '/assets/images/crew-bg/background-crew-tablet.jpg',
      desktop: '/assets/images/crew-bg/background-crew-desktop.jpg'
    },
    technology: {
      mobile: '/assets/images/technology-bg/background-technology-mobile.jpg',
      tablet: '/assets/images/technology-bg/background-technology-tablet.jpg',
      desktop: '/assets/images/technology-bg/background-technology-desktop.jpg'
    }
  };

  Object.values(bgMap).forEach(bg => {
    if (isMobile) paths.push(bg.mobile);
    else if (isTablet) paths.push(bg.tablet);
    else paths.push(bg.desktop);
  });

  return paths;
}