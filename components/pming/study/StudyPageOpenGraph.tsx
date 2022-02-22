import OpenGraphLayout from "components/common/OpenGraphLayout";
import { pming_study_types } from "global";
import Image from "next/image";
import React from "react";
import style from "./StudyPageOpenGraph.module.scss";

import pming_text_logo from "public/img/pming/pming_logo_text_only_primary.png";
import pming_box_logo from "public/img/pming/pming_logo.png";
// ANTD

// COMPS

// STATICS

// TYPES

interface Props extends pming_study_types.StudyPageQuery {}

// COMPONENT

const StudyPageOpenGraph = (props: Props) => {
  console.log(props);
  return (
    <OpenGraphLayout className={style.container}>
      <div className={style.main_wrapper}>
        <div className={style.top_wrapper}>
          <div className={style.label}>프밍 스터디</div>
          <div className={style.title}>{props.title}</div>
          <div className={style.descript}>
            온라인 강의 수강료를 지원하는 스터디 플랫폼 - 프밍 스터디
          </div>
        </div>
        <div className={style.bottom_wrapper}>
          <div className={style.mentor_img_wrapper}>
            <img
              src={props.mentor_profile_image}
              alt={`${props.mentor_name}의 프로필사진`}
            />
          </div>
          <div className={style.mentor_info_wrapper}>
            <div className={style.label}>스터디 멘토</div>
            <div className={style.mentor_name}>{props.mentor_name}</div>
          </div>
          {/* <div className={style.img_wrapper}>
            <Image
              alt="pming_text_logo"
              src={pming_box_logo.src}
              width={100}
              height={100}
            />
          </div> */}
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

export default StudyPageOpenGraph;
