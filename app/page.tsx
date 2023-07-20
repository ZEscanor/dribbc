import { ProjectInterface } from "@/common.types"
import { fetchAllProjects } from "@/lib/actions"

import ProjectCard from "../components/ProjectCard";

type ProjectSearch = {
    projectSearch:  {
        edges: {node: ProjectInterface}[];
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;

        }
    }
}

const Home = async () => {

   const data = await fetchAllProjects() as ProjectSearch;

    const projectsToDisplay = data?.projectSearch?.edges || [];

    

    // if(projectsToDisplay.length === 0){
        
    //     return (
    //         <section className="flexStart flex-col paddings">
    //             Categories
    //             <p className="no-result-text text-center">
    //                 No projects found, Create THEM

    //             </p>
    //         </section>
    //     )
    // }


    return (
        <section className="
        flex-start flex-col
        paddings mb-16
        ">
          <h1>Categories </h1> 
         {/* <section className="projects-grid" >
            {
                projectsToDisplay.map(({ node}: {node: ProjectInterface}) => (
                  <ProjectCard/>
                )

                 )
            }

         </section> */}
         <h1> Load More</h1>
        </section>
    )
}

export default Home
