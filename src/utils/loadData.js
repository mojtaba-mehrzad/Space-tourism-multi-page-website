import data from "@/datas/data.json";

const base = import.meta.env.BASE_URL;
console.log(data)

export function getDestinations() {
  return data.destinations.map((planet) => ({
    ...planet,
    images: {
      png: `${base}${planet.images.png.replace(/^\//, "")}`,
      webp: `${base}${planet.images.webp.replace(/^\//, "")}`,
    },
  }));
}
