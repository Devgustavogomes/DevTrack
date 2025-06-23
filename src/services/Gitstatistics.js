const baseUrl = `https://api.github.com/users/`
export default async function getStatistics(name) {
    try {
        const request = await fetch(`${baseUrl}${name}`, {
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
            },
            next: {
                revalidate: 60
            }
        })
        if (!request.ok) {
            throw new Error(`Falha na solicitação`)
        }
        const response = await request.json()
        return response
    } catch (error) {
        console.log(error.message)
    }
}

