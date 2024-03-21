const accesskey="KVwTQs_YCpkGkoNHV2eiQJzKaiv3Wvng9Gr5NeH6cKk";

const searchform=document.querySelector("#search-form");
const searchBox=document.querySelector("#search-box");
const searchAllimg=document.querySelector("#search-all-img");
const showBtn=document.querySelector("#show-more-btn");

let keyword="";
let page=1;
// let per_page=12;



async function searchImage(){
      keyword=searchBox.value;
      const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
      let response=await fetch(url);
      const data1=await response.json();
      console.log(data1);
      const results=data1.results;
      results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";
        imagelink.appendChild(image);
        searchAllimg.append(imagelink);
      })
      

}

searchform.addEventListener("submit",(e)=>{
    searchAllimg.innerHTML="";
    e.preventDefault();
    console.log("page clicked");
    page=1;
    searchImage();
});
showBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})










// param	Description
// query	=Search terms.
// page	Page =number to retrieve. (Optional; default: 1)
// per_page	=Number of items per page. (Optional; default: 10)
// order_by	=How to sort the photos. (Optional; default: relevant). Valid values are latest and relevant.