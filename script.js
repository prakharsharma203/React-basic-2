

const dd3 =  React.createElement("dd" ,{class :"content"} , "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.")

const a3 = React.createElement("a" , {href : "#" ,class : "link"} ,"CSS-Styling the web" )

const dt3 = React.createElement("dt" , {class:"term"} ,a3)

//second list

const dd2 =  React.createElement("dd" ,{class :"content"} , "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.")

const a2 = React.createElement("a" , {href : "#" ,class : "link"} ,"HTML — Structuring the web" )

const dt2 = React.createElement("dt" , {class:"term"} ,a2) 
//close second list
// first list
const dd =  React.createElement("dd" ,{class :"content"} , "Provides a practical introduction to web development for complete beginners.")

const a = React.createElement("a" , {href : "#" ,
class : "link"} ,"Getting started with the web" )

const dt = React.createElement("dt" , {class:"term"} ,a) 

//close first list

const dl = React.createElement("dl" , {class : "list"},[dt , dd , dt2 , dd2 , dt3 , dd3]);

const p = React.createElement("p" , {class : "para"} , "The following is a list of all the topics we cover in the MDN learning area.")
const h1 = React.createElement("h1" , {class :"heading"} ,"Topics Covered" )

const div = React.createElement("div", {class : "box"} ,[h1 , p , dl])

ReactDOM.render(div , document.getElementById("root"));