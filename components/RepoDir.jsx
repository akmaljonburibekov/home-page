import Link from "next/link"
import { resolve } from "styled-jsx/css"

async function fetchContents(name) {

  // await new Promise((resolve) => setTimeout(() => {}, 3000))

  const request = await fetch(`https://api.github.com/repos/akmaljonburibekov/${name}/contents`,
  {
  next: {
    revalidate: 60 // seconds
  },
},
)
  const contents = await request.json()
  return contents
}

async function RepoDir({ name }) {
   const contents = await fetchContents(name)

  const dirs = contents.filter((content) => content.type === 'dir')

  return (
    <div>
      <h3>Content Links</h3>
      <ul>
      {dirs.map((dir) => {
        return <li key={dir.url}>
        <Link href="">
          {dir.path}
          </Link>
        </li>
      })}
      </ul>
    </div>
  )
}


export default RepoDir