import React, { memo } from 'react'
import { FooterSwrapper } from "./sytle"
import footerData from "@/assets/data/footer.json"

const AppFooter = memo(() => {
  return (
    <FooterSwrapper>
      <div className="swipper">
        {
          footerData.map((item) => {
            return (<ul key={item.name} className="title">
              <p>{item.name}</p>
              {
                item.list.map((item, index) => {
                  return (<li key={index} className="titele_item">{item}</li>)
                })
              }
            </ul>)
          })
        }
      </div>
    </FooterSwrapper>

  )
})

export default AppFooter