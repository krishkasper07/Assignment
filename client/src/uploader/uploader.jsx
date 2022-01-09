import './uploader.css'
const Uploader = () => {
    const handleChange=(e)=>{
        console.log(e.target.files);
    }
    return ( <div>
        <div className="uploader">
        <input
            type='file'
            className='uploadinput'
            id='customFile'
            accept="application/JSON"
            onChange={handleChange}
          />
        <button>submit</button>
       </div>
       </div>
     );
}
 
export default Uploader;