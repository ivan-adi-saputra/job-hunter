"use client";

import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface FindCompaniesPageProps {}

const FindCompaniesPage: FC<FindCompaniesPageProps> = ({}) => {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const [categories, setCategories] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const filters: any = [];
  const companies: any = [];

  const onSubmit = async (val: z.infer<typeof formFilterCompanySchema>) => {
    setCategories(val.industry);
  };

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmit}
      filterForms={filters}
      title="dream companies"
      subtitle="Find the dream companies you dream work for"
      loading={isLoading}
      type="company"
      data={companies}
    />
  );
};

export default FindCompaniesPage;
