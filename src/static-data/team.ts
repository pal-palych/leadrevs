import { Team } from "@/types/team";
import { v4 as uuid } from "uuid";

export const teamData: Team[] = [
  {
    id: uuid(),
    name: "Pasha Popovych",
    designation: "Founder & SEO Strategist",
    image: "/images/team/image-01.jpg",
  },
];
