import { Wrapper, Avatar } from "./styled";
import avatar from "@/assets/avatar.png";

interface AccountProps {
  avatar: string;
  address: string;
}

const Account: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <Avatar src={avatar} />
    </Wrapper>
  )
}

export default Account;
