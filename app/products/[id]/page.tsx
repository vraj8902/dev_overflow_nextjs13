import React from 'react'

const page = ({params}) => {
  return (
    <main>
     <h1>
        {params?.id}
     </h1>
    </main>
  )
}

export default page