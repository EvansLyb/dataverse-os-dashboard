import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  Card,
  AppCreateContent,
  AppCreateIcon,
  AppCreateCopy,
  AppListWrapper,
  App,
  AppLogo,
  AppBaseInfo,
  AppContent,
  AppName,
  AppWebsite,
  AppDesc,
} from "./styled";
import appCreateIcon from "@/assets/icon-create-app.svg";

import appLogo1 from "@/assets/mockAssets/app-logo-1.png";
import appLogo2 from "@/assets/mockAssets/app-logo-1.png";
import appLogo3 from "@/assets/mockAssets/app-logo-1.png";

const appList = [
  {
    id: 1,
    logo: appLogo1,
    name: "dTwitter",
    website: "https://useorbis.com/dashboardabcdefghijklmn",
    desc: "Web3 Curation DAO Web3 Curation DAOWesssb3 Curation DAO.",
  },
  {
    id: 2,
    logo: appLogo2,
    name: "Banmmer",
    website: "https://useorbis.com/dashboard",
    desc: "Web3 Curation DAO Web3 Curation DAOWesssb3 Curation DAO.",
  },
  {
    id: 3,
    logo: appLogo3,
    name: "Septiannd",
    website: "https://useorbis.com/dashboard",
    desc: "Web3 Curation DAO Web3 Curation DAOWesssb3 Curation DAO.",
  },
  {
    id: 4,
    logo: appLogo3,
    name: "Septiannd",
    website: "https://useorbis.com/dashboard",
    desc: "Web3 Curation DAO Web3 Curation DAOWesssb3 Curation DAO.",
  },
];

const AppList: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Card onClick={() => navigate("/app/management")}>
        <AppCreateContent>
          <AppCreateIcon src={appCreateIcon} />
          <AppCreateCopy>Create New Project</AppCreateCopy>
        </AppCreateContent>
      </Card>

      <AppListWrapper>
          {appList.map((app, idx) => {
            return (
              <App key={`${idx}`}>
                <Card onClick={() => navigate(`/app/management/${app.id}`)}>
                  <AppContent>
                    <AppLogo src={app.logo} />
                    <AppBaseInfo>
                      <AppName>{app.name}</AppName>
                      <AppWebsite className="ellipsis">
                        <Link to={app.website}>{app.website}</Link>
                      </AppWebsite>
                    </AppBaseInfo>
                    <AppDesc>{app.desc}</AppDesc>
                  </AppContent>
                </Card>
              </App>
            )
          })}
        </AppListWrapper>
    </PageWrapper>
  )
}

export default AppList;
