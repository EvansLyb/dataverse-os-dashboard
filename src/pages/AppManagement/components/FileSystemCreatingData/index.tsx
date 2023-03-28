import { useState } from "react";
import { Wrapper, Label, CollapseIcon } from "./styled";
import collapseIcon from "@/assets/icon-collapse-white.svg";

interface SectionProps {
  label?: string;
  value: string;
  fullValue: string;
}

const FileSystemCreatingData: React.FC<SectionProps> = ({
  label,
  value,
  fullValue,
}): React.ReactElement => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {label && <Label>{label}</Label>}
      <Wrapper className={collapsed ? "collapsed" : ""}>
        <div className="value">{collapsed ? fullValue : value}</div>
        <CollapseIcon
          className={collapsed ? "collapsed" : ""}
          src={collapseIcon}
          onClick={() => setCollapsed(!collapsed)}
        />
      </Wrapper>
    </>
  )
}

export default FileSystemCreatingData;
