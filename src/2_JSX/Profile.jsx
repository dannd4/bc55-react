// JSX: Javascript XML
// Là một cú pháp đặc biệt cho phép viết HTML bên trong Javascript

function Profile() {
  const name = "Alice";
  const getEmail = () => "alice@gmail.com";

  return (
    <>
      <h1 className="title">Name: {name}</h1>
      <h1 style={{ backgroundColor: "red" }}>Email: {getEmail()}</h1>
    </>
  );
}

export default Profile;
