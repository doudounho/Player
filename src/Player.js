import React from 'react'

const player = ({name="Messi",numero=10,equipe="Paris",nationalite="Argentin",image}) => {
  return (
    <div>
           <div className="card" style= {{width: "18rem"}}>
            <img src={image} className="card-img-top"/>
            <img src="" className="card-img-top"/>
      
            <div className="card-body">
                <h5 className="card-title"> {name} </h5>
                <p className="card-text">numero: {numero} </p>
                <p className="card-text">nationalite: {nationalite} </p>
                <p className="card-text">equipe: {equipe} </p>
                
            </div>
</div>
    </div>
  )
}

export default player