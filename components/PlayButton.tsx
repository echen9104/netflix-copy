import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface PlayButtonProps {
    movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({
    movieId
}) => {
    const router = useRouter();

    return(
        <div onClick={() => router.push(`/watch/${movieId}`)}
        className="text-black bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg
        font-semibold cursor-pointer flex flex-row items-center hover:bg-neutral-300 transition">
            <BsFillPlayFill  size={25} className="mr-1" />
            Play
        </div>
    )
}

export default PlayButton;