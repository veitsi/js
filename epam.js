/*jshint multistr:true */
var text = "EPAM is the #1 \
software services and solutions provider.\ From software products to core business\ applications, EPAM has provided expert\ consulting. As the world of technology has\ evolved. Our EPAM style is  pragmatic and \ transparent, forming the backbone for our\ delivery approach.  About 10,500 EPAM\ associates now enjoy.";
var myName="EPAM";
var hits = [];
for (var i=0;i<text.length;i++) 
{
   if (text[i]===myName[0])
   {
      for (var j=i;j<i+myName.length;j++)
      {
        hits.push(text[j])  
      }
   }
}

if (hits.length==0) 
    console.log( "Your name wasn't found!");
else
    console.log(hits);