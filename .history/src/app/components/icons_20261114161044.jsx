import { FaLongArrowAltRight } from "react-icons/fa";

export default function ArrowIcon({origin}) {
    const [source, destination] = origin.split(" — ");
    return <FaLongArrowAltRight className="inline-block ml-2" />;
}