// destructuring 
const course = {
    name: "js in hindi",
    price: 999,
    courseInstructor: "Ishita Bairagi"
}

// course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);


const navBar = () => {
    
}

navBar(comapny = "ishita" )