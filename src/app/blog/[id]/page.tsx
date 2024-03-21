import { Metadata } from "next";

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams(id: string) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   );

//   return response.json();
// }

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({params: { id },}: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  // const { post } = params


  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
