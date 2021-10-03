import Iframe from "react-iframe"

const Video = () => {
  return (
    <section className="video">
      <h1>Video Prewedding</h1>
      <div className="container">
        <Iframe
          className="responsiveYt"
          url="https://www.youtube.com/embed/Iy-dJwHVX84"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfFullScreen
        />
      </div>
    </section>
  )
}

export default Video