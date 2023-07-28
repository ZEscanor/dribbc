"use client"

import {SessionInterface, UserProfile } from "@/common.types"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import FormField from "./FormField"
import { categoryFilters } from "@/constants"
import CustomMenu from "./CustomMenu"
import Button from "./Button"
import { createNewProject, fetchToken, updateProject, updateUser } from "@/lib/actions"
import { useRouter } from "next/navigation"

type Props = {
  type: string,
  session: SessionInterface,
  user: UserProfile
}
const UserForm = ({type, session, user} : Props) => {

  const router = useRouter();

const [loading, setLoading] = useState<boolean>(false);

const [form, setForm] = useState({
    name: user?.name || '',
    description : user?.description || '',
    avatarUrl: user?.avatarUrl || '',
    githubUrl: user?.githubUrl || '',
    linkedinUrl: user?.linkedinUrl || '',
});
  
  const handleFormSubmit = async (e:React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const {token} = await fetchToken();
    try{
        await updateUser(session?.user?.id, form, token);
        router.push(`/`)
      
    }catch(err){
        console.log(err)
        alert('Something went wrong, try again')
      
    }
    finally{
      setLoading(false);
    }
  };


  const handleStateChange = (fieldName:string, value:string) => {
    setForm((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));

  };
  return (
    <form
    onSubmit={handleFormSubmit}
    className="flexStart form"
    >
      <div className="flexStart form_image-container">
         <label htmlFor="poster" className="flexCenter form_image-label">
           {!form.avatarUrl  && 'Choose a poster for your project'}
          </label>
          <input 
          type="file"
          id="image"
          accept="image/*"
          required = {type === 'create' ? true : false}
          className="form_image-input"
          onChange={(e) => handleStateChange('avatarUrl', e.target.value)}
          />
          {form.avatarUrl && <Image 
          src={form?.avatarUrl} 
          className="sm:p-10 object-containvz-20"
          alt="project poster" width={200} height={200} />}

      </div>
     <FormField
         title="Your Name"
            state = {form.name}
            placeholder="John Doe"
            setState = {(value) => handleStateChange('name', value)}
        />



      <FormField
       title="Your Description"
       state = {form.description}
       placeholder="Software Engineer"
       setState = {(value) => handleStateChange('description', value)}

      />
      
      <FormField
      type="url"
       title="Linkedin Url"
       state = {form.linkedinUrl}
       placeholder="https://flexi.com"
       setState = {(value) => handleStateChange('linkedinUrl', value)}

      />
      <FormField
      type="url"
       title="Github Url"
       state = {form.githubUrl}
       placeholder="http://"
       setState = {(value) => handleStateChange('githubUrl', value)}

      />
     
      <div className="flexStart w-full">
       <Button
       title= {loading ? 
        `${type === 'create' ? "Creating": 'Editing'}` : 
        `${type === 'create'? 'Create': 'Edit'}`}
       type="submit"
       leftIcon = {loading ? "" : '/plus.svg'}
       loading = {loading}
       
       />
      </div>
    </form>
  )
}

export default UserForm