import { getCurrentUser } from "@/lib/session"
import Modal from "../components/Modal"
import ProjectForm from "../components/ProjectForm"



const CreateProject = async () => {
    const session = await getCurrentUser();

    if (!session?.user) {
        return {
            redirect: {
             'destination': '/'
            },
        }
    };
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