import { nanoid } from 'nanoid';
//add "id" by transformation from data to JSON and back
function addId(str) {
  //make id
  const id = nanoid();
  //part one JSON str
  const idStr_PartOne = `{"id":"${id}",`;
  //part two JSON str
  const str_PartTwoo = JSON.stringify(str).slice(1);
  //return new JSON str with Id
  return JSON.parse(`${idStr_PartOne}${str_PartTwoo}`);
};

export default addId;
