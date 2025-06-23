import Loading from "@/components/Loading"
import SectionRank from "@/components/SectionRank"
import StatisticsCard from "@/components/StatisticsCard"
import Link from "next/link"
import { Suspense } from "react"

export default async function User({ params }) {
    const name = await params
    try {
        return (
            <main className="flex flex-col items-center p-5 bg-gitcard rounded-2xl border-1 border-gitbutton">
                <Suspense fallback={<Loading />}>
                    <StatisticsCard name={name} />
                </Suspense>
                <Suspense fallback={<Loading />}>
                    <SectionRank name={name} />
                </Suspense>
                <Link href={'/'} className="text-gray-50 text-xl">Voltar para Home</Link>

            </main>
        )
    } catch (error) {
        return (
            <div>{`${error.message}`}</div>
        )
    }
}