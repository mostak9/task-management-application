import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: '',
})

const useAxiosPublic = () => {
    return axios;
};

export default useAxiosPublic;