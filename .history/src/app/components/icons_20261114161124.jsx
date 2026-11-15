import { FaLongArrowAltRight } from "react-icons/fa";

export default function ArrowIcon({origin}) {
    const [source, destination] = origin.split(" — ");
    return (
         <span className="inline-flex items-center gap-1.5">
      <span>{source}</span>
      {destination && (
        <>
          <ArrowRight className="w-4 h-4 shrink-0" />
          <span>{destination}</span>
        </>
      )}
    </span>
    )
}