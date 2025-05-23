import PostItem from './components/postitem';
import { posts } from './data/posts';

export default function Home() {
  return (
    <main className="max-w-xl mx-auto p-4">
      {posts.map((post, index) => (
        <PostItem key={index} {...post} />
      ))}
    </main>
  );
}


