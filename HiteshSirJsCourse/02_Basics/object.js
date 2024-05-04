//Destructuring

const course = {
  "courseName":"JsHindi",
  "price":999,
  "courseInstructer":"Hitesh"
}

//First Way to access a Object Property
course.courseName = "ReactHindi";

//Destructured way
const {courseInstructer: inst} = course;
console.log(inst)


