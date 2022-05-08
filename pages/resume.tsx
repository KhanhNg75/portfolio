import { About } from "@components/about";
import { Timeline } from "@components/timeLine";
import { ProgrammingSkills } from "@components/programming";
import {
    aboutMe,
    experience,
    education,
    program,
    softwares,
    professional,
} from "src/common/data";
import { Wrapper as W } from "@styles";
import { Professional } from "@components/professional";

const Resume: React.FC = () => {
    return (
        <W.Container padding>
            <About title="About Me" subtitle="About Me" info={aboutMe} />
            <Timeline
                title="My Experience"
                subtitle="My Experience"
                timelineItems={experience}
            />
            <Timeline
                title="My Education"
                subtitle="My Education"
                timelineItems={education}
            />
            <ProgrammingSkills
                title="Programming SKills"
                subtitle="Programming SKills"
                skills={program}
            />
            <ProgrammingSkills
                title="Softwares"
                subtitle="Softwares"
                skills={softwares}
            />
            <Professional
                title="Professional Skills"
                subtitle="Professional Skills"
                professional={professional}
            />
        </W.Container>
    );
};
export default Resume;
