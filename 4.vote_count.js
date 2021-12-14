"use strict";

function getVotecount(obj) {
  let result = obj.upvotes - obj.downvotes;
  return result;
}
