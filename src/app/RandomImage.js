import pageStyles from "./page.module.css";

export default function RandomImage({ title, description, imageUrl }) {
  return (
    <div className={pageStyles.randomImage}>
      <img src={imageUrl} width={100} height={100} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
