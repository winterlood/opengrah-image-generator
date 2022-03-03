declare module "global" {
  export namespace global_types {
    type ImageUrl = "pming/study";

    interface ogImageRequestBase extends NextApiRequest {
      [key: string]: any;
      query: {
        [key: string]: any;
        url: ImageUrl;
      };
    }

    interface ogImageRequestWithPmingStudy extends ogImageRequestBase {
      query: {
        [key: string]: any;
        url: "pming/study";
      } & pming_study_types.StudyQuery;
    }

    type ogImageRequest = ogImageRequestWithPmingStudy;
  }

  export namespace pming_study_types {
    interface StudyPageQuery {
      type: "study";
      title: string;
      mentor_profile_image: string;
      mentor_name: string;
    }
    interface PostPageQuery {
      type: "post";
      title: string;
      study_name: string;
      mentor_profile_image: string;
      mentor_name: string;
    }
    type StudyQuery = StudyPageQuery | PostPageQuery;
  }
}
