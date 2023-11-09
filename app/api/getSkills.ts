import { sanityClient } from "@/sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { skill } from "@/typing";

//create groq query and we would wanna test out our query in studio
const query = groq`
    *[_type == "skill"]    
`;

type Data = {
  skills: skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: skill[] = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
