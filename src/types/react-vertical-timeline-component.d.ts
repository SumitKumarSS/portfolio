declare module "react-vertical-timeline-component" {
  import { ReactNode } from "react";

  export interface VerticalTimelineProps {
    children?: ReactNode;
    layout?: "1-column-left" | "1-column-right" | "2-columns";
    lineColor?: string;
    className?: string;
  }

  export interface VerticalTimelineElementProps {
    children?: ReactNode;
    date?: string;
    icon?: ReactNode;
    iconStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    className?: string;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
