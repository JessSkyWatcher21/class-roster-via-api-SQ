// My Scripts

// Data source
const url = "https://v1.nocodeapi.com/pmanikoth/webflow/wtzODovSIJsRXhZg";

// Get data
 fetch(url)
   .then( response  => response.json())
  .then( data  => {
     // check-check: get one image
     // Note: Webflow returns data in array called `items`
     console.log(data.items[0].image.url);
   console.log(data.items[6].name.url);

    // get container for data
     const gallery = document.querySelector(".gallery");

     //
     data.items.forEach( student => {
       
      
      // template
      const template = `
           <figure>
           <figcaption>${student.name}</figcaption>
             <img src="${student.image.url}" alt="Placeholder" />
           </figure>
       `;
      


       gallery.insertAdjacentHTML("afterbegin", template);
    });
  });

