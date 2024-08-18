import { options } from "../../util/CreateOptionsForFetch"
import { Result } from "../../util/ResultClassHandle"


export interface DeleteProfilePropsDate {
    idToken: string
}

const link = "https://desafio-pratico-orquestre-back-end.vercel.app"
export default class DeleteProfile {
    async execute({idToken}: DeleteProfilePropsDate): Promise<Result<Boolean>> {
        try {
            const response = await fetch(`${link}/account:deleteProfile`, options.POST({idToken}))
            if (response.ok) {
                return Result.ok(true)
            }
            const responseJson = await response.json()
            return Result.fail({
                messageResponse:`authError:${responseJson.message}`,
                httpCodeResponse: responseJson.code,
                functionOriginError:`DeleteProfile: execute({${idToken})`}
            )

        } catch (error) {
            const err = error as Error
            return Result.fail({
                messageResponse:`Exception:${err.message}`,
                httpCodeResponse:0,
                functionOriginError:`DeleteProfile: execute(${idToken})`
            })
        }
    }
}