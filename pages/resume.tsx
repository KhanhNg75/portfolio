import { About } from "@components/about";
import { Timeline } from "@components/timeLine";
import { ProgrammingSkills } from "@components/programming";
import {
    aboutMe,
    experience,
    education,
    program,
    softwares,
    knowledge,
} from "src/common/data";
import { Resume as R } from "@styles";
import { Knowledge } from "@components/knowledge";

const Resume: React.FC = () => {
    return (
        <R.Style>
            <About title="About Me" info={aboutMe} />
            <Timeline title="My Experience" timelineItems={experience} />
            <Timeline title="My Education" timelineItems={education} />
            <ProgrammingSkills title="Programming SKills" skills={program} />
            <ProgrammingSkills title="Softwares" skills={softwares} />
            <Knowledge title="Knowledge" knowledge={knowledge} />
        </R.Style>
    );
};
export default Resume;
