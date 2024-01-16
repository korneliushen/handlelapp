import { RiArrowDropDownLine } from 'react-icons/ri';
export default function FilterDropdown({text}) {
    return(
        <>
        <div className="h-10 w-18 m-1 flex items-center">
            <p className='text-xl'>{text}</p>
            <RiArrowDropDownLine className='text-3xl'/>
        </div>
        </>
    )
}