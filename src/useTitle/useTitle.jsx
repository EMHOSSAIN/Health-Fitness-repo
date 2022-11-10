import { useEffect } from "react"

const useTitle=title=>{
    useEffect( ()=>{
        document.title=`${title}- Health & Fitness`
    } ,[title])
}
export default useTitle