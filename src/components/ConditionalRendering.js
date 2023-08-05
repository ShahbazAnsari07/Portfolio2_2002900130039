import React from 'react'

const m = [{
    Name: "Shahbaz",
    Branch: "I.T",
    Roll: 2002900130039

},

{
   Name: "Shaksham",
   Branch: "C.S.E",
   Roll: 2002901540080
},

{
   Name: "Shubham",
   Branch: "C.S.E",
   Roll: 2002900130043
},

{
    Name: "Harsh",
    Branch: "CSDS",
    Roll: 2002900130045
}];
export default function ConditionalRendering() {
    return(
        <div>
            {
                m.map(

                    (obj) => {
                        return(<p>Your Name is {obj.Name} and Branch is {obj.Branch}</p>)
                    }
                )
            }
        </div>
    );
};
