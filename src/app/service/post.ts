import path from "path";
import { promises as fs } from "fs"; // Node.js의 fs 모듈에서 promises 객체를 가져오기
import { readFile } from "node:fs/promises";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostDetailData = Post & { content: string };

// 제품 목록을 가져오는 비동기 함수
export async function getAllPosts(): Promise<Post[]> {
  // 제품 데이터 파일의 경로 설정
  const filePath = path.join(process.cwd(), "data", "posts.json");

  // 파일을 읽고 데이터를 가져옴
  const data = await fs.readFile(filePath, "utf-8");

  // JSON 데이터를 JavaScript 객체로 변환하여 반환
  return JSON.parse(data);
}

export async function getPostDetail(title: string): Promise<PostDetailData> {
  // 제품 데이터 파일의 경로 설정
  const filePath = path.join(process.cwd(), "data/posts", `${title}.md`);

  const metadata = await getAllPosts().then((posts) =>
    posts.find((post) => post.path == title)
  );

  if (!metadata) {
    throw new Error(`${title}에 해당하는 포스트를 찾을 수 없음😣`);
  }

  const content = await readFile(filePath, "utf-8");

  // 파일 경로를 반환
  return { ...metadata, content };
}
