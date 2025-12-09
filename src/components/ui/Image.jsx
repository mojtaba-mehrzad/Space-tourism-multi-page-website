export default function Image({png, webp, imageSize, refs }) {
  return (
    <figure className="flex justify-center items-end">
        <picture >
            <source media="(max-width:1023px)" srcSet={webp} type="image/webp" />
            <source media="(min-width:1024px)" srcSet={png} type="image/png" />
            <img className={imageSize} src={png} alt="" ref={refs.image} />
        </picture>
    </figure>
  )
}
