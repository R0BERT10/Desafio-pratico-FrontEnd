import { options } from "../../util/CreateOptionsForFetch"
import { Result } from "../../util/ResultClassHandle"
import User from "../entities/User"

export interface SingUpAccountPropsDate {
    user: string
    name: string
    email: string
    password: string
}

const link = "https://desafio-pratico-orquestre-back-end.vercel.app"
export default class SingUpAccount {
    async execute(data: SingUpAccountPropsDate): Promise<Result<User>> {
        try {
            const response = await fetch(`${link}/account:signUp`, options.POST({
                user: data.user, name: data.name, email: data.email, password: data.password
            }))
            const responseJson = await response.json()
            if (response.ok) {
                const { idToken, refreshToken, uid, user, name, email,  } = responseJson
                return Result.ok<User>( new User(
                    idToken, refreshToken, uid, user, name, email
                ))
            }
            return Result.fail({
                messageResponse:`authError:${responseJson.error.message}`,
                httpCodeResponse: responseJson.error.code,
                functionOriginError:`SingUpAccount: execute({${data})`}
            )

        } catch (error) {
            const err = error as Error
            return Result.fail({
                messageResponse:`Exception:${err.message}`,
                httpCodeResponse:0,
                functionOriginError:`SingUpAccount: execute(${data})`
            })
        }
    }
}