var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  /*Prompt All command*/
  var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  if(allChoice == "all"){
    collection.find().toArray(function(err, doc){
      console.log(doc);
    });
  } else {
    console.log("Aw, you don't want to see the restaurants?");
  }

  /*Prompt One command*/
  // var oneChoice = prompt ("Type the restaurant you are curious about ");
  // collection.find().forEach(function(doc){
  //  if(oneChoice == doc.name){
  //    console.log(doc);
  //  }
  // });

  /*Add command*/
  // var addName = prompt ("What is the name of the restaurant you want to add? ");
  // var addStreet = prompt ("What is the street address? ");
  // var addZip = prompt ("what is the zipcode? ");
  // var addYelp = prompt ("What is the yelp url? ");
  // collection.insert({"name":addName,"address":{"street":addStreet,"zipcode":addZip},"yelp":addYelp});
  // collection.find().toArray(function(err, doc){
  //      console.log(doc);
  //    });

    /*Edit restaurant command*/
  // var editChoice = prompt ("Which restaurant would you like to change? ");
  // collection.find().forEach(function(doc){
  //  if(editChoice == doc.name){
  //   var cngWhat = prompt("Type what you would like to change(name, address, or yelp ");
  //       if(cngWhat == 'name'){
  //         var nmCng = prompt("What should the new name be? ");
  //         collection.update({"name":doc.name},{$set:{"name":nmCng}});
  //         console.log(editChoice);
  //       } else if (cngWhat == 'address'){
  //         var stCng = prompt("What is the new street address? ");
  //         var zpCng = prompt("What is the new zip code? ");
  //         collection.update({"name":doc.name},{$set:{"address":{"street":stCng, "zipcode":zpCng}}});
  //         console.log();
  //       } else if (cngWhat == 'yelp'){
  //         var ypCng = prompt("What should the new name be? ");
  //         collection.update({"name":doc.name},{$set:{"yelp":ypCng}});
  //         console.log(doc);
  //       } else{console.log("not found"); return;}
  //     }
  //   return(collection.find().toArray(function(err, doc){
  //     console.log(doc);
  //   }));
  // });

      /*delete command*/
  // var deleteChoice = prompt ("Type the restaurant you would like to destroy ");
  // collection.find().forEach(function(doc){
  //  if(deleteChoice == doc.name){
  //    collection.remove({"name":doc.name});
  //  }
  //  return(collection.find().toArray(function(err, doc){
  //      console.log(doc);
  //    }));
  // });

});





