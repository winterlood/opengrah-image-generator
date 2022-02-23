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
};
