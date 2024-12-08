" use client"

const url = "https://jsonplaceholder.typicode.com/posts"
 
export const sampleData= async()=>{
    const response = await fetch(url);
    return response.json()
}

const page = async() => {

    const data = await sampleData()
    console.log("Checking for sampledata", data)

  return (
    <div>
        <h1>
            User Data
        </h1>
    </div>
  )
}

export default page