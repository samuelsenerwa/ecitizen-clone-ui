import { Languages, PersonStanding } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
    return (
        <header className="w-[1440px] flex h-20 items-center justify-between px-24 mx-24">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/ecitizen-logo.png"
                    alt="Republic of Kenya Coat of Arms"
                    width={200}
                    height={150}
                    className="h-18 w-15"
                />
            </Link>
            <div className="ml-auto flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full bg-blue-500 h-8 w-8 px-2 py-1.5">
                    <Languages className="text-white" />
                </div>
                <div className="flex items-center gap-2 rounded-full bg-blue-500 h-8 w-8 px-2 py-1.5">
                    <PersonStanding className="text-white" />
                </div>
            </div>
        </header>
    )
}

