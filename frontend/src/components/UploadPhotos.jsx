import ImageUploader from "./ImageUploader"

export default function UploadPhotos() {
    return (
        <section><div>
        <h2>Take a photo of yourself</h2>
        <div className="">
          <div className="">
            <p>
              Take a photo of your face head-on, in natural lighting. We’ll
              recommend colours that best suit you.
            </p>
            <p>
              NOTE: Your privacy is paramount. Photos uploaded for styling
              purposes are not stored and remain confidential
            </p>
          </div>
          <div className="">
            <ImageUploader />
          </div>
        </div>
      </div>
      <div>
        <h2>Take a full body photo of yourself</h2>
        <div className="">
          <div className="">
            <p>
              Take a photo of your full body head-on, in natural lighting,
              ensuring that your entire body is in frame. We’ll find your
              Arc’teryx size.
            </p>
            <p>
              NOTE: Your privacy is paramount. Photos uploaded for styling
              purposes are not stored and remain confidential
            </p>
          </div>
          <div className="">
            <ImageUploader />
          </div>
        </div>
      </div></section>
    )
}