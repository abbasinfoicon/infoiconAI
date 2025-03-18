import Cookies from 'js-cookie';

const FetchData = async ({ url, method, body, formdata }) => {
    const token = Cookies.get("access_token");

    // Initialize the headers object
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    // Conditionally set the Content-Type header if needed
    if (!formdata || method === 'DELETE') {
        headers['Content-Type'] = "application/json";
    }

    return await fetch(`${process.env.BASE_URL}/${url}`, {
        method: method,
        headers: headers,
        body: body ? JSON.stringify(body) : formdata || null,
    });
};

export default FetchData;
