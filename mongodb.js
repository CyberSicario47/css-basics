// const queryArray = [
//     db.school.find({},{name:true}),
//     db.school.find({},{_id:false,name:true}),
//     db.school.find({},{_id:false,name:true, gpa:true}),

//     // update query

//     db.school.updateOne({name:"Spongebob"},{$set:{fullTime:"true",gpa:"3.8"}}),
//     db.student.updateOne({_id:ObjectId("Paste here th correct Id")}),


//     db.students.updateMany(
//         {},{$set:{fullTime: false}}
//     ),

//      db.students.updateOne(
//         {name:"Gary"},{$unset:{fullTime: ""}}
//     ),
// ]

const car = {
    doors: 2,
    seats: "Vinyl",

    get seatMaterial(){
        return this.seats
    },

    set seatMaterial(material){
        this.seats = material
    },
}

const laxuryCar = {};
Object.setPrototypeOf(laxuryCar,car)
laxuryCar.seatMaterial = 'cloth'


laxuryCar.valueOf()
// returns the current value of the objcet
console.log({laxuryCar},laxuryCar.seatMaterial)