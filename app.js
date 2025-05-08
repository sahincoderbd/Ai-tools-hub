
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
let toolsDisplay;
if(!isShowAll){
 toolsDisplay= tools.slice(0,6);
}
else{
    toolsDisplay=tools;
}
 toolsDisplay.forEach(tool => {

        // console.log(tool);
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
        <a href="javascript:void(0)" dataId="${tool.id}" class="showdetails inline-flex font-medium items-center text-blue-600 hover:underline">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="#FEF7F7"/>
        <path d="M17.5 25H32.5M32.5 25L25.75 18.25M32.5 25L25.75 31.75" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </a>
 <!-- Main modal -->
 <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="bg-[#36415478] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full">
      
    </div>
        
        </div>
        
        `
        toolsDiv.setAttribute('class','flex flex-col gap-2 justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700');
        toolsParentContainer.appendChild(toolsDiv); 
        });


        // add forEach loop for all show details button

        const showDetails=document.querySelectorAll('.showdetails');
        showDetails.forEach(button=>{
button.addEventListener('click',()=>{
const Id=button.getAttribute('dataId');
ShowDetailsHandler(Id);
})
});

}





const showAll=()=>{
const toolsParentContainer=document.getElementById('tools-parant-container');

toolsParentContainer.innerText='';
loadData(true);
} 

const ShowDetailsHandler=async (id)=>{
    console.log('showdetails button clicked',id);
    // get the data using tool id
const res=await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
const data= await res.json();
const toolData=data.data;
console.log(toolData);

const modalContainer=document.getElementById('static-modal');

const createdModalChild=document.createElement('div');
createdModalChild.innerHTML=`

<!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700  ">
            <!-- Modal header -->
            <div class="relative p-1 rounded-t">
                
                <button type="button" class="absolute cursor-pointer -top-2 -right-2 text-white bg-[#EB5757] hover:bg-blue-600 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-blue-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg class="w-2 h-2"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-3 md:p-4 space-y-4 ">
                <div class="flex flex-col md:flex-row gap-3 justify-center items-center p-4" >
                    <div class="flex flex-col gap-2 nowrap border-2 border-[#EB5757] rounded-2xl p-3 bg-[#EB57570D]">
                        
                     <h6 class="text-lg font-medium dark:text-white">${toolData.description}</h6>
                     <!-- pricing text  table-->
                     <div class="flex gap-2">
                        <div class="bg-white dark:bg-gray-900 rounded-lg p-2">
                            <p class="text-base font-semibold leading-relaxed text-[#03A30A] text-center ">
                                <span>${toolData.pricing[0]?.price}</span>
                                ${toolData.pricing[0].plan}
                             </p>
                        </div>
                        <div class="bg-white dark:bg-gray-900 rounded-lg p-2">
                            <p class="text-base font-semibold leading-relaxed text-[#F28927] text-center ">
                                <span>${toolData.pricing[1]?.price}</span>
                                ${toolData.pricing[1].plan}

                             </p>
                        </div>
                        <div class="bg-white dark:bg-gray-900 rounded-lg p-2">
                            <p class="text-base font-semibold leading-relaxed text-[#EB5757] text-center ">
                                 <span>${toolData.pricing[2]?.price}</span>
                                ${toolData.pricing[2].plan}
                             </p>
                        </div>
                     
                    </div>


                    <!-- features list -->
                     <div class="flex gap-2 justify-between">
                        <div class=" rounded-lg p-2">
                     <h6 class="text-xl font-medium dark:text-white">Features</h6>
                            
                        <li class="text-gray-600 text-sm"> ${toolData.features?.['1'].feature_name}</li>
                        <li class="text-gray-600 text-sm"> ${toolData.features?.['2'].feature_name}</li>
                        <li class="text-gray-600 text-sm"> ${toolData.features?.['3'].feature_name}</li>
                        </div>
                        <div class=" rounded-lg p-2">
                     <h6 class="text-xl font-medium dark:text-white">Integrations</h6>
                            
                        <li class="text-gray-600 text-sm"> ${toolData.integrations[0]} </li>
                        <li class="text-gray-600 text-sm"> ${toolData.integrations[1]}</li>
                        <li class="text-gray-600 text-sm"> ${toolData.integrations[2]}</li>
                        </div>
                        
                       
                     
                    </div>
                    
                    </div>
                   <div class="relative flex flex-col space-y-3 nowrap border-2 border-[#E7E7E7] rounded-xl p-2">
                   <p class="absolute top-4 right-4 px-3 py-1 text-base text-white font-normal leading-relaxed bg-[#EB5757] text-center rounded-md">${toolData.accuracy?.score}% accuracy</p>
                    
                    <img class="rounded-lg" src="${toolData?.image_link[0] && toolData.image_link[0].length > 10 ? toolData.image_link[0] : 'images/rectangle23.png'}" 
               
                alt="${toolData?.tool_name || 'Tool Image'}">

                    <h6 class="text-xl font-medium dark:text-white text-center">${toolData.input_output_examples[0]?.input}</h6>
                    <p class="text-base font-normal leading-relaxed text-[#585858] text-center ">
                    ${toolData.input_output_examples[0]?.output}
                     </p>
                   </div>
                    
                </div>
                    
                </div>
            
        </div>

`
createdModalChild.setAttribute('class','relative p-4 w-3xl max-h-full');
modalContainer.appendChild(createdModalChild);


// show modal 
modalContainer.classList.remove('hidden');
modalContainer.classList.add('flex');
modalContainer.style.overflow="";

// hide modal
document.querySelector('[data-modal-hide="static-modal"]').addEventListener('click',()=>{
        modalContainer.classList.add('hidden');
        modalContainer.innerHTML='';
        document.body.style.overflow="";
    });

modalContainer.addEventListener('click',(e)=>{
    if(e.target===modalContainer){
        modalContainer.classList.add('hidden');
        modalContainer.classList.remove('flex');
        modalContainer.innerHTML='';
        document.body.style.overflow="";
    }

   

})


}


loadData();