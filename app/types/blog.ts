export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

export interface BlogPostPageProps {
  params: {
    id: string;
  };
}
