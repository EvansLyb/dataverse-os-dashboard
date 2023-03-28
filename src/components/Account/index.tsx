import { Wrapper, Avatar, Address } from "./styled";
// TODO: use redux
import avatar from "@/assets/avatar.png";

// TODO: use redux
interface AccountProps {
  address: string;
}

const Account: React.FC<AccountProps> = ({
  address,
}): React.ReactElement => {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Address>{address}</Address>
    </Wrapper>
  )
}

export default Account;
