"use strict";
module.exports = {
  generateId
};

function generateId(Context, events, done) {
  const listing_id = Math.floor(Math.random() * 10000000 + 1);
  Context.vars.listing_id = listing_id;
  return done();
}
