import data from "@/datas/data.json";

const base = import.meta.env.BASE_URL;

export function loadData(sectionName) {
  return data[sectionName].map((item) => ({
    ...item,
    images: {
      png: `${base}${item.images.png.replace(/^\//, "")}`,
      webp: `${base}${item.images.webp.replace(/^\//, "")}`,
    },
  }));
}
