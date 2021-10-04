import Image from "next/image"

const Gallery = () => {
  return (
    <section className="gallery">
      <h1>Photos Gallery</h1>
      <div className="gallery-container">
        <div className="mega-wrapper">
          <div className="wrapper">
            <div className="gallery-image-normal">
              <Image
                src="/gallery/image-1.png"
                layout="fill"
              />
            </div>
            <div className="gallery-image-semi">
              <Image
                src="/gallery/image-2.png"
                layout="fill"
              />
            </div>
          </div>
          <div className="wrapper">
            <div className="gallery-image-large">
              <Image
                src="/gallery/image-5.png"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="mega-wrapper">
          <div className="wrapper">
            <div className="gallery-image-normal">
              <Image
                src="/gallery/image-4.png"
                layout="fill"
              />
            </div>
            <div className="gallery-image-semi">
              <Image
                src="/gallery/image-3.png"
                layout="fill"
              />
            </div>
          </div>
          <div className="wrapper">
            <div className="gallery-image-large">
              <Image
                src="/gallery/image-6.png"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery