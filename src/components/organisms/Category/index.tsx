"use client";

import { FC } from "react";

import TitleSection from "@/components/atoms/TitleSection";
import CategoryItem from "./Categoryitem";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  const categories: any = [
    {
      id: 1,
      name: "Technology",
      totalJobs: 200,
    },
  ];

  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {categories.map((item: any) => (
          <CategoryItem
            key={item.id}
            name={item.name}
            totalJobs={item.totalJobs}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
