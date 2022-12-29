export const setAuthToken = (user) =>{
    const currentUser = {
        email: user.email
    }

    // save user in db and get token

    fetch(`https://social-media-server-gamma.vercel.app/user/${user?.email}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json())
    .then(data =>{

        // save token in local storage 
        localStorage.setItem('aircnc-token', data.token)
    })
}