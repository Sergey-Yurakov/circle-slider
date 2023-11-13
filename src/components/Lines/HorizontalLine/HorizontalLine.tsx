import cl from "./HorizontalLine.module.scss";
import cn from "classnames";

type HorizontalLineProps = {
  className?: string;
};

export const HorizontalLine = (props: HorizontalLineProps) => {
  const { className } = props;

  return <div className={cn(cl.line, className)} />;
};
