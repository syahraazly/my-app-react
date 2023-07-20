import axios from 'axios';

const searchImage = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID cCeuYtXkD6KBAxJqKxRWqm8RWsxVsIMj1aMALPHQfTk'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImage;