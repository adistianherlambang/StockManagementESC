export interface LocalUser {
    username: string
    password: string
    userId: string
}

export const users: LocalUser[] = [
    {username: 'usn1', password: 'pass1', userId: 'uid1'},
    {username: 'usn2', password: 'pass2', userId: 'uid2'}
]