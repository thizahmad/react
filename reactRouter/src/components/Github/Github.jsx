import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // we will use useLoader hook to optimize the fetch call(api call), while our cursor is on the github button fetch call is made
    // const [data, setData] = useState("")
    // useEffect(() => {
    //     fetch('https://api.github.com/users/thizahmad')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" className="w-50 h-50"/></div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/thizahmad')
    return response.json()
}