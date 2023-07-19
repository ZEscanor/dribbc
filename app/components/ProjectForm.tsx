"use client"

import { SessionInterface } from "@/common.types"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import FormField from "./FormField"
import { categoryFilters } from "@/constants"
import CustomMenu from "./CustomMenu"
import Button from "./Button"
import { createNewProject, fetchToken } from "@/lib/actions"
import { useRouter } from "next/navigation"

type Props = {
  type: string,
  session: SessionInterface,
}

const ProjectForm = ({type, session} : Props) => {

  const router = useRouter();

const [loading, setLoading] = useState(false);

const [form, setForm] = useState({
  title: '',
  description: '',
  liveSiteUrl: '',
  githubUrl: '',
  image: '',
  category: '',
});
  
  const handleFormSubmit = async (e:React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const {token} = await fetchToken();
    try{
      if(type === 'create'){
        await createNewProject(form,session?.user?.id, token);

        router.push('/');



      }
    }catch(err){
      console.log(err);
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
          onChange={handleChangeImage}
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
      state = {form.category}
      filters = {categoryFilters}
      setState = {(value) => handleStateChange('category', value)}
      
      
      />

    </form>
  )
}

export default ProjectForm