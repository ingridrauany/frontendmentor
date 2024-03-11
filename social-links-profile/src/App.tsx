import { Card, Container, ProfilePicture, SocialButtons } from "./components";
import { socialLinks } from "./data/socialLinks";
import { Description, Location, Name } from "./styles";

const App = () => {
  return (
    <Container>
      <Card>
        <ProfilePicture />
        <Name>Jessica Randall</Name>
        <Location>London, United Kingdom</Location>
        <Description>&quot;Front-end developer and avid reader.&quot;</Description>
        <SocialButtons socialLinks={socialLinks} />
      </Card>
    </Container>
  );
};

export default App;
