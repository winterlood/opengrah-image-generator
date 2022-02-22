import { pming_study_types } from "global";
import { useRouter } from "next/router";
import React from "react";
import style from "./index.module.scss";
import StudyPageOpenGraph from "components/pming/study/StudyPageOpenGraph";
import PostPageOpenGraph from "components/pming/study/PostPageOpenGraph";

interface Props {}

const Index = (props: Props) => {
  const router = useRouter();
  const { type } = router.query as unknown as pming_study_types.StudyQuery;
  switch (type) {
    case "study":
      return (
        <StudyPageOpenGraph
          {...(router.query as unknown as pming_study_types.StudyPageQuery)}
        />
      );
    case "post":
      return (
        <PostPageOpenGraph
          {...(router.query as unknown as pming_study_types.PostPageQuery)}
        />
      );
    default:
      return null;
  }
};

export default Index;
