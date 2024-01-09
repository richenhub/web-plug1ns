import Footer from "../components/nav/footer";
import Header from "../components/nav/header";

interface IRoute {
    children: React.ReactNode
}

const Route = ({ children }: IRoute) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Route;