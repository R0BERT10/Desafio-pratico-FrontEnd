import { options } from "../../util/CreateOptionsForFetch"
import { Result } from "../../util/ResultClassHandle"
import User from "../entities/User"

export interface SingInAccountPropsDate {
    email: string
    password: string
}

const link = "https://desafio-pratico-orquestre-back-end.vercel.app"
export default class SingInAccount {
    async execute(data: SingInAccountPropsDate): Promise<Result<User>> {
        try {
            const response = await fetch(`${link}/account:signInWithEmailAndPassword`, options.POST({
                email: data.email, password: data.password
            }))
            const responseJson = await response.json()
            if (response.ok) {
                const { idToken, refreshToken, uid, user, name, email,  } = responseJson
                return Result.ok<User>( new User(
                    idToken, refreshToken, uid, user, name, email
                ))
            }
            return Result.fail({
                messageResponse:`authError:${responseJson.message}`,
                httpCodeResponse: responseJson.code,
                functionOriginError:`SingInAccount: execute({${data})`}
            )

        } catch (error) {
            const err = error as Error
            return Result.fail({
                messageResponse:`Exception:${err.message}`,
                httpCodeResponse:0,
                functionOriginError:`SingInAccount: execute(${data})`
            })
        }
    }
}