import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8bef8d39f7c24d319aeb413c234f9920'
    }
})