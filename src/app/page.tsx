/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getAllPosts } from "./service/post";
import Slider from "./Components/Slider";
import PostCard from "./Components/PostCard";

export default async function Home() {
  const allPostsData = await getAllPosts();
  const featuredPosts = allPostsData.filter((post) => post.featured === true);
  const notFeaturedPosts = allPostsData.filter(
    (post) => post.featured !== true
  );

  return (
    <main>
      <div className="topIntro w-full">
        <img
          className="w-150 h-150 rounded-full my-2 mx-auto"
          src="https://source.unsplash.com/user/c_v_r/150x150"
          alt="프사"
        ></img>
        <h1 className="text-xl font-bold text-center">{`Hi, I'm Newl.`}</h1>
        <h4 className="text-lg font-bold text-center">Front-end engineer</h4>
        <h4 className="text-lg  text-center">시행착오 많은 주니어 🥔 뉼</h4>
        <div className="flex justify-center">
          <button
            type="button"
            className="my-2 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            <Link href={"/Contact"}> Contact Me</Link>
          </button>
        </div>
      </div>

      <section className="FearturedPosts w-full  my-20">
        <h1 className="font-bold text-2xl mb-4">Feartured Posts</h1>
        <ul className="flex flex-wrap w-full gap-2 ">
          {featuredPosts.map((item, index) => (
            <li key={index}>
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
