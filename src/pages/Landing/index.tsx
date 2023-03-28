import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import { Wrapper, Card, Logo, Welcome, Avatar, ButtonGroup } from "./styled";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo-1.svg";
// TODO: use redux
import avatar from "@/assets/avatar.png";

// TODO: use redux
const username = "popchah";

interface LandingProps {
}

const Landing: React.FC<LandingProps> = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Card>
        <Logo src={logo} />
        <Welcome>
          Welcome!
          <Avatar src={avatar} />
          {username}
        </Welcome>
        <Input
          label="Leave your email & get our newest feature!"
          placeholder="Email"
        />
        <ButtonGroup>
          <Button onClick={() => navigate("/app/list")}>Submit</Button>
          <Button onClick={() => navigate("/app/list")} type="outlined">Skip</Button>
        </ButtonGroup>
      </Card>
    </Wrapper>
  )
}

export default Landing;
