import Navbar from "../../components/Navbar";

const Admin = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="app-contant">{children}</div>
    </div>
  );
};

export { Admin };
