import {Home,About,Contact} from "./components/pages"

export default function Router({page}){
    switch(page){
        case "Home":
            return <Home/>;
        case "About":
            return <About/>;
        case "Contact":
            return <Contact/>;
        default:
            break;
    }
}