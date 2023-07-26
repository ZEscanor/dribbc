"use client"

import { ProjectInterface, SessionInterface } from "@/common.types"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import FormField from "./FormField"
import { categoryFilters } from "@/constants"
import CustomMenu from "./CustomMenu"
import Button from "./Button"
import { createNewProject, fetchToken, updateProject } from "@/lib/actions"
import { useRouter } from "next/navigation"

type Props = {
  type: string,
  session: SessionInterface,
  project?: ProjectInterface
}

const ProjectForm = ({type, session, project} : Props) => {

  const router = useRouter();

  //console.log(session?.user.avatarUrl)

const [loading, setLoading] = useState<boolean>(false);

const [form, setForm] = useState({
  title:project?.title || '',
  description:project?.description || '',
  liveSiteUrl:project?.liveSiteUrl || '',
  githubUrl:project?.githubUrl ||  '',
  image:project?.image || '',
  category: project?.category || '',
});
  
  const handleFormSubmit = async (e:React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const {token} = await fetchToken();
    try{
      if(type === 'create'){
         //console.log(form,session?.user, token)
        await createNewProject(form,
          session?.user?.name,
          session?.user?.image,
          session?.user?.email, 
          token);

        router.push('/');



      }
      if(type === 'edit'){
        await updateProject(form, project?.id as string, token);
        router.push('/')
      }
    }catch(err){
      alert(err)
    }
    finally{
      setLoading(false);
    }
  };


  const handleChangeImage = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];
    if(!file) return;

    if(!file.type.includes('image')){
      alert('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      handleStateChange('image', result);
  };
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
           {!form.image && 'Choose a poster for your project'}
          </label>
          <input 
          type="file"
          id="image"
          accept="image/*"
          required = {type === 'create' ? true : false}
          className="form_image-input"
          onChange={(e) => handleChangeImage(e)}
          />
          {form.image && <Image 
          src={form?.image} 
          className="sm:p-10 object-containvz-20"
          alt="project poster" width={200} height={200} />}

      </div>

      <FormField
       title="Title"
       state = {form.title}
       placeholder="Flexi"
       setState = {(value) => handleStateChange('title', value)}

      />
      <FormField
       title="Description"
       state = {form.description}
       placeholder="Showcase and discover creative work"
       setState = {(value) => handleStateChange('description', value)}

      />
      <FormField
      type="url"
       title="Website Url"
       state = {form.liveSiteUrl}
       placeholder="https://flexi.com"
       setState = {(value) => handleStateChange('liveSiteUrl', value)}

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

      <CustomMenu 
      title = "Category"
      state = {form?.category}
      filters = {categoryFilters}
      setState = {(value) => handleStateChange('category', value)}
      
      
      />

    </form>
  )
}

export default ProjectForm