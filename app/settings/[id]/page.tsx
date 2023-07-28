import { UserProfile } from '@/common.types'
import Modal from '@/components/Modal'
import UserForm from '@/components/UserForm'
import { getUser, updateUser } from '@/lib/actions'
import { getCurrentUser } from '@/lib/session'
import { getSession } from 'next-auth/react'

import React from 'react'

type Props = {
    params: {
        id: string,
    }
}

const UserSettings = async ({
    params
} : Props) => {

    
const session = await getCurrentUser();
console.log(session, 'session')
const user = await getUser(session?.user?.email) as {user: UserProfile}

   

  return (
    <Modal>
        <div className='
        flexCenter
        flex-col
        w-full
        max-w-4xl
        gap-5
        paddings

        '>
            <p>Settings</p>
            <UserForm
            type='update'
            session={session}
            user={user?.user}

            />


        </div>
    </Modal>
  )
}

export default UserSettings