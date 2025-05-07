
const loadData=async(isShowAll=false)=>{
    
        const res=await fetch('https://openapi.programming-hero.com/api/ai/tools');
        const data=await res.json();
        const tools= data.data.tools;
        // console.log(tools);
        displayToolsData(tools,isShowAll);
}

const displayToolsData=(tools,isShowAll)=>{
// get the parent container that you want to show all element
const toolsParentContainer=document.getElementById('tools-parant-container');

const showAllBtn=document.getElementById('showAllBtn');
if(tools.length>11 && !isShowAll){
    showAllBtn.classList.remove('hidden');
}
else{

    showAllBtn.classList.add('hidden');

}
console.log("is showing all",isShowAll);

if(!isShowAll){
 const shortToolsData=tools.slice(0,6);
 shortToolsData.forEach(tool => {

    console.log(tool);
    // create a container
    const toolsDiv=document.createElement('div');
    
    // container inner HTML
    toolsDiv.innerHTML=`
    <img 
            class="rounded-lg w-full h-full md:w-[500px] md:h-[230px] " 
            src="${tool?.image && tool.image.length > 10 ? tool.image : 'images/rectangle23.png'}" 
            onerror="this.src='images/rectangle23.png'" 
            alt="${tool?.name || 'Tool Image'}"
          >
    
    
    <div class="flex flex-col gap-2 border-b border-b-gray-300 my-4 items-start">
    
    <h5 class=" text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
    Fetaures</h5>
    
    <p class= " text-left mb-3 font-normal text-gray-500 dark:text-gray-400">${tool?.description ? tool.description : 'No description Available'}</p>
    </div>
    
    <div class=" flex flex-nowrap gap-3 justify-between items-center">
    <div class="text-left space-y-4">
    <h5 class=" text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${tool.name}</h5>
    
    <a href="#" class=" inline-flex font-medium items-center text-black dark:text-white hover:underline">
    <svg class="mr-2"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.75 1V3.25M15.25 1V3.25M1 16.75V5.5C1 4.90326 1.23705 4.33097 1.65901 3.90901C2.08097 3.48705 2.65326 3.25 3.25 3.25H16.75C17.3467 3.25 17.919 3.48705 18.341 3.90901C18.7629 4.33097 19 4.90326 19 5.5V16.75M1 16.75C1 17.3467 1.23705 17.919 1.65901 18.341C2.08097 18.7629 2.65326 19 3.25 19H16.75C17.3467 19 17.919 18.7629 18.341 18.341C18.7629 17.919 19 17.3467 19 16.75M1 16.75V9.25C1 8.65326 1.23705 8.08097 1.65901 7.65901C2.08097 7.23705 2.65326 7 3.25 7H16.75C17.3467 7 17.919 7.23705 18.341 7.65901C18.7629 8.08097 19 8.65326 19 9.25V16.75M10 10.75H10.008V10.758H10V10.75ZM10 13H10.008V13.008H10V13ZM10 15.25H10.008V15.258H10V15.25ZM7.75 13H7.758V13.008H7.75V13ZM7.75 15.25H7.758V15.258H7.75V15.25ZM5.5 13H5.508V13.008H5.5V13ZM5.5 15.25H5.508V15.258H5.5V15.25ZM12.25 10.75H12.258V10.758H12.25V10.75ZM12.25 13H12.258V13.008H12.25V13ZM12.25 15.25H12.258V15.258H12.25V15.25ZM14.5 10.75H14.508V10.758H14.5V10.75ZM14.5 13H14.508V13.008H14.5V13Z" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> ${tool.published_in}
    </a>
    </div>
    <a href="#"  class=" inline-flex font-medium items-center text-blue-600 hover:underline">
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="25" fill="#FEF7F7"/>
    <path d="M17.5 25H32.5M32.5 25L25.75 18.25M32.5 25L25.75 31.75" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </a>
    </div>
    
    `
    toolsDiv.setAttribute('class','flex flex-col gap-2 justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700');
    toolsParentContainer.appendChild(toolsDiv); 
    });
 
}

else{
    tools.forEach(tool => {

        console.log(tool);
        // create a container
        const toolsDiv=document.createElement('div');
        
        // container inner HTML
        toolsDiv.innerHTML=`
        <img 
                class="rounded-lg w-full h-full md:w-[500px] md:h-[230px] " 
                src="${tool?.image && tool.image.length > 10 ? tool.image : 'images/rectangle23.png'}" 
                onerror="this.src='images/rectangle23.png'" 
                alt="${tool?.name || 'Tool Image'}"
              >
        
        
        <div class="flex flex-col gap-2 border-b border-b-gray-300 my-4 items-start">
        
        <h5 class=" text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Fetaures</h5>
        
        <p class= " text-left mb-3 font-normal text-gray-500 dark:text-gray-400">${tool?.description ? tool.description : 'No description Available'}</p>
        </div>
        
        <div class=" flex flex-nowrap gap-3 justify-between items-center">
        <div class="text-left space-y-4">
        <h5 class=" text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${tool.name}</h5>
        
        <a href="#" class=" inline-flex font-medium items-center text-black dark:text-white hover:underline">
        <svg class="mr-2"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75 1V3.25M15.25 1V3.25M1 16.75V5.5C1 4.90326 1.23705 4.33097 1.65901 3.90901C2.08097 3.48705 2.65326 3.25 3.25 3.25H16.75C17.3467 3.25 17.919 3.48705 18.341 3.90901C18.7629 4.33097 19 4.90326 19 5.5V16.75M1 16.75C1 17.3467 1.23705 17.919 1.65901 18.341C2.08097 18.7629 2.65326 19 3.25 19H16.75C17.3467 19 17.919 18.7629 18.341 18.341C18.7629 17.919 19 17.3467 19 16.75M1 16.75V9.25C1 8.65326 1.23705 8.08097 1.65901 7.65901C2.08097 7.23705 2.65326 7 3.25 7H16.75C17.3467 7 17.919 7.23705 18.341 7.65901C18.7629 8.08097 19 8.65326 19 9.25V16.75M10 10.75H10.008V10.758H10V10.75ZM10 13H10.008V13.008H10V13ZM10 15.25H10.008V15.258H10V15.25ZM7.75 13H7.758V13.008H7.75V13ZM7.75 15.25H7.758V15.258H7.75V15.25ZM5.5 13H5.508V13.008H5.5V13ZM5.5 15.25H5.508V15.258H5.5V15.25ZM12.25 10.75H12.258V10.758H12.25V10.75ZM12.25 13H12.258V13.008H12.25V13ZM12.25 15.25H12.258V15.258H12.25V15.25ZM14.5 10.75H14.508V10.758H14.5V10.75ZM14.5 13H14.508V13.008H14.5V13Z" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> ${tool.published_in}
        </a>
        </div>
        <a href="#"  class=" inline-flex font-medium items-center text-blue-600 hover:underline">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="#FEF7F7"/>
        <path d="M17.5 25H32.5M32.5 25L25.75 18.25M32.5 25L25.75 31.75" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </a>
        </div>
        
        `
        toolsDiv.setAttribute('class','flex flex-col gap-2 justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700');
        toolsParentContainer.appendChild(toolsDiv); 
        });

}





}
const showAll=()=>{
const toolsParentContainer=document.getElementById('tools-parant-container');

toolsParentContainer.innerText='';
loadData(true);
} 

loadData();