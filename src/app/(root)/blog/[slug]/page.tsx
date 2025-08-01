"use client"; // 🔹 Make it a client component

import React from "react";
import { BLOGS } from "@/constant/data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslation } from "react-i18next";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const { t } = useTranslation();
  const blogsData = BLOGS(t); // Make sure BLOGS accepts i18n properly
  const blog = blogsData.find((b) => b.slug === params.slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="mt-28 mb-20 max-w-4xl px-4 mx-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("nav.home")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{blog.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-10">
        <h1 className="md:text-5xl text-3xl font-bold md:mb-10 mb-6 max-w-5xl">
          {blog.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content || "" }}></div>
      </div>
    </div>
  );
};

export default BlogDetails;
