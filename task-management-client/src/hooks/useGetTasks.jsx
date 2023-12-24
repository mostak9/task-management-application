import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useGetTasks = ({status}) => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const {data, isLoading} = useQuery({
        queryKey: ['all tasks', user, status],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getTasks?email=${user?.email}&status={status}`)
            return res.data;
        }
    })

    return [data, isLoading];
};

export default useGetTasks;