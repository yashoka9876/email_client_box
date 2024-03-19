import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
import classes from './EmailBody.module.css'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
const EmailBody = ({name,subject,message,time,id,read}) => {
  
    const deleteData = async (id) => {
        window.alert("kyo pendi dhak chempian")
        try {
          const response = await fetch(`https://emailboxclient-default-rtdb.firebaseio.com/emails/${id}.json`, {
            method: 'DELETE',
          });
          
          if (!response.ok) {
            throw new Error('Failed to delete data');
          }
          
          console.log('Data deleted successfully');
          window.location.reload();
        } catch (error) {
          console.error('Error deleting data:', error);
        }
      };
      
      // Call the deleteData function with the ID of the data you want to delete
  return (<>
  
      <Link to={id} style={{ textDecoration: 'none' }} >
    <div className={classes.emailbody}>
       <div className={classes.emailbody__left}  name='emailbody__left' data-testid="emailbody__left">
            {read && <div style={{ marginRight: '8px', color: 'blue' }}>•</div>}
            <CheckBoxOutlineBlankIcon/>
            <StarBorderIcon/>
            <LabelIcon/>
            <h6>{name}</h6>
        </div>
        <div className={classes.emailbody__middle} name='emailbody__middle' data-testid="emailbody__middle">
            <div className={classes.emailbody__middle__mgs}>
                <p><b>{subject}</b>{` - ${message}`}</p>
            </div>
        </div>
        <div className={classes.emailbody__right} name='emailbody__right' data-testid="emailbody__right">
            <p style={{marginRight:'10px'}}>{time}</p>
            <DeleteIcon
            onClick={(e)=>{
                e.preventDefault()
                deleteData(id)
            }}
            />
        </div>
    </div>
       </Link>
            </>
  )
}

export default EmailBody