declare module "global" {
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
      lecture_thumbnail_url: string;
      mentor_profile_image: string;
    }
    type StudyQuery = StudyPageQuery | PostPageQuery;
  }
}
