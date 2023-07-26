import { getCurrentUser } from "@/lib/session"
import Modal from "../../components/Modal"
import ProjectForm from "../../components/ProjectForm"
import {redirect} from "next/navigation";



const CreateProject = async () => {
    const session = await getCurrentUser();
    // console.log(session,'weop')

    if (!session?.user) redirect('/');
  return (
    <Modal>
        <h3>
            Create Project
        </h3>
        <ProjectForm type="create" session={session}/>
        
        </Modal>
  )
}


export default CreateProject