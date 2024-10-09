import pageStyles from "./page.module.css";

export default function RandomImage({ imageInfo }) {
  return (
    <div className={pageStyles.randomImage}>
      <img src={imageInfo.imageUrl} width={100} height={100} />
      <div>
        <h4>{imageInfo.title}</h4>
        <p>{imageInfo.description}</p>
      </div>
    </div>
  );
}
