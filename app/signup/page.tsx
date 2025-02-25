import Link from "next/link"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { Check } from "lucide-react"

export default function SelectAccountPage() {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader />
            <div className="mx-auto max-w-[600px] px-6 py-12">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-gray-800">Select account type</h1>
                    <Link href="/" className="text-sm text-blue-600">
                        <span className="text-black">or</span> Sign in
                    </Link>
                </div>

                <div className="space-y-4">
                    <AccountTypeCard title="Citizen" description="For Kenyan Citizens" href="/register/citizen" />
                    <AccountTypeCard title="Resident" description="For Foreign Residents" href="/register/resident" />
                    <AccountTypeCard title="Refugee" description="For Refugees" href="/register/refugee" />
                    <AccountTypeCard title="Diplomat" description="For Diplomats within Kenya" href="/register/diplomat" />
                    <AccountTypeCard title="Foreigner" description="For Visitors to Kenya" href="/register/foreigner" />
                </div>
            </div>
        </div>
    )
}

function AccountTypeCard({ title, description, href }: { title: string; description: string; href: string }) {
    return (
        <Link href={href}>
            <Card className="group relative flex cursor-pointer flex-col space-y-1.5 border p-6 transition-colors hover:border-[#00a651] hover:bg-[#e6f7ef] mb-4">
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00a651]">
                        <Check className="h-4 w-4 text-white" />
                    </div>
                </div>
                <h3 className="font-medium text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </Card>
        </Link>
    )
}