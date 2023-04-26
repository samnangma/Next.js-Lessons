import { useRouter } from "next/router"

export default function Post({results}){
    const router = useRouter()
    const {id} = router.query

    return(
      <>
      <h1 style={{color:"red",}}>Post: {id}</h1>
      <h2>username: {results.username}</h2>
      <h2>name: {results.name}</h2>
      <h2>email: {results.email}</h2>
      </>
    )
}
export async function getServerSideProps({params}){
    // const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const results = await resp.json()

    return{
        props: {
            results
        }
    }
}
