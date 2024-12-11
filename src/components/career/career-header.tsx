import { ArrowDown } from 'lucide-react';
import SwapColumnFeatures from './swap-column';

export function CareerHeader() {
    return (
        <div id='projects' className="flex flex-col items-center ">
            <h1 className=" flex gap-2 text-xl items-center md:text-2xl">Career
                <ArrowDown className="animate-bounce" />
            </h1>

            <div className="w-full ">
                <SwapColumnFeatures />
            </div>
        </div>
    );
}
