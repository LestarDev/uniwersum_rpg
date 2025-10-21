import { useSelector } from "react-redux"
import type { backendInterface } from "../backend/backendSlice"

const ErrorPage = () => {

    const backend = useSelector((state: any)=>state.backend) as backendInterface;

    return <h1>
        {backend.errorMSG}
    </h1>
}

export default ErrorPage