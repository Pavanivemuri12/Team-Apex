import LaptopDiscount from "./LaptopDiscount";
export default function LaptopLayout({
    children
}:{children:React.ReactNode})
{
    return(
        <div>
            <LaptopDiscount/>
        {children}
        </div>
        
    )
}