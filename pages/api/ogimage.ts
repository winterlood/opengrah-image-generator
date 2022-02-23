import { global_types } from "global";
import generateImageFromURL from "lib/common/image";
import type { NextApiRequest, NextApiResponse } from "next";

const getQueryStringWithoutUrl = (req: NextApiRequest) => {
  const queryCopy = JSON.parse(JSON.stringify(req.query));
  delete queryCopy["url"];
  const queryString = Object.keys(queryCopy)
    .map((key) => `${key}=${queryCopy[key]}`)
    .join("&");
  return queryString;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { url, type } =
    req.query as unknown as global_types.ogImageRequest["query"];

  const queryString = getQueryStringWithoutUrl(req);

  const imageReqUrl = `${process.env.BASE_URL}/${url}?${queryString}`;
  const data = await generateImageFromURL(imageReqUrl);

  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "image/png");
  res.status(200).end(data);

  // switch (url) {
  //   case "pming/study": {
  //     pmingHandler(
  //       req as unknown as global_types.ogImageRequest,
  //       res,
  //       queryString
  //     );
  //     break;
  //   }
  // }

  // ogimage?
  // url=pming/study&
  // type=study&
  // mentor_name=${page.mentor_name}&
  // title=${page.study_name}&
  // mentor_profile_image=${page.mentor_profile_image_url}&

  // http://localhost:3000/api/ogimage?url=pming/study&type=study&mentor_name=이정환&title=타이틀&mentor_profile_image=멘토프사유알엘&

  // Set the s-maxage property which caches the images then on the Vercel edge

  // write the image to the response with the specified Content-Type
  // res.end(data);
};
