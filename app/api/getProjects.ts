import { sanityClient } from "@/sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Project } from "@/typing";

//create groq query and we would wanna test out our query in studio
const query = groq`
    *[_type == "Project"]    
`;

type Data = {
  Projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Projects: Project[] = await sanityClient.fetch(query);

  res.status(200).json({ Projects });
}
