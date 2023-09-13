export default function Bookmark({bookmark}) {
    const {title} = bookmark
    return(
        <div className="bg-gray-200 p-3 mb-5 rounded-lg">
            <h3>{title}</h3>
        </div>
    )
    
}