let Overview = document.querySelector("#myTab>li:nth-child(1) >button");
let Curriculum = document.querySelector("#myTab> li:nth-child(2) > button");
let Instructors = document.querySelector("#myTab> li:nth-child(3) > button");
let reviews = document.querySelector("#myTab> li:nth-child(4) > button");

let OverviewContent = document.querySelector("#myTabContent> div:nth-child(1)");
let CurriculumContent = document.querySelector("#myTabContent> div:nth-child(2)");
let InstructorsContent = document.querySelector("#myTabContent> div:nth-child(3)");
let reviewsContent = document.querySelector("#myTabContent> div:nth-child(4)");

function clickOnTheTab(e){
    

    if(e.textContent.trim()=="Curriculum"){
        Overview.classList.remove("active");
        Curriculum.classList.add("active");
        Instructors.classList.remove("active");
        reviews.classList.remove("active");

        OverviewContent.classList.remove("active");
        CurriculumContent.classList.add("active");
        InstructorsContent.classList.remove("active");
        reviewsContent.classList.remove("active");

        OverviewContent.classList.remove("show");
        CurriculumContent.classList.add("show");
        InstructorsContent.classList.remove("show");
        reviewsContent.classList.remove("show");
    }
    else if(e.textContent.trim()=="Instructors"){
        Overview.classList.remove("active");
        Curriculum.classList.remove("active");
        Instructors.classList.add("active");
        reviews.classList.remove("active");

        OverviewContent.classList.remove("active");
        CurriculumContent.classList.remove("active");
        InstructorsContent.classList.add("active");
        reviewsContent.classList.remove("active");
        
        OverviewContent.classList.remove("show");
        CurriculumContent.classList.remove("show");
        InstructorsContent.classList.add("show");
        reviewsContent.classList.remove("show");
        
    }
    else if(e.textContent.trim()=="reviews"){
        Overview.classList.remove("active");
        Curriculum.classList.remove("active");
        Instructors.classList.remove("active");
        reviews.classList.add("active");

        OverviewContent.classList.remove("active");
        CurriculumContent.classList.remove("active");
        InstructorsContent.classList.remove("active");
        reviewsContent.classList.add("active");
        
        OverviewContent.classList.remove("show");
        CurriculumContent.classList.remove("show");
        InstructorsContent.classList.remove("show");
        reviewsContent.classList.add("show");
        
    }
    else if(e.textContent.trim()=="Overview"){
        Overview.classList.add("active");
        Curriculum.classList.remove("active");
        Instructors.classList.remove("active");
        reviews.classList.remove("active");

        OverviewContent.classList.add("active");
        CurriculumContent.classList.remove("active");
        InstructorsContent.classList.remove("active");
        reviewsContent.classList.remove("active");
        
        OverviewContent.classList.add("show");
        CurriculumContent.classList.remove("show");
        InstructorsContent.classList.remove("show");
        reviewsContent.classList.remove("show");
        
    }
}


let sliderLeftBtn = document.querySelector("#sliderLeftBtn");
let sliderRightBtn = document.querySelector("#sliderRightBtn");

sliderLeftBtn.addEventListener("click", ()=>{
    console.log("Clicked Left");
});


sliderRightBtn.addEventListener("click", ()=>{
    console.log("Clicked Right");
});