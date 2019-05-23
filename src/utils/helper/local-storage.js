export const insertSignIn = (user, token) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    localStorage.setItem('user', JSON.stringify(user)); // assuming ${user} is an object
    localStorage.setItem('token', token); // assuming ${token} is a string
}

export const getSignIn = () => {
    if (localStorage.getItem('token') == null) {
        return false;
    }

    return {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    }
}

export const clearSignIn = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}