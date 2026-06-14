import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { ZoomIn } from "@material-ui/icons";


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [zoomVar,setZoom]=useState(false);
    
  function handleExpand(){
    setZoom(!zoomVar);
  }


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        
        {zoomVar && 
        
        <input
          name="title"
          onChange={handleChange}  
          value={note.title}
          placeholder="Title"
        /> 
        }
        <textarea
          name="content"
          onClick={handleExpand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={zoomVar? "3" : "1"}
        />
        
        
        <Zoom in={true}>
        <Fab onClick={submitNote}>
          < AddCircleIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
