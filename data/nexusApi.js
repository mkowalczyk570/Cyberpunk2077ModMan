import "dotenv/config"


const API_KEY = process.env.NEXUS_API_KEY
const API_HEADER = {apikey: API_KEY}


export const getModInfo = async (modId) => {
    const API_URI = "https://api.nexusmods.com/v1/games/cyberpunk2077/mods/"
    const URL = API_URI + modId 
    let res = await fetch(
        URL,
        {headers: API_HEADER},
        {method: "GET"}
    )
    return res
}

export const getModFileIds = async (modId) => {
    const API_URI = "https://api.nexusmods.com/v1/games/cyberpunk2077/mods/"
    const URL = API_URI + modId + "/files"
    let res = await fetch(
        URL,
        {headers: API_HEADER},
        {method: "GET"}
    )
    const body = await res.json()
    const files = body.files
    let ids = []
    files.forEach((file) => {
        ids.push(file.id[0])
    })

    return ids
}

export const generateDownloadLinks = async (modId, fileIds) => {
    const API_URI = "https://api.nexusmods.com/v1/games/cyberpunk2077/mods/"
    let links = []
    for(let i = 0; i < fileIds.length; i++){
        const URL = API_URI + modId + "/files/" + fileIds[i] + "/download_link" 
        let res = await fetch(
        URL,
        {headers: API_HEADER},
        {method: "GET"}
        )
        console.log(res)
    }
    return
}

