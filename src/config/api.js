import axios from "axios";

const api = axios.create({
  baseURL: "https://moviesapi.ir/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
     // Handle successful responses (like 2xx status codes normally)  
     if (response.status === 201) {  
        console.log('Resource created:', response.data);  
    } else if (response.status >= 300 && response.status < 400) {  
        console.warn('Redirection response:', response.status);  
    }  
    return response.data;
  },
  (error) => {
     // Handle response errors  
     if (error.response) {  
        switch (error.response.status) {  
            case 404:  
                console.error('Error 404: Not Found', error.response.data);  
                break;  
            case 400:  
                console.error('Error 400: Bad Request', error.response.data);  
                break;  
            case 401:  
                console.error('Error 401: Unauthorized', error.response.data);  
                break;  
            case 403:  
                console.error('Error 403: Forbidden', error.response.data);  
                break;  
            case 500:  
                console.error('Error 500: Internal Server Error', error.response.data);  
                break;  
            // Add more status codes as needed  
            default:  
                console.error(`Error ${error.response.status}:`, error.response.data);  
        }  
    } else if (error.request) {  
        // The request was made but no response was received  
        console.error('No response received:', error.request);  
    } else {  
        // Something happened in setting up the request  
        console.error('Error:', error.message);  
    }  
    return Promise.reject(error);
  }
);

export default api