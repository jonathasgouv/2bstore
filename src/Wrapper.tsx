import { useLayoutEffect, FC } from "react";
import { useLocation } from "react-router-dom"

interface IWrapper {
    children: any
}

const Wrapper: FC<IWrapper> = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return children
}

export default Wrapper