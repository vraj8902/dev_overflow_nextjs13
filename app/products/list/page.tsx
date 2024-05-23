import Link from "next/link"

const page = () => {
  return (
    <div>
     <Link href="/products/1">
     <h1>product 1</h1>
     </Link>   
     <Link href="/products/2">
     <h1>product 2</h1>   
     </Link>
     <Link href="/products/3">
     <h1>product 3</h1>
     </Link>
    </div>
  )
}

export default page