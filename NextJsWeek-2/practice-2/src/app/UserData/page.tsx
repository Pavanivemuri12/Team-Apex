

const url = "https://jsonplaceholder.typicode.com/posts"
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
 
export const sampleData= async(): Promise<Post[]>=>{
    const response = await fetch(url);
    return response.json()
}

const page = async() => {

    const data = await sampleData()
    console.log("Checking for sampledata", data)

  return (
    <div>
       {data.map((item,i)=>{
        return(
           
            <div key={item.id}>
        {   `${i+1} - ${item.title}`}
            <hr/>
            </div>
           
        )
       })}
    </div>
  )
}

export default page