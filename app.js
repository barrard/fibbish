const express = require("express");
const app = express();
BigInt.prototype.toJSON = function() { return this.toString(); };


app.get("/fibbish/:n", (req, res) => {
  let fibVals = [0, 1];
  let n  = parseFloat(req.params.n);
  if(!number_test(n)){
    return res.json({ fibVals: "Please send a whole number" });
  }

  if (n < 0) {
    return res.json({ fibVals: "Please send a positive value" });
  }
  if (n === 0) {
    return res.json({ fibVals: '' });
  }
  if (n === 1) {
    return res.json({ fibVals: '0' });
  }
  if (n === 2) {
    return res.json({ fibVals: '0,1' });
  }
  if(n>2){
      for(let x = 2; x<n;x++){
          let [ val1, val2] = fibVals.slice(-2)
          let newVal = BigInt(BigInt(val1)+BigInt(val2))
          if(!newVal){
              console.log('wtf')
          }
          fibVals.push(newVal)
      }
      fibVals=fibVals.join()
      return res.json({ fibVals });
    }
});

let port = 36363;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



function number_test(n)
{
   var result = (n - Math.floor(n)) !== 0; 
   
  if (result)
    return false;
   else
     return true;
  }