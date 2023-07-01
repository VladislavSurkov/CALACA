import {
  SocialMediaItem,
  SocialMediaLink,
  SocialMediaList,
} from "./Social.styled";
import tg from "../../img/social/tg.png";
import dis from "../../img/social/dis.png";
import twi from "../../img/social/twi.png";
import tree from "../../img/social/tree.png";

const socials = [
  {
    name: "TELEGRAM",
    img: tg,
    link: "http://localhost:3000/CALACA",
  },
  {
    name: "DISCORD",
    img: dis,
    link: "http://localhost:3000/CALACA",
  },
  {
    name: "TWITTER",
    img: twi,
    link: "http://localhost:3000/CALACA",
  },
  {
    name: "LINKTREE",
    img: tree,
    link: "http://localhost:3000/CALACA",
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
          <SocialMediaItem>
            <SocialMediaLink href={social.link}>
              <img src={social.img} alt={social.name} style={socialMargin}/>
              {social.name}
            </SocialMediaLink>
          </SocialMediaItem>
        );
      })}
    </SocialMediaList>
  );
};

export default SocialMedia;
