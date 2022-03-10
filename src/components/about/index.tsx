import { About as A } from "@styles";
import { Title } from "@styles/components/Typography";
import Image from "next/image";
import { IAboutMe } from "@interfaces/IAboutMe";
import profilePhoto from "@assets/images/profile.jpeg";

interface Props {
    title: string;
    info: IAboutMe;
}

export const About: React.FC<Props> = ({ title, info }) => {
    return (
        <A.Style>
            <A.Image>
                <Image
                    src={profilePhoto}
                    alt="profile photo"
                    layout="fill"
                    objectFit="cover"
                />
            </A.Image>
            <A.Desc>
                <Title>{title}</Title>
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
            </A.Desc>
        </A.Style>
    );
};
