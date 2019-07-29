import React from "react"


export function SearchInput(props) {
    return (

<div className="input-group flex-nowrap">
  <div className="input-group-prepend">
    
  </div>
  <input type="text" className="form-control" placeholder="Title" aria-label="Title" aria-describedby="addon-wrapping" {...props}/>
</div>

    );
  }


  export function SubBtn(props){
  return (
     <button className="btn" {...props}>{props.children}Search</button>
  );
}
