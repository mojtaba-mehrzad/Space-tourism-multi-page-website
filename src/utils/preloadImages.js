import { loadData } from './loadData';

import bgHomeMobile from "@/assets/images/home-bg/background-home-mobile.jpg";
import bgHomeTablet from "@/assets/images/home-bg/background-home-tablet.jpg";
import bgHomeDesktop from "@/assets/images/home-bg/background-home-desktop.jpg";
import bgDestinationMobile from "@/assets/images/destination-bg/background-destination-mobile.jpg";
import bgDestinationTablet from "@/assets/images/destination-bg/background-destination-tablet.jpg";
import bgDestinationDesktop from "@/assets/images/destination-bg/background-destination-desktop.jpg";
import bgCrewMobile from "@/assets/images/crew-bg/background-crew-mobile.jpg";
import bgCrewTablet from "@/assets/images/crew-bg/background-crew-tablet.jpg";
import bgCrewDesktop from "@/assets/images/crew-bg/background-crew-desktop.jpg";
import bgTechnologyMobile from "@/assets/images/technology-bg/background-technology-mobile.jpg";
import bgTechnologyTablet from "@/assets/images/technology-bg/background-technology-tablet.jpg";
import bgTechnologyDesktop from "@/assets/images/technology-bg/background-technology-desktop.jpg";

const backgroundsByPage = {
  home: { mobile: bgHomeMobile, tablet: bgHomeTablet, desktop: bgHomeDesktop },
  destination: { mobile: bgDestinationMobile, tablet: bgDestinationTablet, desktop: bgDestinationDesktop },
  crew: { mobile: bgCrewMobile, tablet: bgCrewTablet, desktop: bgCrewDesktop },
  technology: { mobile: bgTechnologyMobile, tablet: bgTechnologyTablet, desktop: bgTechnologyDesktop },
};

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
    } catch {
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

  return Object.values(backgroundsByPage).map(bg => bg[device]);
}
