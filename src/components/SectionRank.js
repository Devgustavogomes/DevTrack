import getRanking from "@/services/GitRanking";

export default async function SectionRank({ name }) {
    try {
        const ranking = await getRanking(name)
        return (
            <section className="flex flex-col justify-center items-center p-5 text-gray-50 gap-y-3">
                <h1 className=" text-2xl"> Ranking de contribuições</h1>
                <div className="flex flex-col gap-y-5 items-center justify-center">
                    <h3 className="text-purple-400">Commits: {ranking.totalCommits}</h3>
                    <h3 className="text-red-400">Issues: {ranking.totalIssues}</h3>
                    <h3 className="text-emerald-400">PRs: {ranking.totalPrs}</h3>
                </div>
            </section>
        )
    } catch (error) {
        console.log(error.message)
    }
}