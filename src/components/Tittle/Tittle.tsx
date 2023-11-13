import cl from "./Tittle.module.scss";
import cn from "classnames";

type TittleProps = {
  title: string;
  className?: string;
};

export const Tittle = (props: TittleProps) => {
  const { title, className } = props;

  return <h1 className={cn(cl.h1, className)}>{title}</h1>;
};
