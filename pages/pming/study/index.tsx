import { pming_study_types } from "global";
import { useRouter } from "next/router";
import React from "react";
import DefaultCard from "components/pming/study/DefaultCard";

interface Props {}

const Index = (props: Props) => {
  const router = useRouter();

  return (
    <DefaultCard
      {...(router.query as unknown as pming_study_types.StudyQuery)}
    />
  );
};

export default Index;
