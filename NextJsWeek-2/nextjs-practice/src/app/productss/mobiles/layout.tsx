import MobileDiscount from "./mobileDiscount"
export default function MobileLayout({
    children
}:{
    children:React.ReactNode
}){
    return(
    <div>
        <MobileDiscount/>
        {children}
    </div>
)
}
