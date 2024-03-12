
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



function Composeee() {
  const[email,setEmail]=useState('');
  const[subject,setSubject]=useState('');
  const[body,setBody]=useState();

const[editorState,setEditorState]=useState();

const onEmailStateChanges=(e)=>{
  setEmail(e.target.value);
}
const onSubjectStateChanges=(e)=>{
  setSubject(e.target.value);
}

const onEditorStateChanges=(e)=>{
  setBody(e);
}

const onEditorStateChange=(e)=>{
  setEditorState(e);
}
function submitHandler(e){
  e.preventDefault();
  let obj={
    email,
    subject,
    body:body.blocks[0].text
    
  }
  //here we will send mail to database here
  async function sendMail(){
    
   const response=await fetch('https://emailboxclient-default-rtdb.firebaseio.com/user/yashoka51gmailcom/sender.json',{
        method:'POST',
        body:JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
          },
      })
      if(!response.ok){
        throw new Error('this one is at antoher level');
      }
      console.log(await response.json());
  }
 
  sendMail().catch((err)=>{
    console.log(err);
  })
  console.log(obj);
  setEmail('');
  setSubject('');
  setBody('');
  setEditorState('');
}
  return <>
  <div>
    <form onSubmit={submitHandler} className="w-50 m-auto ">
        <div className="form-group">
        <input value={email} type="email" placeholder="aabc@gamil.com" required onChange={onEmailStateChanges} className="form-control"/>
        </div>
        <div className="form-group">
        <input value={subject} type="text" placeholder="Subject" required onChange={onSubjectStateChanges} className="form-control"/>
        </div>
        <div> 
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
            onChange={onEditorStateChanges}
        />
        </div>
        <div>
        <button className="btn btn-primary ">Send!</button>
        </div>
    </form>
  </div>
  </>
}

export default Composeee;
