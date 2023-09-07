import { useEffect } from 'react'

import { UserInfo } from "../../types/UserTypes"

type UserProps = {
    setCurrentUser: React.Dispatch<React.SetStateAction<UserInfo>>
}

export default function LoginPage (User: UserProps) {

    useEffect(() => {
        fetch('/api/login')
          .then((response) => {
            return response.json
          })
      })

    return (
        <></>
    )
};