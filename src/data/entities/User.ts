
export default class User {
    constructor(
        public idToken?: string,
        public refreshToken?: string,
        public uid?: string,
        public user?: string,
        public name?: string,
        public email?: string
    ){}
}