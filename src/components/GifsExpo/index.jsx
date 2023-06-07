import { useEffect, useState } from "react"

const GifsExpo = ({ categories }) => {
    const [gifsList, setGifsList] = useState([])

    useEffect(
        () => {
            const getGifsList = async () => {
                const gifs = await Promise.all(categories.map(async (category) => {
                    const query = encodeURIComponent(category)
                    const apiKey = "LT2Nc768UU7sgFBTkQE16FJeCDAELLjX"
                    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&Limit=10`)
                    const gifsList = await response.json()
                    return gifsList
                }))
                let urlList = []
                console.log(gifs)
                gifs.forEach((gif) => {
                    const data = gif.data.map((item) => {
                        return item.images.fixed_width.url
                    })
                    urlList = [...urlList, ...data]
                })
                console.log(urlList)
                setGifsList([...urlList])
            }
            getGifsList()
        }
        ,
        [categories]
    )

    return (
        <>
            <h4>GIFSEXPO</h4>
            <ol>
                {
                    gifsList.map((url) => (
                        <li key={url}>{url}</li>
                    ))
                }
            </ol>
        </>

    )
}

export default GifsExpo