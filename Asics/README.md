# React

<div className="hover-imgs ">
                  {
                    hover.map((img , i) => (
                      <img src={img.src} alt="" key={i} onMouseEnter={() => handleMedia(i)} onMouseLeave={() => handleMedia(0)}/>
                    ))
                  }
               </div>