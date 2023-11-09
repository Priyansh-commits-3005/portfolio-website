import { sanityClient } from "@/sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Social } from "@/typing";

//create groq query and we would wanna test out our query in studio
const query = groq`
    *[_type == "social"]    
`;

type Data = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await sanityClient.fetch(query);

  res.status(200).json({ socials });
}
