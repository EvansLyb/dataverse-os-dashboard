import { ReactNode } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import { Wrapper, ProgressBar } from "./styled";


interface ProgressCardProps {
  progress: number; // 0 - 100
  failed?: boolean,
  children?: ReactNode;
  cssStyles?: FlattenSimpleInterpolation;
  className?: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  progress = 0,
  failed = false,
  children,
  cssStyles,
  className,
}): React.ReactElement => {
  return (
    <Wrapper cssStyles={cssStyles} className={className}>
      <ProgressBar failed={failed}>
        <span
          className="progress"
          style={{
            width: `${progress}%`,
          }}
        />
      </ProgressBar>
      {children}
    </Wrapper>
  )
}

export default ProgressCard;
