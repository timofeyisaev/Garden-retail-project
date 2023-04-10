

export const addPhone = (phone) => async (dispatch) => {
    const link = 'http://localhost:3333/sale/send';

    const resp = await fetch(link, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(phone)
    })
    const data = await resp.json();
    console.log("Success:", data);
    dispatch(data);
    

}