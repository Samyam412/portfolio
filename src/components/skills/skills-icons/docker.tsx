
import * as React from "react";

const DockerIcon: React.FC<React.SVGProps<SVGElement>> = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
        <g>
            <circle cx="16" cy="16" r="14" fill="#1794D4"></circle>
            <path
                fill="#fff"
                d="M18 7h-2v2h2zM10 10h2v2h-2zM6.002 16.941C6.172 19.843 7.9 24 14 24c6.8 0 9.833-5 10.5-7.5.833 0 2.7-.5 3.5-2.5-.5-.5-2.5-.5-3.5 0 0-.8-.5-2.5-1.5-3-.667.667-1.7 2.4-.5 4-.5 1-1.833 1-2.5 1H6.943c-.53 0-.973.413-.941.941M9 13H7v2h2z"
            ></path>
            <path
                fill="#fff"
                d="M10 13h2v2h-2zM15 13h-2v2h2zM16 13h2v2h-2zM21 13h-2v2h2zM15 10h-2v2h2zM16 10h2v2h-2z"
            ></path>
        </g>
    </svg>
);

export default DockerIcon;
