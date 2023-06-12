import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fdd3215d09bb4c1f86f6139552c866e6'
    }
})