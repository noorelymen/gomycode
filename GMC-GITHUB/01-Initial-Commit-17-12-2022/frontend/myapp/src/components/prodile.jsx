import mylogo from "../assets/fakelogo.png"
const Profile = ()=>{
  const divStyle = {backgroundColor:"yellow"}
    return (
        <div style={divStyle}>
            {/* <img src="/fakelogo.png" width="200" /> */}
            <img src={mylogo} width="200" alt="img" /> 
            <h1 style={{color:"red"}}>Abdelakder Lounis</h1>
            <p className="text-primary">Nostrud excepteur irure do aliquip voluptate est aliqua esse. Consectetur elit aliqua ea irure ad incididunt nostrud non. Fugiat veniam et nulla fugiat do. Enim pariatur nulla quis qui deserunt adipisicing ex laborum excepteur proident. Tempor enim veniam commodo deserunt enim laborum magna qui ea et aliquip tempor dolore.</p>
        </div>
    )
}

export default Profile

