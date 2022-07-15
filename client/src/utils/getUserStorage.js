

export const GetUserStorage = () => {

    const user = {
        name: localStorage.getItem('name'),
        desk: localStorage.getItem('desk')
    }
    return user;
}