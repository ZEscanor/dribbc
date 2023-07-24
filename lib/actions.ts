import { ProjectForm } from "@/common.types";
import { createProjectMutation, createUserMutation, deleteProjectMutation, getProjectByIdQuery, getProjectsOfUserQuery, getUserQuery, projectsQuery } from "@/graphql";
import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === "production";

const apiUrl = isProduction ?  process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '': "http://127.0.0.1:4000/graphql";
                                
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY  || "" : "1234567890";

const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);

export const fetchToken = async () => {
    try{
   const response = await fetch(`${serverUrl}/api/auth/token`);
    return response.json();
    }
    catch(error){
        throw error;
    }
}

export const uploadImage = async (imagePath: string) => {
    try{
         const response = await fetch(`${serverUrl}/api/upload`, {
            method: "POST",
            body: JSON.stringify({path: imagePath}),
        
         })
         return response.json();
    }
    catch(error){
        throw error;
    }

}

const makeGraphQLRequest = async (query: string, variables = {}) => {
try {
 
    return await client.request(query, variables);

}

catch (error){
    throw error;
}

}

export const getUser = (email: string) => {
    client.setHeader('x-api-key', apiKey)
    return makeGraphQLRequest(
        getUserQuery, 
        {email}
    )
     
}


export const createUser = (name:string, email:string, avatarUrl:string) => {
    
    client.setHeader('x-api-key', apiKey)
      const variables = {
        input: {
            name,
            email,
            avatarUrl,
        }
      }
    return makeGraphQLRequest(createUserMutation, variables)
    }







export const fetchAllProjects = async (category? : string , endcursor? : string ) => {
    client.setHeader("x-api-key", apiKey);

    return makeGraphQLRequest(projectsQuery, {
        category,
        endcursor
    })

}

export const createNewProject = async (form: ProjectForm,
    creatorId: string,
    creatorImage: string,
    creatorEmail: string,
     token: string
    ) => {
    const imageUrl = await uploadImage(form.image)
    

    

    if(imageUrl.url){
        client.setHeader("Authorization", `Bearer ${token}`)
        const variables = {
            input: {
                ...form,
                image: imageUrl.url,
               createdBy: creatorId,
               creatorImage: creatorImage,
               creatorEmail: creatorEmail
               
            }
        };
        return makeGraphQLRequest(createProjectMutation, variables)
    

}
    };


    export const getProjectDetails = (id: string) => {
       client.setHeader("x-api-key", apiKey);
         return makeGraphQLRequest(getProjectByIdQuery, {id}) 

    }

    // export const getUserProjects = (email: string, last?: number) => {
    //     client.setHeader("x-api-key", apiKey);
    //     console.log(email, "wfafapfnsoaf");
    //     console.log(last, "wfafapfnsoaf")
    //     makeGraphQLRequest(getProjectsOfUserQuery, {email, last}).then((data) => 
        
        
    //     ).catch((error) => console.log(error, "error")
    //     )
        
    //     //return makeGraphQLRequest(getProjectsOfUserQuery, {email, last})
    //    return {user: null}
    // }


    export const deleteProject = (id: string, token: string) => {
        client.setHeader("Authorization", `Bearer ${token}`)
        return makeGraphQLRequest(deleteProjectMutation, {id})
    }
  

