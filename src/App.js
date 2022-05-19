
import {Card, Button,DropdownButton,Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useState,useEffect} from 'react';

// const LightTheme = {
//   pageBackground:'white',
//   titleColor:'#dc658b',
//   tagLineColor:'black'
// }

  const baseURL='http://localhost:3004/info';

function App() {

  const [workShop , setWorkShop] = useState([]);


  useEffect(() => {
    getWorkshop();
  }, []);

  // Fetch data from Json Server
  const getWorkshop = async () => {
    await axios.get(baseURL).then((res) => setWorkShop(res.data));
  };

  
  
// console.log(workShop[0].venue)


  return (

    <div>
      
    {workShop.map((x, index)=>{
      return(
        <Card style={{ width: '15rem', display: 'inline-block', margin:'5px'}} key={index}>
        <Card.Body>
         <Card.Text>
          <span style={{fontSize: "2rem"}}>{x.venue}</span>
          <br />
          <span style={{fontSize: "1.5rem"}}>{x.date}</span>
         </Card.Text>
         <DropdownButton id="dropdown-basic-button" title={x.availability}>   
       <Dropdown.Item >{x.seats}</Dropdown.Item>
      </DropdownButton>
       </Card.Body>
     </Card>
      )
    })}
    
    </div>
    
   
    
  );
}

export default App;
