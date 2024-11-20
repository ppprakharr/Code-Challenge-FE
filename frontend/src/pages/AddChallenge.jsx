import Button from "../elements/Button"
import { useEffect, useState } from "react"
import Datepicker from "react-tailwindcss-datepicker";
import ReactQuill from 'react-quill';
import { Navigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "../components/EditorToolbar";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { addChallenge } from "../apis/Challenges";

const initialErrorState = {
    title: '',
    description: '',
    date: '',
    api: '',
}


const AddChallenge = () => {
    const [cookies, setCookie] = useCookies([]);
    const navigate = useNavigate()
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    })
    useEffect(()=>{
        if (!cookies.jwt)
            navigate('/')
    }
    ,[])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState(initialErrorState)
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleValueChange = (newValue) => {
        console.log("newValue: ", newValue)
        setValue(newValue)

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        let newErrors = {}

        if (title.length === 0) {
            //show error 
            newErrors = {

                ...newErrors,
                title: "Please enter title",

            }
        }

        if (description.length === 0) {
            //show error
            newErrors = {

                ...newErrors,
                description: "Please enter description"

            }
        }

        if (value.startDate === null || value.endDate === null) {
            newErrors = {

                ...newErrors,
                date: "Please select start and end date"

            }
        }
        setErrors(newErrors)
        const hasErrors = Object.values(newErrors).some(error => error !== '');
        if (hasErrors) {
            return
        }
        addChallengeApi()
    }


        const handleDescriptionChange = (e) => {
            setDescription(e)
        }


        const addChallengeApi = async ()=>{
        const [response, error] = await addChallenge(cookies.jwt,{
            challenge: {
                title: title,
                description: description,
                start_date: value.startDate,
                end_date: value.endDate
            }
        })
        handleResponse([response, error])
    }

    const handleResponse = async ([response, error]) => {
        if (error) {
            setErrors({
                ...errors,
                api: error
            }
            )
        }
        else {
                console.log("response",response)
                navigate('/')

        }

    }


        return (
            <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:py-12">
                <h1 className="text-4xl">
                    Add challenge
                </h1>

                <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
                    <div>
                    <input
                        className="py-2 w-full border border-gray-600 rounded px-3"
                        name="title"
                        type="tile"
                        placeholder="Challenge Title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    {errors.title && <p className='text-sm text-medium text-red-500 mt-1'>{errors.title}</p>}
                    </div>

                    <div>
                    <div className="text-editor">
                        <EditorToolbar />
                        <ReactQuill
                            theme="snow"
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder={"Write something awesome..."}
                            modules={modules}
                            formats={formats}
                        />
                    </div>
                    {errors.description && <p className='text-sm text-medium text-red-500 mt-1'>{errors.description}</p>}
                    </div>
                    <div>
                    <Datepicker
                        placeholder="Start Data ~ End Date"
                        minDate={new Date()}
                        inputClassName="border border-gray-600 rounded px-3 py-2 w-full"
                        displayFormat="DD MMMM"
                        value={value}
                        onChange={handleValueChange}

                    />
                    {errors.date && <p className='text-sm text-medium text-red-500 mt-1'>{errors.date}</p>}
                    </div>

<div>
                    <Button type="submit">
                        Add Challenge
                    </Button>
                    {errors.api && <p className='text-sm text-medium text-red-500 mt-1'>{errors.api}</p>}
                    </div>
                </form>
            </div>
        )
    }
    
    export default AddChallenge
    