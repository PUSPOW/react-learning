import React from 'react'
import * as Yup from 'yup';
import {
  Card,
  Input,Button,
  Typography,
  Radio,
  Checkbox,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { Formik, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { nanoid } from '@reduxjs/toolkit';
import { addUser } from './userSlice';

 
const AddForm = () => {



// const kios = [{id:1, label:'lio'},{id:2, label:'sio'}];

// const m = kios.map((k) => {
//   return k.id === 1 ? { id: 1, label: 'mio'} :k;
// });

// console.log(m);

//   const jiso = ['l','m','c'];

//   jiso.splice(2,1);
  
//   console.log(jiso);
  
  



const dispatch = useDispatch();

const nav = useNavigate();

  const userSchema =  Yup.object({

    username: Yup.string()
      .required('username rakh jatha'),
    email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,'puspow').required('Required'),
    hobbies: Yup.array().min(1).required(),
    image: Yup.mixed().test( 'fileType', 'invalid image', (e) =>{
    const filesType = ["image/jpeg","image/jpg","image/png" ];
    return filesType.includes(e.type); 
    }).required()
  });

  const { handleChange, handleSubmit, values, setFieldValue, errors, touched} = useFormik({
     initialValues: {
      username: '',
      email: '',
      gender: '',
      hobbies: [],
      msg: '',
      country: '',
      imageReview: null,
      // image: null
     },
    
    onSubmit: (val) => {
      dispatch(addUser({ ...val, id: nanoid() }));
      nav(-1);
     

    },

    // validationSchema: userSchema

  });
  



  return (
    <div className='max-w-[400px] p-4'>

<Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Add your detail
      </Typography>
      
      <form  onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 space-y-4">
        

          <div>
          <Input
          error={errors.username && touched.username}
          name='username'
          onChange={handleChange}
          value={values.username}
          label='Username'
          
          />
          {errors.username && touched.username &&<p className='text-pink-600'>{errors.username}</p>}
        </div> 

        <div>
          <Input
           error={errors.email && touched.email}

          name='email'
          onChange={handleChange}
          value={values.email}
          label='Email'
          />
          {errors.email && touched.email &&
          <p className='text-pink-600'>{errors.email}</p>}


          <div>
            <h1>Select your gender</h1>
           <div className="flex gap-10">
            {redData.map((rad,i) => {
              return <Radio 
              key={i}
              name="gender"
              onChange={handleChange}
               label={rad.label}
               value={rad.value}
               color={rad.color} />

            })}
          </div>
          </div>




          <div className="w-72">
      <Select label="select country" name='country' onChange={(e) => setFieldValue ('country',e)}>
        <Option value='nepal'>Nepal</Option>
        <Option value='india'>India</Option>
        <Option value='china'>China</Option>
       
      </Select>
    </div>



          <div>
          <h1>Select your hobbies</h1>
          <div className="flex w-max gap-4">
          {checkData.map((check,i) => {
              return <Checkbox
              key={i}
              name="hobbies"
              onChange={handleChange}
               label={check.label}
               value={check.value}
               color={check.color} />

            })}
    </div>
    {errors.hobbies && touched.hobbies &&
          <p className='text-pink-600'>{errors.hobbies}</p>}

    </div>




    <div className="w-96">
      <Textarea label="Message"
      name='msg'
      value={values.msg}
      onChange={handleChange} />
    </div>
          

    <div className="w-96 my-4" >
      <h1>Please select an image</h1>
      <Input
      name='image'
      onChange={(e) => {
      const file = e.target.files[0];
      // setFieldValue('image',file)
          setFieldValue('imageReview',URL.createObjectURL(file)) 
         }}
        type='file'
       />
      {values.imageReview && <img src={values.imageReview} alt="" /> }
      {errors.image && touched.image &&
          <p className='text-pink-600'>{errors.image}</p>}

    </div>
         
        </div>
        
        <Button type='submit'>Submit</Button>;        
      </form>
    </Card>

    </div>
  )
}

export default AddForm



const redData = [
  {

  label: 'Male',
  color: 'red',
  value: 'male'
  },
  {
    label: 'Female',
    color: 'blue',
    value:'female'
  }
];

const checkData = [

  {

    label: 'Dance',
    color: 'red',
    value: 'dance'
    },
    {
      label: 'Sing',
      color: 'blue',
      value:'sing'
    }
  
];
