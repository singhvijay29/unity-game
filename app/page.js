import UnityPlayer from "./components/UnityPlayer";

export default function Home() {
  return (
    <div className="">
      <UnityPlayer gamePath="/unity/web1/index.html" />
    </div>
  );
}
