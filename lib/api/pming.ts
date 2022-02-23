// import { global_types, pming_study_types } from "global";
// import type { NextApiRequest, NextApiResponse } from "next";

// // eslint-disable-next-line import/no-anonymous-default-export
// export default async function pmingHandler(
//   req: global_types.ogImageRequest,
//   res: NextApiResponse,
//   queryString: string
// ) {
//   const { url, type } = req.query;
//   if (type === "study") {
//     const studyPageQuery = req.query as pming_study_types.StudyPageQuery;
//     const imgReqUrl = `${url}?${queryString}`;

//     console.log(imgReqUrl);
//     const data = await
//   } else {
//   }

//   res.status(200).json({});
// }
