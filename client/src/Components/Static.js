import Header from "./Header";
import { Outlet } from "react-router-dom";


export default function Static(){
    return(
        <main>
            <Header />
            <Outlet />
        </main>
    )
    
}