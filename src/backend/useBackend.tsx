import { useDispatch } from "react-redux";
import { changePager, setErrorMSG } from "./backendSlice";

const useBackend = () => {

  const dispatch = useDispatch();

    const throwError = (errorNr: number) => {
      console.log(errorNr);
      dispatch(changePager("Error"))
      dispatch(setErrorMSG(errorNr))
    }

    return {
        throwError
    }
}

export default useBackend