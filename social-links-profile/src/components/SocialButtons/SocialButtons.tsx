import { SocialButton, SocialLinksContainer } from "./styles";

interface SocialLink {
  name: string;
  url: string;
}

interface Props {
  socialLinks: SocialLink[];
}

export const SocialButtons = ({ socialLinks }: Props) => {
  return (
    <SocialLinksContainer>
      {socialLinks.map((socialLink, index) => (
        <SocialButton key={index} href={socialLink.url} target="_blank">
          {socialLink.name}
        </SocialButton>
      ))}
    </SocialLinksContainer>
  );
};
