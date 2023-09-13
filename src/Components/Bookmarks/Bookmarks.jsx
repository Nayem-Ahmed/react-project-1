import PropTypes from 'prop-types'

import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({bookmarks}) {
    return(
        <div className="md:w-1/3 w-2/3">
            <h3 className="md:text-2xl mb-3">Bookmarks Blog : {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} ></Bookmark>)
            }
        </div>
    )
    
}
Bookmarks.propTypes = {
    bookmarks:PropTypes.array
}




