import { Wrapper, Label, Value, CopyIcon, CollapseIcon, FullValue } from "./styled";
import copyIcon from "@/assets/icon-copy.svg";
import collapseIcon from "@/assets/icon-collapse.svg";
import collapsedIcon from "@/assets/icon-collapsed.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DataProps {
  label?: string;
  value: string;
  fullValue: string;
  tiny?: boolean;
}

const Data: React.FC<DataProps> = ({
  label,
  value,
  fullValue,
  tiny = false,
}): React.ReactElement => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Wrapper className="items-center">
      {label && <Label className={tiny ? "single-line" : ""}>{label}</Label>}
      <Value className={label && !tiny ? "pl-18" : "tiny"}>{value}</Value>
      <CopyIcon className={tiny ? "pl-6" : "pl-18"} src={copyIcon} />
      {collapsed ? (
        <CollapseIcon
          className={tiny ? "pl-6" : "pl-18"}
          src={collapsedIcon}
          onClick={() => setCollapsed(false)}
        />
      ) : (
        <CollapseIcon
          className={tiny ? "pl-6" : "pl-18"}
          src={collapseIcon}
          onClick={() => setCollapsed(true)}
        />
      )}
      <AnimatePresence>
        {collapsed && (
          <motion.div
            style={{
              overflow: "hidden"
            }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: .2 }}
          >
            <FullValue className={tiny ? "tiny" : ""}>{fullValue}</FullValue>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Data;
