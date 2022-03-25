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
            <Knowledge
                title="Knowledge"
                subtitle="Knowledge"
                knowledge={knowledge}
            />
        </R.Style>
    );
};
export default Resume;
