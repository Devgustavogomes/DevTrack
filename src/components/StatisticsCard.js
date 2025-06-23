import getStatistics from "@/services/Gitstatistics"
import Image from "next/image"
import Link from "next/link"
export default async function StatisticsCard({ name }) {
    try {
        const statistics = await getStatistics(name.user)
        console.log(statistics)
        if (statistics === undefined) {
            return (
                <div className="flex flex-col justify-center items-center p-3">
                    <h1 className="text-gray-50 text-4xl p-3">Usuário não encontrado</h1>
                    <Link href='/' className="text-gray-50 text-xl border-1 rounded-2xl p-2 border-githover hover:bg-githover">Voltar</Link>
                </div>
            )
        }
        return (
            <section className="text-gray-50  flex flex-col items-center justify-center  max-w-sm sm:min-w-xl ">
                <Image width={240} height={240} alt="avatar github" className="rounded-full" src={`${statistics.avatar_url}`} priority></Image>
                <h1 className="text-xl text-gray-50 p-2">{`${statistics.login}`}</h1>
                <h1 className="text-xs text-gray-50 p-2">{`${statistics.bio}`}</h1>
                <div className="grid grid-cols-2 grid-rows-3 min-w-xs p-2 text-center gap-y-3">
                    <h1 className="text-gray-50"> Seguidores:<br /><span className="text-sky-400">{statistics.following}</span></h1>
                    <h1 className="text-gray-50">Seguindo:<br /><span className="text-green-400">{statistics.followers}</span></h1>
                    <h1 className="text-gray-50">Repositórios públicos:<br /><span className="text-slate-300">{statistics.public_repos}</span></h1>
                    <h1 className="text-gray-50">Localização:<br /><span className="text-yellow-500">{statistics.location}</span></h1>
                    <h1 className="text-gray-50">Desde:<br /><span className="text-gray-400">{new Date(statistics.created_at).toLocaleDateString('pt-BR')}</span></h1>
                    <h1 className="text-gray-50">Ultima atualização:<br /><span className="text-gray-400">{new Date(statistics.updated_at).toLocaleDateString('pt-BR')}</span></h1>
                </div>
                <a href={statistics.html_url}>Visitar Perfil</a>

            </section>
        )
    } catch (error) {
        return <h1>{error.message}</h1>
    }
}