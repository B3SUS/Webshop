import React from "react";

export function Sort({value, onChangeSort}) {

    const [open, setOpen] = React.useState(false);
    const list = [
        {name:'default', sort: 'default'},
        {name:'rating', sort: 'rating'},
        {name:'price (ASC)', sort: '-price'},
        {name:'price (DESC)', sort: 'price'}
    ];

    const onClickListItem = (i) => {
        onChangeSort(i);
        setOpen(false);
    }

  return(
      <div className="ordering">
          <div className="orderby">
              <b>Order by:  </b>
              <span onClick={() => setOpen(!open)}>{value.name}</span>
          </div>
          {
              open && <div className="sort__popup">
                  <ul>
                      {list.map((obj, i) =>(
                          <li
                              key={i}
                              onClick={()=>onClickListItem(obj)}
                              className={value.sort ===  obj.sort ? 'active' : ''}>
                              {obj.name}
                          </li>
                      ))}
                  </ul>
              </div>
          }
      </div>
  )
}