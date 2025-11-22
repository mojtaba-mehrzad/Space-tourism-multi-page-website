import data from "@/datas/data.json";

const base = import.meta.env.BASE_URL;

export function loadData(sectionName) {
  return data[sectionName].map((item) => {
    const images = item.images.png && item.images.webp ?{
          png: `${base}${item.images.png.replace(/^\//, "")}`,
          webp: `${base}${item.images.webp.replace(/^\//, "")}`,
        }
      : {
          portrait: `${base}${item.images.portrait.replace(/^\//, "")}`,
          landscape: `${base}${item.images.landscape.replace(/^\//, "")}`,
        };
    return{ ...item, images};
    })
}