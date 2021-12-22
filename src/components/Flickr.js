//npm install axios
import axios from 'axios';
import { useState } from 'react';

const baseURL = "https://www.flickr.com/services/rest/?";
const method = "flickr.interestingness.getList";
const key = "e7ed3b39fe112d7e93d03c19325305e0";
const count = 5;
const url = `${baseURL}method=${method}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&privacy_filter=1`;  


function Flickr(){  

  let [items, setItems] = useState([]);

  axios.get(url)
  .then(data=>{    
    const photos = data.data.photos.photo; 
    setItems(photos)
  })
  .catch(err=>{
    console.error(err);
  })
  
  return (
    <main>
      <h1>Flickr Gallery</h1>

      <section>
      {
        items.map((data,index)=>{
          let imgSrc =`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;
			    let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`
          return(            
            <article key={index}>
              <div className="inner">
                <div className="pic">               
                  <img src={imgSrc} />
                </div>
                <p>{data.title}</p>
              </div>
            </article>
          )
        })
      } 
      </section>   
     
    </main>
  )
}

export default Flickr;