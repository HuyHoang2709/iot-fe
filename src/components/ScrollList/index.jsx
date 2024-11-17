/* eslint-disable react/prop-types */
import { Card } from "../Card";
import "./index.css";

export const ScrollList = (props) => {
  return (
    <Card className="overflow-y-scroll no-scrollbar flex flex-col gap-y-4 mt-4 max-h-[540px] w-auto mx-auto">
      {props.children}
    </Card>
  );
};
