import {
  SocialMediaItem,
  SocialMediaLink,
  SocialMediaList,
} from "./Social.styled";
import tg from "../../img/social/tg.png";
import dis from "../../img/social/dis.png";
import twit from "../../img/social/twit.png";
import tree from "../../img/social/tree.png";

const socials = [
  {
    name: "TELEGRAM",
    img: tg,
    link: "#",
  },
  {
    name: "DISCORD",
    img: dis,
    link: "#",
  },
  {
    name: "TWITTER",
    img: twit,
    link: "#",
  },
  {
    name: "LINKTREE",
    img: tree,
    link: "#",
  },
];

const socialMargin = {
    marginBottom: `10px`,
}

const SocialMedia = () => {
  return (
    <SocialMediaList>
      {socials.map((social) => {
        return (
          <SocialMediaItem key={social.name}>
            <SocialMediaLink href={social.link}>
              <img src={social.img} alt={social.name} style={socialMargin} />
              {social.name}
            </SocialMediaLink>
          </SocialMediaItem>
        );
      })}
    </SocialMediaList>
  );
};

export default SocialMedia;
