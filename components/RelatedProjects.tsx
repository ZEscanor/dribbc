import { ProjectInterface, UserProfile } from "@/common.types";
import { fetchAllProjects, getUserProjects } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

type Props = {
   userId: string;
   projectId: string; 
}

const RelatedProjects = async({userId,projectId}: Props) => {
    //console.log(userId, typeof userId, 'userId')
//  const result = await getUserProjects(userId,4) as {
//     user? : UserProfile | null;
//  }

const result = await fetchAllProjects() as {
    projectSearch: {
        edges: {node: ProjectInterface}[];
    }
}

 console.log(result.projectSearch.edges, 'result')
 //const filteredProjects = result?.user?.projects?.edges.filter(({node}: {node: ProjectInterface} ) => node?.id !== projectId);
 const filteredProjects = result?.projectSearch?.edges.filter(({node}: {node: ProjectInterface} ) => node?.id !== projectId);


 if(filteredProjects?.length === 0 ){
    return null 
    }




  return (
    <section className="flex flex-col mt-32 w-full">
        <div className="flexBetween">
         <p className="text-base font-bold">
            {/* more By {result?.user?.name} */}
            More By {result?.projectSearch?.edges[0]?.node?.createdBy}
            </p>
            
            <Link href={`/profile/${result?.projectSearch?.edges[0]?.node?.createdBy}`}
            className="text-primary-purple font-semibold text-base"
            >
                View ALL
            </Link>

         
        </div>

        <div className="related_projects-grid">
         {
            filteredProjects?.map(({node}: {node: ProjectInterface}) => (
                <div className="flexCenter related_project-card drop-shadow-card">
                    <Link href={`/project/${node?.id}`}
                    className="flexCenter group relative w-full h-full"
                    >

                    <Image
                    src={node?.image}
                    alt="Project Image"
                    width={414}
                    height={314}
                    className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="hidden group-hover:flex related_project-card_title">
                     <p className="w-full">
                            {node?.title}
                     </p>
                    </div>
                    </Link>
                </div>
            )
         )}
        </div>

    </section>
  )
}

export default RelatedProjects