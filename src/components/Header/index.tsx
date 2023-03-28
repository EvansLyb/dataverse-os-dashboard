import { Wrapper, HeaderRightRender, Logo } from "./styled";
import Account from "../Account";
import logo from "@/assets/logo.svg";

const Header: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <HeaderRightRender>
        <Logo src={logo} />
        <div>Dataverse Dashboard</div>
      </HeaderRightRender>
      <Account address="0x2123456" />
    </Wrapper>
  )
}

export default Header;
