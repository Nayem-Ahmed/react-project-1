import profile from '../../assets/images/profile.png'
export default function Header() {
    return(
        <div className='max-w-screen-xl flex  md:flex-row justify-between p-5 items-center border-b-2'>
            <h2 className="md:text-3xl">Knowledge Cafe</h2>
            <img src= {profile} alt="" />
        </div>
    )
    
}