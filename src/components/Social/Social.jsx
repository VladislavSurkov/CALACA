import {
  SocialMediaItem,
  SocialMediaLink,
  SocialMediaList,
} from "./Social.styled";

const SocialMedia = () => {
  return (
    <SocialMediaList>
      <SocialMediaItem>
        <SocialMediaLink mediaType="tg">Telegram</SocialMediaLink>
      </SocialMediaItem>

      <SocialMediaItem>
        <SocialMediaLink mediaType="dis">Discord</SocialMediaLink>
      </SocialMediaItem>

      <SocialMediaItem>
        <SocialMediaLink mediaType="twi">Twitter</SocialMediaLink>
      </SocialMediaItem>

      <SocialMediaItem>
        <SocialMediaLink mediaType="tree">Tree</SocialMediaLink>
      </SocialMediaItem>
    </SocialMediaList>
  );
};

export default SocialMedia;
