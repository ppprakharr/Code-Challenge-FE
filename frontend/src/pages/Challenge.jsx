import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { getChallengeById } from "../apis/Challenges";
import RichTextViewer from '../elements/RichTextViewer';




const Challenge=() =>{
    const location = useLocation();
    const [cookies] = useCookies([]);
    const [challenge, setChallenge] = useState('')


    
    
        useEffect(()=>{
            const segment = location.pathname.split('/')
            const challengeId = segment[segment.length - 1]
            console.log('id: ',challengeId)
            getChallengeByIdApi(challengeId)
    
        }
        ,[])
        
  
    
    

        const getChallengeByIdApi = async (id)=>{
        const [response, error] = await getChallengeById(cookies.jwt,id)
        handleResponse([response, error])
    }

    const handleResponse = async ([response, error]) => {
        if (error) {

            
        }
        else {
  
                const data = await response.json()
                setChallenge(data.data)



        }

    }


    

    console.log("check: ",location.pathname);

    return(
        <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:pt-12 space-y-10">
            {challenge &&
            <div>
                <h1 className="text-3xl text-black"> {challenge.title}</h1>
                <RichTextViewer className="mt-7" content = {challenge.description}/>
                </div>
            }
            </div>
    )
}

export default Challenge