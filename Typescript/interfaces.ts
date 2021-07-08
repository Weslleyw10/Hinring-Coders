interface User {
    name: string,
    lastname: string,
    address?: string
}

function getUser(): User {
    return {
        name: 'Weslley',
        lastname: ''
    }
}