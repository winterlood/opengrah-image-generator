import { pming_study_types } from "global";
import { useRouter } from "next/router";
import React from "react";
import OgDefaultCard from "components/pming/study/OgDefaultcard";

interface Props {}

const Index = (props: Props) => {
  const router = useRouter();
  return (
    <OgDefaultCard
      {...(router.query as unknown as pming_study_types.StudyQuery)}
    />
  );
};

export default Index;
