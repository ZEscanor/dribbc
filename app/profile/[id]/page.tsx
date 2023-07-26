import { ProjectInterface } from '@/common.types'
import ProfilePage from '@/components/ProfilePage'
import {fetchAllProjects, getUser} from '@/lib/actions'


type Props = {
    params: {
        id: string
    }
}

const UserProfile = async ({
    params: {id}
}: Props) => {


     
     const result = await fetchAllProjects() as {
        projectSearch: {
            edges: {node: ProjectInterface}[];
        }
    }
    const decode_id = decodeURIComponent(id) // params has spaces so decode the %20
    
    const filteredProjects = result?.projectSearch?.edges.filter(({node}: {node: ProjectInterface} ) => node?.createdBy === decode_id);
    
    const currentEmail = filteredProjects[0]?.node.creatorEmail;
    const  currentImage = filteredProjects[0]?.node.creatorImage;
  


    if(!result){
        return (
            <div>
            failed try again
            </div>
        )
    }
  return (
    <ProfilePage
    creatorName={decode_id}
    creatorImage={currentImage}
    creatorEmail={currentEmail}
    relatedProjects={filteredProjects}
    />
  )
}

export default UserProfile