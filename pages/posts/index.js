import Link from "next/link";

function Post({ result }) {

  return (
    <>
      Welcome, static generation
      {result.map((res) =>
      
        <h2 key={res.id}> 
            <Link href={`posts/${res.id}`}>{res.title} </Link>
        </h2> 
      
      )}
    </>
  );
}
// implement static generation
export async function getStaticProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await resp.json();

  return {
    props: {
      result,
    },
  };
}
export default Post;
// static generation Can only write on the pages file
