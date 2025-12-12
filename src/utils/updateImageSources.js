export function updateSources(refs, newPng, newWebp) {
  if (refs.imageRef.current) refs.imageRef.current.src = newPng;
  if (refs.pictureRef.current) {
    const sources = refs.pictureRef.current.querySelectorAll("source");
    sources[0]?.setAttribute("srcset", newWebp);
    sources[1]?.setAttribute("srcset", newPng);
  }
}