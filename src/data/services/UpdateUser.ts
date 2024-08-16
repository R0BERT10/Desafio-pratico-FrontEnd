import { options } from "../../util/CreateOptionsForFetch"
import { Result } from "../../util/ResultClassHandle"
import User from "../entities/User"

export interface UpdateAccountPropsDate {
    user: string
    name: string
}

const link = "https://desafio-pratico-orquestre-back-end.vercel.app"
export default class UpdateAccount {
    async execute(data: UpdateAccountPropsDate): Promise<Result<User>> {
        try {
            const response = await fetch(`${link}/account:updateProfile`, options.POST({
                user: data.user, name: data.name
            }))
            const responseJson = await response.json()
            if (response.ok) {
                const { uid, user, name, email,  } = responseJson
                return Result.ok<User>( new User(
                    uid, user, name, email
                ))
            }
            return Result.fail({
                messageResponse:`authError:${responseJson.message}`,
                httpCodeResponse: responseJson.code,
                functionOriginError:`UpdateAccount: execute({${data})`}
            )

        } catch (error) {
            const err = error as Error
            return Result.fail({
                messageResponse:`Exception:${err.message}`,
                httpCodeResponse:0,
                functionOriginError:`UpdateAccount: execute(${data})`
            })
        }
    }
}