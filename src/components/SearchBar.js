export default function SearchBar() {
    return (
        <div>
            <form className="flex flex-col text-gray-50 gap-5 items-center">
                <input type="text" placeholder="Pesquisar usuário..." maxLength={40} className="bg-github border-1 border-gitbutton rounded-2xl p-2 min-w-[100%] " />
                <button className="bg-gitbutton min-w-[40%] rounded-2xl p-2 hover:bg-githover">Ver perfil</button>
            </form>
        </div>
    )
}