import React from 'react'
import "./freinds.css"
function Friends() {
    const freinds=[{
        img:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
        name:"Nathali joe",
        amis:12
    },
{
        img:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
        name:"Leo math",
        amis:3
    },
{
        img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
        name:"Jacke Nacos",
        amis:45
    },
{
        img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        name:"Joseph Conzales",
        amis:2
    },
{
        img:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        name:"Natalie reo",
        amis:8
    }]
  return (
    <div className='freindsection'>
        <div className='first'>
            <h3 className='invitation'>Invitations</h3>
            <span>Voir tout</span>
        </div>
        <div className='freinds'>
{freinds.map((el)=><div className='card'>
    <img src={el.img}/>
    <div className='desc'>
    <h3>{el.name}</h3>
    <p>{el.amis} amis en commun</p>
   
        <button id="btn1">Confirmer</button>
        <button id="btn2">Supprimer</button>
  </div>
</div>)}
        </div>
    </div>
  )
}

export default Friends