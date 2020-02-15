const fs = require("fs");

filename = "listings.csv";

for (var i = 1; i <= 10000000; i++) {
  let listing_id = i;
  let listingPrice = Math.floor(Math.random() * 500) + 60;
  let listingBedsNumber = Math.floor(Math.random() * 3) + 1;
  let listingType = ["Entire place", "Private room", "Shared room"][
    Math.floor(Math.random() * 3)
  ];
  let tempString = `${listing_id},${listingPrice},${listingBedsNumber},${listingType}\n`;
  fs.appendFileSync(filename, tempString);
  if (i % 100000 === 0) {
    console.log("loaded: " + i);
  }
}
