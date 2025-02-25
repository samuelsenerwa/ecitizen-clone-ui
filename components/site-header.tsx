import { Languages, PersonStanding } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
    return (
        <header className="w-full max-w-[1440px] mx-auto flex h-20 items-center justify-between px-4 sm:px-8 md:px-24">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/ecitizen-logo.png"
                    alt="Republic of Kenya Coat of Arms"
                    width={200}
                    height={150}
                    className="h-20 w-auto md:h-24"
                />
            </Link>
            <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <div className="flex items-center justify-center gap-2 rounded-full bg-blue-500 h-8 w-8 sm:h-10 sm:w-10 p-1.5">
                    <Languages className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex items-center justify-center gap-2 rounded-full bg-blue-500 h-8 w-8 sm:h-10 sm:w-10 p-1.5">
                    <PersonStanding className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
            </div>
        </header>
    );
}
