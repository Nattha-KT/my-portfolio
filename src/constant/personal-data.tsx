import { PersonalDataItem } from "@/model";
import {
  MailIcon,
  User2,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

export const personalData: PersonalDataItem[] = [
  {
    icon: <User2 size={20} />,
    text: " Ryan Davis",
  },
  {
    icon: <PhoneCall size={20} />,
    text: " +6684 2298645",
  },
  {
    icon: <MailIcon size={20} />,
    text: " mymale@gmail.com ",
  },
  {
    icon: <Calendar size={20} />,
    text: " Born on 10 Mar, 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: " Master on computer engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: " thailand",
  },
];
