
import { NextResponse } from "next/server"

export async function GET() {
      
     return NextResponse.json([
        {  
            id:0,
            recommended:[
        
            {  
              id:0,
              category:"Recommended",
              name:"French Fries",
              img:"/assets/food/frenchfries.avif",
              bestseller:false,
              price: 118.50,
              rating:5.0,
              review:4,
              customise:true
            },
            { 
              id:1,
              category:false,
              name:"Paneer Butter Masala",
              img:"/assets/food/paneer butter.avif",
              bestseller:true,
              price: 163.50,
              rating:4.2,
              review:17,
              customise:true
            },
            {
              id:2,
              category:false,
              name:"Kadhai Paneer",
              img:"/assets/food/kadhai paneer.avif",
              bestseller:false,
              price: 313.50,
              rating:3.5,
              review:10,
              customise:true
            },
            {
              id:3,
              category:false,
              name:"Kaju Curry",
              img:"/assets/food/kaju curry.avif",
              bestseller:false,
              price: 343.50,
              rating:2.0,
              review:3,
              customise:false
            },
            {
              id:4,
              category:false,
              name:"Tandoori Butter Roti",
              img:"/assets/food/tandoori butter roti.avif",
              bestseller:false,
              price: 28.50,
              rating:3.7,
              review:14,
              customise:true
            }
          ]
        },
        {  
          id:1,
          vegStarter:[
          { 
            id:0,
            category:"Veg Starter",
            name:"French Fries",
            img:"/assets/food/frenchfries.avif",
            price: 118.50,
            rating:5.0,
            review:4,
            customise:true
          },
          { 
            id:1,
            category:false,
            name:"Chana Roast",
            img:"/assets/food/chana roast.avif",
            price: 133.50,
            rating:false,
            review:false,
            customise:true
          },
          { 
            id:2,
            category:false,
            name:"Veg Manchurian",
            img:false,
            price: 163.50,
            rating:false,
            review:false,
            customise:true
          },
          { 
            id:3,
            category:false,
            name:"Honey Chilli Potato",
            img:"/assets/food/honey chilli.avif",
            price: 163.50,
            rating:false,
            review:false,
            customise:true
          },
          { 
            id:4,
            category:false,
            name:"Chilli Chana",
            img:"/assets/food/chilli chana.avif",
            price: 163.50,
            rating:false,
            review:false,
            customise:true
          },
          { 
            id:5,
            category:false,
            name:"Chatpata Crispy Corn",
            img:"/assets/food/chatpata.avif",
            price: 148.50,
            rating:false,
            review:false,
            customise:true
          },
          {
            id:6,
            category:false,
            name:"Soya Chaap Angara",
            img:"/assets/food/soya chaap.avif",
            price: 148.50,
            rating:false,
            review:false,
            customise:true
          },
          { 
            id:7,
            category:false,
            name:"Soya Chaap Malai",
            img:false,
            price: 148.50,
            rating:3.1,
            review:7,
            customise:true
          },
          {
             id:8,
            category:false,
            name:"Soya Chaap Kashturi",
            img:false,
            price: 148.50,
            bestseller:true,
            rating:false,
            review:false,
            customise:true
          },          
          { 
            id:9,
            category:false,
            name:"Chilli Paneer",
            img:"/assets/food/chilli paneer.avif",
            price: 178.50,
            rating:4.5,
            review:5,
            customise:true
          }
        ]
      },
      {  
        id:2,
        nonVeg:[
        { 
          id:0,
          category:"Non-Veg Starter",
          name:"Chicken Achari Tikka",
          img:false,
          price: 223.50,
          rating:false,
          review:false,
          customise:true
        },
        {
          id:1,
          category:false,
          name:"Chicken Kasturi Tikka",
          img:false,
          price: 223.50,
          rating:false,
          review:false,
          customise:true
        },
        { 
          id:2,
          category:false,
          name:"Chicken Lasuni Tikka",
          img:"/assets/food/chickem tikka.avif",
          price: 223.50,
          rating:false,
          review:false,
          customise:true
        },       
         {
          id:3,
          category:false,
          name:"Chicken Malai Tikka",
          img:"/assets/food/chicken malai.avif",
          price: 223.50,
          rating:4.1,
          review:3,
          customise:true
        },      
         {
          id:4,
          category:false,
          name:"Chicken Seek kebab",
          img:"/assets/food/chicken kabab.avif",
          price: 223.50,
          rating:false,
          review:false,
          customise:true
        },
        { id:5,
          category:false,
          name:"Chicken Salt N Pepper",
          img:"/assets/food/chick salt n pepper.avif",
          bestseller:true,
          price: 178.50,
          rating:false,
          review:false,
          customise:true
        },
        { 
          id:6,
          category:false,
          name:"Tandoori Chicken",
          img:"/assets/food/tandoori chick.avif",
          price: 373.50,
          rating:4.5,
          review:9,
          customise:true
        },
        { 
          id:7,
          category:false,
          name:"Fish Salt N Pepper",
          img:"/assets/food/fish salt n pepper.avif",
          price: 238.50,
          rating:false,
          review:false,
          customise:true
        },
        { 
          id:8,
          category:false,
          name:"Fish Ajwain Tikka",
          img:"/assets/food/fish ajwan.avif",
          price: 268.50,
          rating:false,
          review:false,
          customise:true
        },
        { 
          id:9,
          category:false,
          name:"Chicken Manchurian",
          img:false,
          price: 223.50,
          rating:false,
          review:false,
          customise:true
        },
        {  
          id:10,
          category:false,
          name:"Chicken Chilli",
          img:"/assets/food/chilli chick.avif",
          bestseller:true,
          price: 148.50,
          rating:false,
          review:false,
          customise:true
        }
      ]
    },
    {  
      id:3,
      category:"Veg Rice",
      vegRice:[
      { 
        id:0,
        category:false,
        name:"Steam Rice",
        img:"/assets/food/steam rice.avif",
        price: 118.50,
        rating:false,
        review:false,
        customise:true
      },
      { 
        id:1,
        category:false,
        name:"Jeera Rice",
        img:"/assets/food/geera ricw.avif",
        price: 133.50,
        rating:3.3,
        review:10,
        customise:true
      },
      { 
        id:2,
        category:false,
        name:"Tomato Onion Garlic Rice",
        img:false,
        price: 223.50,
        rating:false,
        review:false,
        customise:true
      },       
       {  
        id:3,
        category:false,
        name:"Veg Biryani",
        img:"/assets/food/veg biriyani.avif",
        price: 223.50,
        rating:4.1,
        review:3,
        customise:true
      }
    ]
  },  
  {  
  id:4,
  nonVegRice:[
  { 
    id:0,
    category:"Non-Veg Rice",
    name:"Chicken Fried Rice",
    img:"/assets/food/chicken fried biriyani.avif",
    price: 163.50,
    rating:4.6,
    review:16,
    customise:true
  },
  { 
    id:1,
    category:false,
    name:"Egg Biryani",
    img:"/assets/food/egg biriyani.avif",
    price: 178.50,
    rating:4.4,
    review:12,
    customise:true
  },
  { 
    id:2,
    category:false,
    name:"Chicken Biryani",
    img:"/assets/food/chicken biriyani.avif",
    price: 238.50,
    rating:4.1,
    review:41,
    customise:true
  },       
   {
    id:3,
    category:false,
    name:"Dum Chicken Biryani",
    img:"/assets/food/dum chicken.avif",
    price: 433.50,
    rating:3.8,
    review:6,
    customise:false
  },      
   {
    id:4,
    category:false,
    name:"Mutton Biryani",
    img:"/assets/food/mutton biriyani.avif",
    bestseller:true,
    price: 568.50,
    rating:false,
    review:false,
    customise:false
  },
  {
    id:5,
    category:false,
    name:"Dum Mutton Biryani",
    img:"/assets/food/dum mutton.avif",
    price: 568.50,
    rating:false,
    review:false,
    customise:false
  }
]
},
{ 
  id:5,
  roti:[
  {
    id:0,
    category:"Roti & Paratha & Naan",
    name:"Tandoori Roti",
    img:"/assets/food/tandoori roti.avif",
    price: 28.50,
    rating:4.6,
    review:30,
    customise:false
  },
  {
    id:1,
    category:false,
    name:"Tandoori Butter Roti",
    img:"/assets/food/tandoori butter roti.avif",
    price: 28.50,
    rating:3.7,
    review:14,
    customise:false
  },
  {
    id:2,
    category:false,
    name:"Plain Naan", 
    img:false,
    bestseller:true,
    price: 58.50,
    rating:false,
    review:false,
    customise:true
  },       
   {
    id:3,
    category:false,
    name:"Butter Naan",
    img:"/assets/food/butter naan.avif",
    price: 73.50,
    rating:2.4,
    review:14,
    customise:false
  },      
   {
    id:4,
    category:false,
    name:"Garlic Naan",
    img:"/assets/food/garlic naan.avif",
    price: 88.50,
    rating:2.7,
    review:5,
    customise:false
  },
  {
    id:5,
    category:false,
    name:"Lachha Paratha",
    img:"/assets/food/latcha paratha.avif",
    bestseller:true,
    price: 58.50,
    rating:4.7,
    review:4,
    customise:false
  }
]
}
]
)
}