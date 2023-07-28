import { ProjectInterface } from "@/common.types"
import { fetchAllProjects } from "@/lib/actions"

import ProjectCard from "../components/ProjectCard";
import Categories from "@/components/Categories";
import { type } from "os";
import LoadMore from "@/components/LoadMore";

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

type SearchParams = {
    category?: string;
    endcursor?: string;

}
type Props = {
    searchParams: SearchParams
}

const Home = async ({searchParams: {category, endcursor}}: Props) => {

  

     if(category === undefined || category === null){
        return (
            <section className="flexStart flex-col paddings">
                <Categories/>
            </section>
        )
     }



        let data = await fetchAllProjects() as ProjectSearch;

       
    
    if(category !== null || category !== undefined){
        if (category === 'All') {
        
            data = await fetchAllProjects() as ProjectSearch;
           
        } 
        else {
            //console.log(category)
    data = await fetchAllProjects(category, endcursor) as ProjectSearch;
   // console.log(data?.projectSearch?.edges[0],'data')
    }
    }
    const projectsToDisplay = data?.projectSearch?.edges || [];

   // console.log(projectsToDisplay[0],"78")

   
    if(projectsToDisplay?.length === 0 || data === null){

        
        return (
            <section className="flexStart flex-col paddings">
                <Categories/>
                <p className="no-result-text text-center">
                    No projects found, Create THEM

                </p>
            </section>
        )
    }

    const pagination = data?.projectSearch?.pageInfo;

    return (
        <section className="
        flex-start flex-col
        paddings mb-16
        ">
          <Categories/> 
         <section className="projects-grid" >
            {
                
                projectsToDisplay.map(({ node}: {node: ProjectInterface}) => (
                    
                  <ProjectCard
                  key={node?.id}
                  id={node?.id}
                  image={node?.image}
                  title={node?.title}
                  createdBy={node?.createdBy}
                creatorImage={node?.creatorImage}
                creatorEmail={node?.creatorEmail}
                creator={node?.creator?.id}

                  />
                )

                 )
            }

         </section>
         <LoadMore
         startCursor={pagination?.startCursor}
         endCursor={pagination?.endCursor}
            hasPreviousPage={pagination?.hasPreviousPage}
            hasNextPage={pagination?.hasNextPage}

         
         />
        </section>
    )
}

export default Home
