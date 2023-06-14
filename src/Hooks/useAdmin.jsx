
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const {user} = useContext(AuthContext);
    
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axios(`https://athletic-excel-server.vercel.app/users/admin/${user?.email}`);
            console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;