import NavBar from "../../components/NavBar"
import { useLocation } from "react-router-dom"
import { LocationType } from "../../types/launchTypes";

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const location = useLocation() as LocationType;
    const bgClass = location.pathname === '/' ? 'bg-custom-bg-home' : 'bg-black';

    return (
        <div className={`min-h-svh ${bgClass} bg-cover flex flex-col`}>
            <NavBar />
            { children }
        </div>
    )
}