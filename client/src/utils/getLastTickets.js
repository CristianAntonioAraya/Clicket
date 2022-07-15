

export const getLastTickets = async () => {

    const resp = await fetch('http://localhost:4000/lastTickets')
    const data = await resp.json();

    return data.lasts

}