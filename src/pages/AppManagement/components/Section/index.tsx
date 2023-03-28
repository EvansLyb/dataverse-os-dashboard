import { ReactNode } from "react";
import { Wrapper, Header, Title, Footer } from "./styled";

interface SectionProps {
  float: "left" | "right";
  title?: string;
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  float = "left",
  title,
  header,
  content,
  footer,
}): React.ReactElement => {
  return (
    <Wrapper>
      <Header>
        {title ? <Title float={float}>{title}</Title> : header}
      </Header>
      {content}
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  )
}

export default Section;
