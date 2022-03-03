const mongoose = require('mongoose');

// Connection URI
const uri = "mongodb://localhost:27017/fruitsDB";

mongoose.connect(uri);

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const FruitModel = mongoose.model("Fruit", fruitSchema);

FruitModel.deleteMany({name:"Pineapple"}, function(err){
  if(err){
    console.log(err);
  }
  else {
    console.log('Successfully deleted the document.');
  }
});

const fruit = new FruitModel({
  name: "Pineapple",
  rating: 9,
  review: "It's tangy"
});

fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const PersonModel = mongoose.model("person", personSchema);

const person = new PersonModel({
  name: "John",
  age: 37,
});

//person.save();

const sally = new PersonModel({
  name: "Sally",
  age: 30
});

const hally = new PersonModel({
  name: "Hally",
  age: 32
});

const dally = new PersonModel({
  name: "Dally",
  age: 35
});

// PersonModel.insertMany([sally, hally, dally], function(err, docs){
//   console.log(err);
//   console.log(docs);
// });
console.log(fruit);
PersonModel.updateOne({name: "John"}, {favouriteFruit: fruit}, function(err){
  if(err){
    console.log(err);
  }
  else {
    console.log('Successfully updated the document.');
  }
});

// PersonModel.deleteOne({_id: '6220245f8609f103ad694808'}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log('Successfully deleted the document.');
//   }
// });

getAllPeople();

async function getAllPeople(){

  // let persons = PersonModel.find({}, function(err, docs){
  //   mongoose.connection.close();
  //   console.log(err);
  //   console.log("DOCS", docs);
  // });

let persons = await PersonModel.find({name:"dfsfd"}).exec();
mongoose.connection.close();
  console.log("--------");
  console.log("PEOPLE", persons);
  console.log("--------");
  

}

