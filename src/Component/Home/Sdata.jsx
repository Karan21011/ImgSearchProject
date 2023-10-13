import './Home.css'

const Sdata=(props)=> {
  const img = `http://source.unsplash.com/1600x1000/?${props.name}`;

  return (
    <>
      <div className='maincard'>
        <img src={img} alt="Network Slow"/>
      <a href={img}>Download</a>
      </div>
    </>
  );
}

export default Sdata;
