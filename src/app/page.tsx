// import { Hero } from "../components";

import { Hero, LatestArticles } from "@/components";

export default function Home() {
  return (
    <div className="max-width">
      <Hero />
      <LatestArticles />
    </div>
  );
}
