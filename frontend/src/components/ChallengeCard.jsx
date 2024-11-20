import DefaultThumbnail from '../assets/auth_graphic.svg'
import { DateFormat } from '../utilities/DateFormat'
import { Link } from 'react-router-dom'
const ChallengeCard=({challenge})=>{
const DateText = () =>{
    const startDate=new Date(challenge.start_date)
    const endDate = new Date(challenge.end_date)
    const currentDate = new Date()

    if (startDate>currentDate){
        //future challenge
        return (<p className="text-medium text-green-700 font-bold">{`Start Date: ${DateFormat(startDate)}`}</p>)
    }
    else if(startDate<currentDate && endDate>currentDate){
        // active
        return (<p className="text-medium text-red-700 font-bold">{`End Date: ${DateFormat(endDate)}`}</p>)
    }
    else{
    return (<p className="text-medium font-bold">{`Start Date: ${DateFormat(startDate)} and End Date ${DateFormat(endDate)}`}</p>)
}
}

    return(
        <Link to= {`/challenge/${challenge.id}`}> 
        <div className="flex flex-col border border-black rounded hover:cursor-pointer hover:shadow-lg">
            <img className="aspect-square w-full border-b border-black" src={DefaultThumbnail} />
            <div className="p-4">
            <p className="text-medium font-bold text-ellipsis line-clamp-1">{challenge.title}</p>
            {DateText()}
            
            </div>
        </div>
        </Link>
    )
}
export default ChallengeCard