import '../rich-text.css'
const RichTextViewer = ({className, content}) =>{
    return(
        
            <div className={`rich-text-container ${className}`} dangerouslySetInnerHTML={{ __html: content }}></div>
       
    )

}

export default RichTextViewer