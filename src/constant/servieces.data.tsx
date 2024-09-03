import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { ServiceDataItem } from "@/model";

export const servicesData :ServiceDataItem[] = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
    title: "web Design",
    description: " Lorem ipsum dolor sit amet, consectetur adip ",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8}/>,
    title: "web Application",
    description: " Lorem ipsum dolor sit amet, consectetur adip ",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8}/>,
    title: "App Development",
    description: " Lorem ipsum dolor sit amet, consectetur adip ",
  },
];
