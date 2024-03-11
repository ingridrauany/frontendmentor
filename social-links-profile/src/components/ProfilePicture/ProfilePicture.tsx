import ProfilePhoto from "@assets/avatar-jessica.jpeg";
import { ProfilePictureContainer } from "./styles";

export function ProfilePicture() {
  return (
    <ProfilePictureContainer>
      <img src={ProfilePhoto} alt="Jessica Randall Profile" />
    </ProfilePictureContainer>
  );
}
