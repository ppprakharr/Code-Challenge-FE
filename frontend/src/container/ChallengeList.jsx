

import 'react-quill/dist/quill.snow.css';
;
import { useCookies } from 'react-cookie';

import { getActiveAndUpcomingChallenges } from "../apis/Challenges";
import { useEffect, useState } from 'react';
import ChallengeCard from '../components/ChallengeCard';




const ChallengeList = () => {
    const [cookies] = useCookies([]);
    const [activeChallenges, setActiveChallenges] = useState([])
    const [upcomingChallenges, setUpcomingChallenges] = useState([])

    
    useEffect(()=>{
        getActiveAndUpcomingChallengesApi()
    },[])
    
    

        const getActiveAndUpcomingChallengesApi = async ()=>{
        const [response, error] = await getActiveAndUpcomingChallenges(cookies.jwt)
        handleResponse([response, error])
    }

    const handleResponse = async ([response, error]) => {
        if (error) {
           //TODO: handle error
            
        }
        else {
                console.log("response",response)
                const data = await response.json()
                setActiveChallenges(data.active)
                setUpcomingChallenges(data.upcoming)

                // navigate('/')

        }

    }


        return (
            <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:pt-12 space-y-10">
                {
                activeChallenges && activeChallenges.length>0 &&
                <>
                <div>
                <h3 className="text-2xl font-bold"> Active Challenges</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-6">
                {activeChallenges.map((challenge)=>{
                   return( <ChallengeCard key={challenge.id} challenge={challenge} /> )
                }
                
                )
            }
            </div>
            </div>
                </>
}

{
                upcomingChallenges && upcomingChallenges.length>0 &&
                <>
                <div>
                <h3 className="text-2xl font-bold"> Upcoming Challenges</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-6">
                {upcomingChallenges.map((challenge)=>{
                   return( <ChallengeCard challenge={challenge} /> )
                }
                )
            }
            </div>
            </div>
                </>
}

                

                
            </div>
        )
    }
    
    export default ChallengeList
    