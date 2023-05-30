import React from 'react'

const pdfFile="http://localhost:3000/form.pdf"
const Head = () => {
  const downloadFileUrl=(url)=>{
    fetch(url).then(res=>res.blob()).then(blob=>{
      const blobURL=window.URL.createObjectURL(new Blob([blob]))
      const fileName=url.split('/').pop()
      const aTag=document.createElement('a')
      aTag.href=blobURL
      aTag.setAttribute('download',fileName)
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove()
    })
   
  }
  return (
    <>
        <section className='head'>
        <div className='container flexSB top-nav'>
          
            <div>
            <span>Stay Connected</span>
            </div>

            <div className='email'>
           
            <span>enquries@qascertification.com</span>
            </div>

          <div className='social d-flex gap-4'>
          <button  className="btn btn-primary" onClick={()=>{downloadFileUrl(pdfFile)}}>Get Qoute <i className="fas fa-chevron-right"></i></button>
          <a  className="btn btn-primary">Verification <i className="fas fa-chevron-right"></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head