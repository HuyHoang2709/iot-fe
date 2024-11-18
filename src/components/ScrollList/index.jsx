/* eslint-disable react/prop-types */
import { Card } from "../Card";
import "./index.css";

export const ScrollList = ({ children, styles = "max-h-[540px] w-auto" }) => {
  return (
    <Card
      className={`overflow-y-scroll no-scrollbar flex flex-col gap-y-4 mt-4 mx-auto ${styles}`}
    >
      {children}
    </Card>
  );
};
