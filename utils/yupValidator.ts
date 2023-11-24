'use client'

import * as yup from 'yup'

export type ValidationError = {
  message: string
  path: string
}

type IError = {
  param: any
  value: string
}

type Props = {
  schema: yup.ObjectSchema<any>
  data: any
  setError: (errors: IError[]) => void
  onSuccess: (params?: any) => void
}

export const yupValidator = ({ schema, data, setError, onSuccess }: Props) => {
  return schema
    .validate(data, { abortEarly: false })
    .then(onSuccess)
    .catch(validationErrors => {
      const errors_list: IError[] = validationErrors?.inner?.map(
        ({ message, path }: ValidationError) => ({
          value: message,
          param: path
        })
      )

      setError(errors_list)
    })
}
