import { Header } from "./components/Header"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"


// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/claudioalberto.png',
      name: 'Claudio Alberto',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },
    ],
    publishedAt: new Date('2022-07-04 12:08:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/claudioalberto.png',
      name: 'Diego Faria',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },
    ],
    publishedAt: new Date('2022-05-04 19:08:00')
  }
]

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                id={post.id}
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }

          )}
        </main>
      </div>
    </div>
  )
}
