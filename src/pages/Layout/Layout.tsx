import NavBar from "../../components/NavBar"

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-svh bg-custom-bg-home bg-cover ">
            <NavBar />
            { children }
        </div>
    )
}