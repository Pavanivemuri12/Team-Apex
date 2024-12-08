import Image from "next/image";

const url = "https://backend-nodejs-suby.onrender.com/vendor/all-vendors"

type Vendor={
    id:string;
    username:string;
    firm:{image:string}[];
    [key:number]: string;
};

type VendorResponse ={
    vendors: Vendor[];
}

export const sampleData = async(): Promise<VendorResponse>=>{
    const response =await fetch(url);
    return response.json()
}

const page = async()=>{

    const data:VendorResponse = await sampleData()
    const vendors:Vendor[] = data.vendors
    console.log("checking for sampledata2", data)

    const imageBaseUrl = "https://backend-nodejs-suby.onrender.com/uploads/"

    return(
        <div>
            {vendors.map((vendor,i) => (
        <div key={i}>
          <h2>{vendor.username}</h2>
          <hr />
          {vendor.firm.map((firmItem, index) => (
            <div key={index}>
              <Image
                src={`${imageBaseUrl}${firmItem.image}`}
                alt="not avail"
                width={200}
                height={200} // Specify width and height
              />
            </div>
          ))}
        </div>
      ))}
        
            
        </div>
    )
}
export default page