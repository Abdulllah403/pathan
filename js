import Header from 

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ padding:  }}>
        {children}
      </main>
    </>
  );
}
import Link from ;

export default function Header() {
  return (
    <nav style={{ background: , padding:  }}>
      <Link href="/" style={{ color: , marginRight:  }}>
        Home
      </Link>
      <Link href=style={{ color: "white", marginRight:  }}>
        About
      </Link>
      <Link href= style={{ color:  }}>
        Blog
      </Link>
    </nav>
  );
}
import Layout from ;

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to My Blog Website</h1>
      <p>This is a simple blog built with Next.js Pages Router.</p>
    </Layout>
  );
}
import Layout from ;

export default function About() {
  return (
    <Layout>
      <h1>About Us</h1>
      <p>This blog website is created as a Next.js assignment.</p>
    </Layout>
  );
}
import Layout from ;
import Link from ;

const posts = [
  { id: 1, title:  },
  { id: 2, title: },
  { id: 3, title:  },
];

export default function Blog() {
  return (
    <Layout>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
import { useRouter } from ;
import Layout from ;

const posts = [
  { id: 1, title:  content: },
  { id: 2, title:  content:},
  { id: 3, title: , content:  },
];

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <Layout><p>Loading...</p></Layout>;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </Layout>
  );
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: 333;
}
