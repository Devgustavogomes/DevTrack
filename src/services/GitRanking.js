const baseUrl = `https://api.github.com/users/`
export default async function getRanking(name) {
    try {
        const request = await fetch(`${baseUrl}${name.user}/repos`, {
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
            },
            next: {
                revalidate: 60
            }
        })

        if (!request.ok) {
            throw new Error(`Falha na solicitação de commits`)
        }
        const response = await request.json()

        const promises = response.map(element =>
            fetch(`https://api.github.com/repos/${name.user}/${element.name}/commits?author=${name.user}`, {
                headers: {
                    'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
                },
                next: {
                    revalidate: 60
                }
            })
        );
        const results = await Promise.all(promises)
        const commitsArrays = await Promise.all(results.map(async res => {
            try {
                const data = await res.json();
                return Array.isArray(data) ? data : [];
            } catch {
                return [];
            }
        }));
        const totalCommits = commitsArrays.reduce((acc, commits) => acc + commits.length, 0);



        const requestIssue = await fetch(`https://api.github.com/search/issues?q=author:${name.user}+type:issue+state:open`, {
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
            },
            next: {
                revalidate: 60
            }
        })

        if (!requestIssue.ok) {
            throw new Error(`Falha na solicitação de issue`)
        }

        const responseIssue = await requestIssue.json()
        const totalIssues = responseIssue.total_count



        const requestPr = await fetch(`https://api.github.com/search/issues?q=author:${name.user}+type:pr+state:open`, {
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
            },
            next: {
                revalidate: 60
            }
        })

        if (!requestPr.ok) {
            throw new Error(`Falha na solicitação de PRs`)
        }

        const responsePr = await requestPr.json()
        const totalPrs = responsePr.total_count


        return (
            {
                totalCommits: totalCommits,
                totalIssues: totalIssues,
                totalPrs: totalPrs
            }
        )
    } catch (error) {
        console.log(error.message)
    }
}