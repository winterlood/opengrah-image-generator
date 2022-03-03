import OpenGraphLayout from "components/common/OpenGraphLayout";
import { pming_study_types } from "global";
import Image from "next/image";
import React from "react";
import style from "./OgDefaultCard.module.scss";
import pming_box_logo from "public/img/pming/pming_logo.png";
// ANTD

// COMPS

// STATICS

// TYPES

type Props = pming_study_types.StudyQuery;
// COMPONENT

const OgDefaultCard = (props: Props) => {
  const { type } = props;
  const data = {
    label: type === "post" ? "프밍 포스트" : "프밍 스터디",
    title: props.title,
    descript:
      type === "post"
        ? props.study_name
        : "온라인 강의 수강료를 지원하는 스터디 플랫폼 - 프밍 스터디",
    mentor_name: props.mentor_name,
    mentor_profile_image: props.mentor_profile_image,
  };
  return (
    <OpenGraphLayout className={style.container}>
      <div className={style.main_wrapper}>
        <div className={style.top_wrapper}>
          <div className={style.label}>{data.label}</div>
          <div className={style.title}>{data.title}</div>
          <div className={style.descript}>{data.descript}</div>
        </div>
        <div className={style.bottom_wrapper}>
          <div className={style.mentor_img_wrapper}>
            <img
              src={props.mentor_profile_image}
              alt={`${data.mentor_name}의 프로필사진`}
            />
          </div>
          <div className={style.mentor_info_wrapper}>
            <div className={style.label}>스터디 멘토</div>
            <div className={style.mentor_name}>{data.mentor_name}</div>
          </div>
        </div>
        <div className={style.brand_logo_wrapper}>
          <Image
            alt="pming_text_logo"
            src={pming_box_logo.src}
            width={80}
            height={80}
          />
        </div>
      </div>
    </OpenGraphLayout>
  );
};

export default OgDefaultCard;
