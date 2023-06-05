const Poster = ({ alt, src }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="rounded-2xl h-60 w-40 object-cover drop-shadow-poster"
      />
    </div>
  )
}

export default Poster