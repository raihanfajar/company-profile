"use client";

import useGetBlogs from "@/app/(home)/_hooks/useGetBlogs";
import BlogCard from "@/app/(home)/_components/BlogCard";
import BlogCardSkeleton from "@/app/(home)/_components/BlogCardSkeleton";

const BlogList = () => {
  const { data: blogs, isPending } = useGetBlogs();

  return (
    <section className="container mx-auto mt-[100px] px-4">
      <div className="flex min-h-screen items-center justify-center flex-col">
        <h1 className="text-3xl font-bold mb-20 mt-10">Our Blogs</h1>
        <p className="mb-10 text-center text-gray-600 font-semibold">
          Discover inspiring stories, helpful tips, and the latest updates from
          GreenStride.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {isPending && <BlogCardSkeleton count={3} />}
          {blogs?.map((blog) => (
            <BlogCard key={blog.objectId} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
