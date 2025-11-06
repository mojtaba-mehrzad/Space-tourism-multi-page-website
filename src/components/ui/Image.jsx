export default function Image({png, webp, imageSize, continerStylr}) {
  return (
    <figure>
        <picture className={continerStylr}>
            <source srcSet={webp} type="image/webp" />
            <source srcSet={png} type="image/png" />
            <img className={imageSize} src={png} alt="" />
        </picture>
    </figure>
  )
}
