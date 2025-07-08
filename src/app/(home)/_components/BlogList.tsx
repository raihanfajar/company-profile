"use client";

import useGetBlogs from "../_hooks/useGetBlogs";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

const BlogList = () => {
  const { data: blogs, isPending } = useGetBlogs();

  return (
    <section className="container mx-auto mt-32 min-h-screen px-4">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {isPending && <BlogCardSkeleton count={3} />}

        {blogs?.map((blog) => (
          <BlogCard key={blog.objectId} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
