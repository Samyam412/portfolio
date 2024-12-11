import { ArrowDown } from 'lucide-react';
import SwapColumnFeatures from './swap-column';

export function CareerHeader() {
    return (
        <div className="flex flex-col items-center ">
            <h1 className="text-xl md:text-2xl">Career</h1>
            <h1 className="flex justify-center gap-2">
                Scroll down <ArrowDown className="animate-bounce" />
            </h1>
            <div className="w-full ">
                <SwapColumnFeatures />
            </div>
        </div>
    );
}
