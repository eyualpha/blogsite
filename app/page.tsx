import { prisma } from "../lib/prisma";

async function getBlogPosts() {
  const items = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      createdAt: true,
      updatedAt: true,
      authorName: true,
      authorImage: true,
    },
  });

  return items;
}

export default async function Home() {
  const data = await getBlogPosts();
  return (
    <>
      <div className="py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 ">
          Latest Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map(
            (item: { title: string; content: string }, index: number) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 m-4 hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.content}</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
