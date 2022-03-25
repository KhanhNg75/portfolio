import { About as A } from "@styles";
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
        <A.Style>
            <Title title={title} subtitle={subtitle} />
            <A.Content>
                <A.Image>
                    <A.ProfileImage src={profilePhoto} alt="profile photo" />
                </A.Image>
                <A.Description>
                    <A.Intro>{info.intro}</A.Intro>
                    <A.Infor>
                        <A.InforItem>
                            <A.InforLeft>Age:</A.InforLeft>
                            <A.InforRight>{info.age}</A.InforRight>
                        </A.InforItem>
                        <A.InforItem>
                            <A.InforLeft>Job:</A.InforLeft>
                            <A.InforRight>{info.job}</A.InforRight>
                        </A.InforItem>
                        <A.InforItem>
                            <A.InforLeft>Citizenship:</A.InforLeft>
                            <A.InforRight>{info.citizenship}</A.InforRight>
                        </A.InforItem>
                        <A.InforItem>
                            <A.InforLeft>Residence:</A.InforLeft>
                            <A.InforRight>{info.residence}</A.InforRight>
                        </A.InforItem>
                        <A.InforItem>
                            <A.InforLeft>Email:</A.InforLeft>
                            <A.InforRight>{info.email}</A.InforRight>
                        </A.InforItem>
                        <A.InforItem>
                            <A.InforLeft>Phone:</A.InforLeft>
                            <A.InforRight>{info.phone}</A.InforRight>
                        </A.InforItem>
                    </A.Infor>
                    <Button variant="outlined">Download CV</Button>
                </A.Description>
            </A.Content>
        </A.Style>
    );
};
