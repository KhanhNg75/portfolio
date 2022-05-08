import Typed from "react-typed";
import { TypedText as T } from "@styles";
import { Wrapper as W } from "@styles";

interface Props {
    strings: string[];
    typeSpeed: number;
    backSpeed: number;
    loop: boolean;
    showCursor: boolean;
}

export const TypedText: React.FC<Props> = ({
    strings,
    typeSpeed,
    backSpeed,
    loop,
    showCursor,
}) => {
    return (
        <T.Container>
            <Typed
                className="typed-text"
                loop={loop}
                strings={strings}
                typeSpeed={typeSpeed}
                backSpeed={backSpeed}
                showCursor={showCursor}
            />
        </T.Container>
    );
};
