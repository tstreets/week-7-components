import pageStyles from "@/app/page.module.css";
import RandomImage from "./RandomImage";
import Nav from "./Nav";

const data = [
  {
    title: "Pic 1",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 1",
  },
  {
    title: "Pic 2",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 2",
  },
  {
    title: "Pic 3",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 3",
  },
  {
    title: "Pic 4",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 4",
  },
  {
    title: "Pic 5",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 5",
  },
  {
    title: "Pic 6",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 6",
  },
  {
    title: "Pic 7",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 7",
  },
  {
    title: "Pic 8",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 1",
  },
  null,
];

export default function Home() {
  const randomImages = data.map(function (ranImg) {
    // if (statement) { return true; } else { return false; }
    // (statement) ? true : false

    return ranImg ? <RandomImage imageInfo={ranImg} /> : null;
  });

  return (
    <main>
      <Nav />
      <h1>Home</h1>
      <section className={pageStyles.container}>{randomImages}</section>
    </main>
  );
}
