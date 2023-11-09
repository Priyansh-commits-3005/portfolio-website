import { sanityClient } from "@/sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Experience } from "@/typing";

//create groq query and we would wanna test out our query in studio
const query = groq`
    *[_type == "experience"]    
`;

type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query);

  res.status(200).json({ experiences });
}
