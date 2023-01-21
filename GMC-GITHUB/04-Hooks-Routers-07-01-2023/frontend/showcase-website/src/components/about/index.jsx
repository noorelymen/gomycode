const About= ()=>{
    return (
        <section className="about">
  <div className="container">
    <div className="row mt-5">
      <div className="col-md-6 d-none d-md-block">
        <img src="/rightHeroImage.png" width={400} alt="hello" />
      </div>
      <div className="col-md-6">
        <h1 className="text-center text-blue fw-bold">About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Commodi, ratione? Voluptatum sunt ad necessitatibus eum
          sapiente blanditiis, soluta et impedit assumenda ut labore
          quaerat. Iure quibusdam quos error recusandae nemo. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Eos amet
          distinctio animi adipisci. Laudantium cum eum culpa soluta
          assumenda dolor velit voluptatum, quaerat, hic qui tempora sed
          delectus natus in.
        </p>
        <button className="btn btn-warning">Join now</button>
        <button className="btn btn-outline-warning">Login</button>
      </div>
    </div>
  </div>
</section>

    )
}

export default About