import { TypedText } from "@components/typedText";
import { Main as M } from "@styles";
import { Flex } from "@styles/components/Flex";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const socialMediaLinks = {
    facebook: "https://www.facebook.com/bao.khanh.52493/",
    instagram: "https://www.instagram.com/khanhng75/",
    github: "https://github.com/KhanhNg75",
    linkedin: "https://www.linkedin.com/in/khanh-nguyen-441123198/",
};

const Home: React.FC = () => {
    return (
        <Flex home alignItems="center" justifyContent="center">
            <Flex homeContainer alignItems="center">
                <M.Avatar>
                    <M.Image />
                </M.Avatar>
                <M.Details>
                    <M.Name>Hi, I am Khanh</M.Name>
                    <TypedText
                        strings={[
                            "Junior Front-end Developer.",
                            "Based in Bristol.",
                            "Accidentally fell in love with JavaScript.",
                        ]}
                        loop
                        showCursor
                        typeSpeed={30}
                        backSpeed={30}
                    />
                    <Flex justifyContent="center">
                        <M.IconMedia href={socialMediaLinks.facebook}>
                            <FacebookIcon />
                        </M.IconMedia>
                        <M.IconMedia href={socialMediaLinks.instagram}>
                            <InstagramIcon />
                        </M.IconMedia>
                        <M.IconMedia href={socialMediaLinks.github}>
                            <GitHubIcon />
                        </M.IconMedia>
                        <M.IconMedia href={socialMediaLinks.linkedin}>
                            <LinkedInIcon />
                        </M.IconMedia>
                    </Flex>
                </M.Details>
            </Flex>
        </Flex>
    );
};
export default Home;
