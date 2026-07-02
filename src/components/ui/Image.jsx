export default function Image({ png, webp, imageSize, refs }) {
  return (
    <figure className="flex justify-center items-end">
      <picture ref={refs.pictureRef}>
        <source media="(max-width:1023px)" srcSet={webp} type="image/webp" ref={refs.source1Ref} />
        <source media="(min-width:1024px)" srcSet={png} type="image/png" ref={refs.source2Ref} />
        <img className={imageSize} src={png} ref={refs.imageRef} loading="eager" />
      </picture>
    </figure>
  );
}
