import { About as A } from "@styles";
import { Wrapper as W } from "@styles";
import { Flex } from "@styles/components/Flex";
import { Title } from "@components/title";
import { IAboutMe } from "@interfaces/IAboutMe";
import profilePhoto from "@assets/images/profile.jpg";
import Button from "@mui/material/Button";
interface Props {
    title: string;
    subtitle: string;
    info: IAboutMe;
}

export const About: React.FC<Props> = ({ title, subtitle, info }) => {
    return (
        <W.Container>
            <Title title={title} subtitle={subtitle} />
            <A.Content>
                <W.Container>
                    <A.ProfileImage src={profilePhoto} alt="profile photo" />
                </W.Container>
                <A.Description>
                    <A.Intro>{info.intro}</A.Intro>
                    <A.Infor>
                        <Flex>
                            <A.InforLeft>Age:</A.InforLeft>
                            <A.InforRight>{info.age}</A.InforRight>
                        </Flex>
                        <Flex>
                            <A.InforLeft>Job:</A.InforLeft>
                            <A.InforRight>{info.job}</A.InforRight>
                        </Flex>
                        <Flex>
                            <A.InforLeft>Citizenship:</A.InforLeft>
                            <A.InforRight>{info.citizenship}</A.InforRight>
                        </Flex>
                        <Flex>
                            <A.InforLeft>Residence:</A.InforLeft>
                            <A.InforRight>{info.residence}</A.InforRight>
                        </Flex>
                        <Flex>
                            <A.InforLeft>Email:</A.InforLeft>
                            <A.InforRight>{info.email}</A.InforRight>
                        </Flex>
                        <Flex>
                            <A.InforLeft>Phone:</A.InforLeft>
                            <A.InforRight>{info.phone}</A.InforRight>
                        </Flex>
                    </A.Infor>
                    {/* <Button variant="outlined">
                        <a href="../../assets/resume/CV.pdf" download>
                            Download CV
                        </a>
                    </Button> */}
                </A.Description>
            </A.Content>
        </W.Container>
    );
};
