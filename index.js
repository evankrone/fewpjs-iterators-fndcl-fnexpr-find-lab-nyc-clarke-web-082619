const superbowlWin = (record) => {
let r = record.find( record => record.result === "W" )
if (r !== undefined){
return r.year;
}
else {
  return r;
  }
}

