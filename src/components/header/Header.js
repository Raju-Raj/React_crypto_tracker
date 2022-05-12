import React,{useEffect,useState} from 'react';
import './header.css';
import axios from 'axios';
import Card from '../card/Card';


const Header = () => {


  const [data,setData]=useState([])

  const [search,setSearch]=useState('')

  const handleChange=(e)=>{
    setSearch(e.target.value)
  }

 useEffect(()=>{
   axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=52")
   .then(res=>setData(res.data.coins))
 },[])
 console.log(data)




  return (
    <div>
        <div className='header'>
           <input type="text" placeholder='Search for Crypto....' onChange={handleChange}/>
        </div>

        {data.length>0 &&
        <div className='card-container'>
        {
          data.filter(crypto=>crypto.name.toLowerCase().includes(search.toLowerCase())
          ).map(crypto=>
          <Card 
          key={crypto.id}
          imgsource={crypto.icon}
          id={crypto.id}
          name={crypto.name}
          price={crypto.price}
          rank={crypto.rank}
          marketCap={crypto.marketCap}
          />
          )
        }
      </div>
        }
    </div>
  )
}

export default Header