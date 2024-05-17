// components/Tooltip.tsx
import { ReactNode, useState } from "react";

interface TooltipProps {
    children: ReactNode;
    content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onBlur={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
        >
            {isVisible && (
                <div className="absolute bottom-full mb-2 w-max p-2 text-gray-100 opacity-95  rounded shadow-lg text-center text-xs">
                    {content}
                </div>
            )}
            {children}
        </div>
    );
};

export default Tooltip;
