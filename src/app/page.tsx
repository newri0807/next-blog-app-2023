/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getAllPosts } from "./service/post";
import Slider from "./Components/Slider";
import PostCard from "./Components/PostCard";
import Profile from "./Components/Profile";

export default async function Home() {
  const allPostsData = await getAllPosts();
  const featuredPosts = allPostsData.filter((post) => post.featured === true);
  const notFeaturedPosts = allPostsData.filter(
    (post) => post.featured !== true
  );

  return (
    <main>
      <Profile />

      <section className="FearturedPosts w-full  my-20">
        <h1 className="font-bold text-2xl mb-4">Feartured Posts</h1>
        <ul className="flex flex-wrap w-full gap-2">
          {featuredPosts.map((item, index) => (
            <li key={index} className="w-full md:w-[31.3%]">
              <Link href={`/Posts/${item.path}`}>
                <PostCard item={item} key={index} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="YouMayLike w-full  my-20">
        <h1 className="font-bold text-2xl mb-4">You May Like</h1>
        <Slider notFeaturedPosts={notFeaturedPosts} />
      </section>
    </main>
  );
}
