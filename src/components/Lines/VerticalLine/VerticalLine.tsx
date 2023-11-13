import cl from "./VerticalLine.module.scss";
import cn from "classnames";

type VerticalLineProps = {
  className?: string;
};

export const VerticalLine = (props: VerticalLineProps) => {
  const { className } = props;

  return <div className={cn(cl.line, className)} />;
};
