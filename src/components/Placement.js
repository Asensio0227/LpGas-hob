import React,{useState} from 'react'

const Placement = ({ id, name, img, text }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="product-center" key={id}>
                <img src={img} alt={name} />
                <div>
                  <h6>{name}</h6>
                  <p>
                    {
                      showMore ?(
                        text
                      ) : (
                          `${text.substring(0, 200)}...`
                        )
                    }
                    <button
                      onClick={()=>setShowMore(!showMore)}
                    >
                      {showMore  ? "read less ..." : "read more ..."}
                      </button>
                  </p>
                </div>
              </article>
  )
}

export default Placement
