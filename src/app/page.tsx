export default function Home() {
  [1, 2, 3, 4].forEach((item) => {
    return item + 1;
  });

  return <div className="text-xl">Hello World</div>;
}
